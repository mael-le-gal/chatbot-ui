import {
  ALL_HOSTS,
} from '@/utils/app/const';

import {OpenAIModel, OpenAIModelID, OpenAIModels, UrlFromModel} from '@/types/openai';

export const config = {
  runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const { key } = (await req.json()) as {
      key: string;
    };

    let hosts = ALL_HOSTS.filter(x => x != undefined && x != "");
    let allModels: OpenAIModel[] = [];

    for (const host of hosts) {
      const url = `${host}/v1/models`
      console.log(`GET ${url}`)
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${key ? key : process.env.OPENAI_API_KEY}`
        },
      });

      if (response.status === 401 || response.status === 404) {
        continue
      } else if (response.status !== 200) {
        const text = await response.text();
        console.error(
          `OpenAI API returned an error ${
            response.status
          }: ${text}`,
        );
        throw new Error('OpenAI API returned an error');
      }

      const json = await response.json();

      const models: OpenAIModel[] = json.data
        .map((model: any) => {
          for (const [key, value] of Object.entries(OpenAIModels)) {
            console.log(`Comparing ${key} with ${JSON.stringify(value)} and model ${JSON.stringify(model)}`)
            if (value.name === model.id) {
              let name = value.name
              return {
                id: model.id,
                name,
                url: host
              };
            }
          }
        })
        .filter(Boolean);

      allModels = [...allModels, ...models]
    }
    let modelJson =  JSON.stringify(allModels)
    console.log(`Found ${modelJson}`)
    return new Response(modelJson, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};

export default handler;

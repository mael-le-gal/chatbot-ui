import {
  OPENAI_API_HOST,
  OPENAI_API_TYPE, VLLM_ALFRED_HOST,
  VLLM_LLAMA_HOST,
  VLLM_MISTRAL_HOST,
  VLLM_VIGNOGNE_HOST
} from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_4 = 'gpt-4',
  GPT_4_32K = 'gpt-4-32k',
  LLAMA2_13B = '/meta-llama/Llama-2-13b-chat-hf',
  MISTRAL_7B = '/mistralai/Mistral-7B-Instruct-v0.1',
  VIGOGNE = '/TheBloke/vigogne-2-70B-chat-AWQ',
  ALFRED = '/TheBloke/alfred-40B-1023-AWQ',
}

export const UrlFromModel = (model: OpenAIModel) => {
  if (model.id === OpenAIModelID.LLAMA2_13B) {
    return VLLM_LLAMA_HOST
  } else if (model.id === OpenAIModelID.MISTRAL_7B) {
    return VLLM_MISTRAL_HOST
  } else if (model.id === OpenAIModelID.VIGOGNE) {
    return VLLM_VIGNOGNE_HOST
  } else if (model.id === OpenAIModelID.ALFRED) {
    return VLLM_ALFRED_HOST
  } else {
    return VLLM_VIGNOGNE_HOST
  }
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.MISTRAL_7B;
// export const defaultUrl = OPENAI_API_HOST.split(",")[0]

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.MISTRAL_7B]: {
    id: OpenAIModelID.MISTRAL_7B,
    name: 'Mistral 7B',
    maxLength: 4096,
    tokenLimit: 3072,
  },
  [OpenAIModelID.LLAMA2_13B]: {
    id: OpenAIModelID.LLAMA2_13B,
    name: 'Llama2 13B',
    maxLength: 4096,
    tokenLimit: 3072,
  },
  [OpenAIModelID.ALFRED]: {
    id: OpenAIModelID.ALFRED,
    name: 'Lighton Alfred 40B 1023 AWQ',
    maxLength: 8192,
    tokenLimit: 7168,
  },
  [OpenAIModelID.VIGOGNE]: {
    id: OpenAIModelID.VIGOGNE,
    name: 'Vigogne 2 70B AWQ',
    maxLength: 4096,
    tokenLimit: 3072,
  },
};

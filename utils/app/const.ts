export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "You are a smart bot assistant. Follow the user's instructions carefully. Respond using markdown.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || '';

export const MIXTRAL_8x7B_URL = 'https://mixtral-8x7b-instruct-v01.endpoints.kepler.ai.cloud.ovh.net/api/openai_compat'
export const LLAMA2_13B_URL = 'https://llama-2-13b-chat-hf.endpoints.kepler.ai.cloud.ovh.net/api/openai_compat'
export const MISTRAL_7B_URL = 'https://mistral-7b-instruct-v02.endpoints.kepler.ai.cloud.ovh.net/api/openai_compat'
export const LLAMA3_70B_URL = 'https://llama-3-70b-instruct.endpoints.kepler.ai.cloud.ovh.net/api/openai_compat'
export const LLAMA3_8B_URL = 'https://llama-3-8b-instruct.endpoints.kepler.ai.cloud.ovh.net/api/openai_compat'
export const ALL_HOSTS = [MIXTRAL_8x7B_URL, LLAMA2_13B_URL, MISTRAL_7B_URL, LLAMA3_70B_URL, LLAMA3_8B_URL]

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "1");

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'vllm';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID =
  process.env.AZURE_DEPLOYMENT_ID || '';

export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "You are a smart bot assistant. Follow the user's instructions carefully. Respond using markdown.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const VLLM_01_HOST = process.env.VLLM_01_HOST
export const VLLM_01_MODEL = process.env.VLLM_01_MODEL || 'mistralai/Mistral-7B-Instruct-v0.2'
export const VLLM_02_HOST = process.env.VLLM_02_HOST
export const VLLM_02_MODEL = process.env.VLLM_02_MODEL || '/meta-llama/Llama-2-13b-chat-hf'
export const VLLM_03_HOST = process.env.VLLM_03_HOST
export const VLLM_03_MODEL = process.env.VLLM_03_MODEL || '/OVHcloud/Mixtral-8x7B-Instruct-v0.1-AWQ'

export const ALL_HOSTS = [VLLM_01_HOST, VLLM_02_HOST, VLLM_03_HOST]

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

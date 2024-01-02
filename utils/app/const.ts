export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const VLLM_MISTRAL_HOST = process.env.VLLM_MISTRAL_HOST
export const VLLM_LLAMA_HOST = process.env.VLLM_LLAMA_HOST
export const VLLM_VIGNOGNE_HOST = process.env.VLLM_VIGNOGNE_HOST
export const VLLM_ALFRED_HOST = process.env.VLLM_ALFRED_HOST
export const VLLM_MIXTRAL_8X7B_HOST = process.env.VLLM_MIXTRAL_8X7B_HOST

export const ALL_HOSTS = [VLLM_LLAMA_HOST, VLLM_MISTRAL_HOST, VLLM_VIGNOGNE_HOST, VLLM_ALFRED_HOST, VLLM_MIXTRAL_8X7B_HOST]

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

import {
  LLAMA2_13B_URL,
  MIXTRAL_8x7B_URL,
  MISTRAL_7B_URL,
  LLAMA3_70B_URL,
  LLAMA3_8B_URL,
} from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  MIXTRAL_8x7B = 'Mixtral-8x7B-Instruct-v0.1',
  LLAMA2_13B = 'Llama-2-13b-chat-hf',
  MISTRAL_7B = 'Mistral-7B-Instruct-v0.2',
  LLAMA3_70B = 'Meta-Llama-3-70B-Instruct',
  LLAMA3_8B = 'Meta-Llama-3-8B-Instruct',
}

export const UrlFromModel = (model: OpenAIModel) => {
  if (model.id === OpenAIModelID.MIXTRAL_8x7B) {
    return MIXTRAL_8x7B_URL
  } else if (model.id === OpenAIModelID.LLAMA2_13B) {
    return LLAMA2_13B_URL
  } else if (model.id === OpenAIModelID.MISTRAL_7B) {
    return MISTRAL_7B_URL
  } else if (model.id === OpenAIModelID.LLAMA3_70B) {
    return LLAMA3_70B_URL
  } else if (model.id === OpenAIModelID.LLAMA3_8B) {
    return LLAMA3_8B_URL
  } else {
    return MIXTRAL_8x7B_URL
  }
}

export const DefaultModelID = OpenAIModelID.MIXTRAL_8x7B;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.MIXTRAL_8x7B]: {
    id: OpenAIModelID.MIXTRAL_8x7B,
    name: OpenAIModelID.MIXTRAL_8x7B,
    maxLength: 4096,
    tokenLimit: 3072,
  },
  [OpenAIModelID.LLAMA2_13B]: {
    id: OpenAIModelID.LLAMA2_13B,
    name: OpenAIModelID.LLAMA2_13B,
    maxLength: 4096,
    tokenLimit: 3072,
  },
  [OpenAIModelID.MISTRAL_7B]: {
    id: OpenAIModelID.MISTRAL_7B,
    name: OpenAIModelID.MISTRAL_7B,
    maxLength: 4096,
    tokenLimit: 3072,
  },
  [OpenAIModelID.LLAMA3_70B]: {
    id: OpenAIModelID.LLAMA3_70B,
    name: OpenAIModelID.LLAMA3_70B,
    maxLength: 4096,
    tokenLimit: 3072,
  },
  [OpenAIModelID.LLAMA3_8B]: {
    id: OpenAIModelID.LLAMA3_8B,
    name: OpenAIModelID.LLAMA3_8B,
    maxLength: 4096,
    tokenLimit: 3072,
  },
};

export const DefaultModel = OpenAIModels[DefaultModelID]
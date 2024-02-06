import {
  VLLM_02_HOST,
  VLLM_01_HOST,
  VLLM_03_HOST, VLLM_01_MODEL, VLLM_02_MODEL, VLLM_03_MODEL
} from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
  supportSystemPrompt: boolean
}

export enum OpenAIModelID {
  MODEL_01 = 'MODEL_01',
  MODEL_02 = 'MODEL_02',
  MODEL_03 = 'MODEL_03',
}

export const UrlFromModel = (model: OpenAIModel) => {
  if (model.id === OpenAIModelID.MODEL_03) {
    return VLLM_03_HOST
  } else if (model.id === OpenAIModelID.MODEL_02) {
    return VLLM_02_HOST
  } else if (model.id === OpenAIModelID.MODEL_01) {
    return VLLM_01_HOST
  } else {
    return VLLM_01_HOST
  }
}

export const NameFromModel = (model: OpenAIModel) => {
  if (model.id === OpenAIModelID.MODEL_03) {
    return VLLM_03_MODEL
  } else if (model.id === OpenAIModelID.MODEL_02) {
    return VLLM_02_MODEL
  } else if (model.id === OpenAIModelID.MODEL_01) {
    return VLLM_01_MODEL
  } else {
    return VLLM_01_MODEL
  }
}

export const DefaultModelID = OpenAIModelID.MODEL_01;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.MODEL_01]: {
    id: OpenAIModelID.MODEL_01,
    name: VLLM_01_MODEL,
    maxLength: 4096,
    tokenLimit: 3072,
    supportSystemPrompt: false,
  },
  [OpenAIModelID.MODEL_02]: {
    id: OpenAIModelID.MODEL_02,
    name: VLLM_02_MODEL,
    maxLength: 4096,
    tokenLimit: 3072,
    supportSystemPrompt: false,
  },
  [OpenAIModelID.MODEL_03]: {
    id: OpenAIModelID.MODEL_03,
    name: VLLM_03_MODEL,
    maxLength: 4096,
    tokenLimit: 3072,
    supportSystemPrompt: false,
  },
};

export const DefaultModel = OpenAIModels[DefaultModelID]
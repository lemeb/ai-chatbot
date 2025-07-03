import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { xai } from '@ai-sdk/xai';
import { openai } from '@ai-sdk/openai';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';
import { isTestEnvironment } from '../constants';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model': openai.responses('gpt-4o'),
        'chat-model-reasoning': openai.responses('o4-mini'),
        'title-model': openai.responses('gpt-4o-mini'),
        'artifact-model': openai.responses('gpt-4o'),
      },
      imageModels: {
        'small-model': xai.imageModel('grok-2-image'),
      },
    });

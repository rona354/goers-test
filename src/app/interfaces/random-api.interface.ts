import { Result } from './random-api-results.interface';

export interface RandomAPI {
  results: Result[];
  info: Info;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

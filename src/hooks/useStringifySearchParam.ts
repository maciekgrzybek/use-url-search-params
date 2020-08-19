import { ArrayOptions } from '../types';
import { amendSearchParams } from '../shared';

export const useStringifySearchParam = (
  params: object,
  config?: ArrayOptions
): string => amendSearchParams({ params, config });

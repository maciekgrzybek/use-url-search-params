import { ArrayOptions } from '../types';
import { amendSearchParams } from '../shared';

export const useAppendSearchParam = (
  search: string,
  params: object,
  config?: ArrayOptions
): string => amendSearchParams({ search, params, config });

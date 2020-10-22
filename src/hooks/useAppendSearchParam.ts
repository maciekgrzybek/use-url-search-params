import { ArrayOptions } from '../types';
import { amendSearchParams } from '../shared';

export const useAppendSearchParam = (
  search: string,
  params: Record<string, any>,
  config?: ArrayOptions
): string => amendSearchParams({ search, params, config });

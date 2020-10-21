import { parseToNumber } from '../shared';
import { GetOptions } from '../types';

export const useGetSearchParam = (
  search: string,
  key: string,
  options?: GetOptions
): string | string[] | number | number[] | (string | number)[] | null => {
  const params = new URLSearchParams(search).getAll(key);
  if (params.length === 0) {
    return null;
  }
  if (params.length === 1) {
    return options?.parseNumbers ? parseToNumber(params[0]) : params[0];
  }
  return params.map((singleParam) =>
    options?.parseNumbers ? parseToNumber(singleParam) : singleParam
  );
};

import { GetAllOptions } from '../types';

export const useGetAllSearchParams = (
  search: string,
  options?: GetAllOptions
): object | string[] => {
  if (options?.keysOnly) {
    return Array.from(new URLSearchParams(search).keys());
  } else if (options?.valuesOnly) {
    return Array.from(new URLSearchParams(search).values());
  } else {
    const entries: string[][] = Array.from(
      new URLSearchParams(search).entries()
    );
    let returnObj = {};
    entries.forEach((entry: string[]) => {
      returnObj[entry[0]] = entry[1];
    });
    return returnObj;
  }
};

import { parseToNumber } from '../shared';
import { GetAllOptions } from '../types';

export const useGetAllSearchParams = (
  search: string,
  options?: GetAllOptions
): Record<string, any> | string[] => {
  if (options?.keysOnly) {
    return Array.from(new URLSearchParams(search).keys());
  } else if (options?.valuesOnly) {
    const valuesArray = Array.from(new URLSearchParams(search).values());
    return options?.parseNumbers
      ? valuesArray.map((item) => parseToNumber(item))
      : valuesArray;
  } else {
    const entries: string[][] = Array.from(
      new URLSearchParams(search).entries()
    );
    let returnObj = {};
    entries.forEach((entry: string[]) => {
      returnObj[entry[0]] = options?.parseNumbers
        ? parseToNumber(entry[1])
        : entry[1];
    });
    return returnObj;
  }
};

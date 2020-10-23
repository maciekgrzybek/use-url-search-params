import { parseValue } from '../shared';
import { GetAllOptions } from '../types';

export const useGetAllSearchParams = (
  search: string,
  options?: GetAllOptions
): Record<string, any> | string[] => {
  if (options?.keysOnly) {
    return Array.from(new URLSearchParams(search).keys());
  } else if (options?.valuesOnly) {
    return Array.from(new URLSearchParams(search).values()).map((singleParam) =>
      parseValue(singleParam, options)
    );
  } else {
    const entries: string[][] = Array.from(
      new URLSearchParams(search).entries()
    );
    let returnObj = {};
    entries.forEach((entry: string[]) => {
      returnObj[entry[0]] = parseValue(entry[1], options);
    });
    return returnObj;
  }
};

import { ArrayOptions } from '../types';

export const useStringifySearchParams = (
  params: object,
  config?: ArrayOptions
): string => {
  const startingParams = new URLSearchParams('');
  for (let index in params) {
    if (Array.isArray(params[index])) {
      switch (config?.arrayType) {
        case 'separator':
          let mergedValue = params[index]
            .map((element: string) => element)
            .join(config?.separator || '|');
          startingParams.append(index, mergedValue);
          break;
        case 'bracket':
          params[index].forEach((element: string) => {
            startingParams.append(`${index}[]`, element);
          });
          break;
        case 'indexedBracket':
          params[index].forEach((element: string, i: number) => {
            startingParams.append(`${index}[${i}]`, element);
          });
          break;
        default:
          params[index].forEach((element: string) => {
            startingParams.append(index, element);
          });
      }
    }
    else {
      startingParams.append(index, params[index]);
    }
  }
  return decodeURIComponent(startingParams.toString());
};

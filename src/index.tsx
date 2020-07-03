interface GetAllOptions {
  keysOnly?: boolean;
  valuesOnly?: boolean;
}

interface ArrayOptions {
  arrayType?: 'separator' | 'bracket' | 'indexedBracket';
  separator?: string;
}

const useHasSearchParam = (search: string, key: string): boolean =>
  new URLSearchParams(search).has(key);

const useGetSearchParam = (
  search: string,
  key: string
): string | string[] | null => {
  const params = new URLSearchParams(search).getAll(key);
  return params.length === 0 ? null : params.length === 1 ? params[0] : params;
};

const useGetAllSearchParams = (
  search: string,
  options?: Partial<GetAllOptions>
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

const useAppendSearchParam = (search: string, params: object): string => {
  const startingParams = new URLSearchParams(search);
  for (let index in params) {
    startingParams.append(index, params[index]);
  }
  return startingParams.toString();
};

const useSetSearchParam = (search: string, params: object): string => {
  const startingParams = new URLSearchParams(search);
  for (let index in params) {
    startingParams.set(index, params[index]);
  }
  return startingParams.toString();
};

const useDeleteSearchParam = (
  search: string,
  keys: string | string[]
): string => {
  const startingParams = new URLSearchParams(search);

  if (Array.isArray(keys)) {
    keys.forEach((key) => {
      startingParams.delete(key);
    });
  } else {
    startingParams.delete(keys);
  }

  return startingParams.toString();
};

const useStringifySearchParams = (
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
    } else {
      startingParams.append(index, params[index]);
    }
  }
  return decodeURIComponent(startingParams.toString());
};

export {
  useHasSearchParam,
  useGetSearchParam,
  useAppendSearchParam,
  useSetSearchParam,
  useDeleteSearchParam,
  useGetAllSearchParams,
  useStringifySearchParams,
};

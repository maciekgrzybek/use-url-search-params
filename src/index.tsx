interface Param {
  key: string;
  value: string;
}

const useHasSearchParam = (search: string, key: string): boolean =>
  new URLSearchParams(search).has(key);

const useGetSearchParam = (search: string, key: string): string | null =>
  new URLSearchParams(search).get(key);

const useAppendSearchParam = (
  search: string,
  params: Param[] | Param
): string => {
  const startingParams = new URLSearchParams(search);

  if (Array.isArray(params)) {
    params.forEach((param) => {
      startingParams.append(param.key, param.value);
    });
  } else {
    startingParams.append(params.key, params.value);
  }

  return startingParams.toString();
};

export { useHasSearchParam, useGetSearchParam, useAppendSearchParam };

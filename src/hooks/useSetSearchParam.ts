export const useSetSearchParam = (search: string, params: object): string => {
  const startingParams = new URLSearchParams(search);
  for (let index in params) {
    startingParams.set(index, params[index]);
  }
  return startingParams.toString();
};

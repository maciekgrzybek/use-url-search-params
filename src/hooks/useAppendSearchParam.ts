export const useAppendSearchParam = (search: string, params: object): string => {
  const startingParams = new URLSearchParams(search);
  for (let index in params) {
    startingParams.append(index, params[index]);
  }
  return startingParams.toString();
};
export const useGetSearchParam = (
  search: string,
  key: string
): string | string[] | null => {
  const params = new URLSearchParams(search).getAll(key);
  return params.length === 0 ? null : params.length === 1 ? params[0] : params;
};

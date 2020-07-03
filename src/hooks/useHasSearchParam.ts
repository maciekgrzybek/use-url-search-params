export const useHasSearchParam = (search: string, key: string): boolean =>
  new URLSearchParams(search).has(key);

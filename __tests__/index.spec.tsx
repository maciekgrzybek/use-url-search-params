import {
  useHasSearchParam,
  useGetSearchParam,
  useAppendSearchParam,
} from '../src';

describe('useHasSearchParam', () => {
  test('returns true if param exists', () => {
    expect(useHasSearchParam('?topic=api', 'topic')).toBeTruthy();
  });
  test('returns false if param does not exist', () => {
    expect(useHasSearchParam('?topic=api', 'not-topic')).toBeFalsy();
  });
});

describe('useGetSearchParam', () => {
  test('returns value if param exists', () => {
    expect(useGetSearchParam('?topic=api', 'topic')).toBe('api');
  });
  test('returns null if param does not exist', () => {
    expect(useGetSearchParam('?topic=api', 'not-topic')).toBeNull();
  });
});

describe('useAppendSearchParam', () => {
  test('appends single param to the url', () => {
    expect(
      useAppendSearchParam('?topic=api', { key: 'new-topic', value: 'new-api' })
    ).toBe('topic=api&new-topic=new-api');
  });
  test('appends multiple params to the url', () => {
    expect(
      useAppendSearchParam('?topic=api', [
        { key: 'new-topic', value: 'new-api' },
        { key: 'newer-topic', value: 'newer-api' },
      ])
    ).toBe('topic=api&new-topic=new-api&newer-topic=newer-api');
  });
});

test('sets up new value to existing  param', () => {});
test('deletes existing param', () => {});
test('returns all params with their values', () => {});
test('returns all keys of the params', () => {});
test('returns all values of the params', () => {});
test('returns all the values associated with a given search param', () => {});
test('Sorts all key/value pairs by their keys.', () => {});

test('uses current window location search as a default', () => {});
test('returns error when url is not passed and window is not defined', () => {});
test('uses search string when provided as an argument', () => {});

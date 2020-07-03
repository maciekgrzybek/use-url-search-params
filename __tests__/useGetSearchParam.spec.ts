import { useGetSearchParam } from '../src';

test('returns single value if param exists', () => {
  expect(useGetSearchParam('?topic=api', 'topic')).toBe('api');
});
test('returns an array of values associated with a given search param', () => {
  expect(useGetSearchParam('?topic=api&topic=another-api', 'topic')).toEqual([
    'api',
    'another-api',
  ]);
});
test('returns null if param does not exist', () => {
  expect(useGetSearchParam('?topic=api', 'not-topic')).toBeNull();
});

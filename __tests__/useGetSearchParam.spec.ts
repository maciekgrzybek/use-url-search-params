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

test('does not parse number-string to number if option is not passed', () => {
  expect(useGetSearchParam('?amount=37', 'amount')).toBe('37');
});

describe('parse number-string to number if option is passed', () => {
  test('with one param', () => {
    expect(
      useGetSearchParam('?amount=37', 'amount', { parseNumbers: true })
    ).toBe(37);
  });
  test('with multiple params', () => {
    expect(
      useGetSearchParam('?amount=37&amount=120&api=node', 'amount', {
        parseNumbers: true,
      })
    ).toEqual([37, 120]);
  });
});

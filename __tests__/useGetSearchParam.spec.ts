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
test('does not parse params if options are not passed', () => {
  expect(useGetSearchParam('?amount=true', 'amount')).toBe('true');
  expect(useGetSearchParam('?amount=false', 'amount')).toBe('false');
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

describe('parse boolean-string to boolean if option is passed', () => {
  test('with one param', () => {
    expect(
      useGetSearchParam('?isValid=true', 'isValid', { parseBooleans: true })
    ).toBe(true);
  });
  test('with multiple params', () => {
    expect(
      useGetSearchParam('?isValid=true&isValid=false&api=node', 'isValid', {
        parseBooleans: true,
      })
    ).toEqual([true, false]);
  });
});

test('parse params if options are passed', () => {
  expect(
    useGetSearchParam('?isValid=true&isValid=28&api=node', 'isValid', {
      parseNumbers: true,
      parseBooleans: true,
    })
  ).toEqual([true, 28]);
});

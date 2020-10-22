import { useGetAllSearchParams } from '../src';

test('returns all params with their values', () => {
  expect(useGetAllSearchParams('?topic=api&other=37')).toEqual({
    topic: 'api',
    other: '37',
  });
});
test('returns all params with their values and parse numbers', () => {
  expect(
    useGetAllSearchParams('?topic=api&other=stuff&amount=37', {
      parseNumbers: true,
    })
  ).toEqual({
    topic: 'api',
    other: 'stuff',
    amount: 37,
  });
});
test('returns all keys of the params', () => {
  expect(
    useGetAllSearchParams('?topic=api&other=stuff', { keysOnly: true })
  ).toEqual(['topic', 'other']);
});
test('returns all values of the params', () => {
  expect(
    useGetAllSearchParams('?topic=api&other=stuff', { valuesOnly: true })
  ).toEqual(['api', 'stuff']);
});

test('returns all values of the params and parse numbers', () => {
  expect(
    useGetAllSearchParams('?topic=api&other=stuff&amount=37', {
      valuesOnly: true,
      parseNumbers: true,
    })
  ).toEqual(['api', 'stuff', 37]);
});

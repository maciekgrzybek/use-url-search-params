import { useGetAllSearchParams } from '../src';

  test('returns all params with their values', () => {
    expect(useGetAllSearchParams('?topic=api&other=stuff')).toEqual({
      topic: 'api',
      other: 'stuff',
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


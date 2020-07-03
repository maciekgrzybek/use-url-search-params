import {
  useHasSearchParam,
  useGetSearchParam,
  useAppendSearchParam,
  useSetSearchParam,
  useDeleteSearchParam,
  useGetAllSearchParams,
  useStringifySearchParams,
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
});

describe('useAppendSearchParam', () => {
  test('appends single param to the url', () => {
    expect(useAppendSearchParam('?topic=api', { 'new-topic': 'new-api' })).toBe(
      'topic=api&new-topic=new-api'
    );
  });
  test('appends multiple params to the url', () => {
    expect(
      useAppendSearchParam('?topic=api', {
        'new-topic': 'new-api',
        'newer-topic': 'newer-api',
      })
    ).toBe('topic=api&new-topic=new-api&newer-topic=newer-api');
  });
});

describe('useSetSearchParam', () => {
  test('appends single param in the url', () => {
    expect(useSetSearchParam('?topic=api', { topic: 'new-api' })).toBe(
      'topic=new-api'
    );
  });
  test('appends multiple params in the url', () => {
    expect(
      useSetSearchParam('?topic=api&new-topic=api', {
        topic: 'api-set',
        'new-topic': 'new-api-set',
      })
    ).toBe('topic=api-set&new-topic=new-api-set');
  });
});
describe('useDeleteSearchParam', () => {
  describe('deletes single param from the url', () => {
    test('when url has one param', () => {
      expect(useDeleteSearchParam('?topic=api', 'topic')).toBe('');
    });
    test('when url has multiple params', () => {
      expect(
        useDeleteSearchParam('?topic=api&other-topic=other-api', 'topic')
      ).toBe('other-topic=other-api');
    });
  });
  describe('deletes multiple params from the url', () => {
    test('when url has two params', () => {
      expect(
        useDeleteSearchParam('?topic=api&other-topic=other-api', [
          'topic',
          'other-topic',
        ])
      ).toBe('');
    });
    test('when url has multiple params', () => {
      expect(
        useDeleteSearchParam(
          '?topic=api&other-topic=other-api&and-another=not-api',
          ['topic', 'other-topic']
        )
      ).toBe('and-another=not-api');
    });
  });
});

describe('useGetAllSearchParams', () => {
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
});

describe('useStringifySearchParams', () => {
  describe('returns a search string from regular key/value object', () => {
    test('with single param', () => {
      expect(useStringifySearchParams({ topic: 'api' })).toBe('topic=api');
    });
    test('with multiple params', () => {
      expect(
        useStringifySearchParams({ topic: 'api', something: 'else' })
      ).toBe('topic=api&something=else');
    });
  });
  describe('returns a search string from object that contains array', () => {
    test('with default config', () => {
      expect(
        useStringifySearchParams({ topic: ['api', 'new-api', 'another-api'] })
      ).toBe('topic=api&topic=new-api&topic=another-api');
    });
    describe('with separator config', () => {
      test.each(['|', ',', ';'])('that equals %s', (separator) => {
        expect(
          useStringifySearchParams(
            { topic: ['api', 'new-api', 'another-api'] },
            { arrayType: 'separator', separator }
          )
        ).toBe(`topic=api${separator}new-api${separator}another-api`);
      });
    });
    test('with bracket config', () => {
      expect(
        useStringifySearchParams(
          { topic: ['api', 'new-api', 'another-api'] },
          { arrayType: 'bracket' }
        )
      ).toBe('topic[]=api&topic[]=new-api&topic[]=another-api');
    });
    test('with indexed bracket config', () => {
      expect(
        useStringifySearchParams(
          { topic: ['api', 'new-api', 'another-api'] },
          { arrayType: 'indexedBracket' }
        )
      ).toBe('topic[0]=api&topic[1]=new-api&topic[2]=another-api');
    });
  });
  test('returns a search string from object that contains object', () => {});
});

// change to nunmber
// change to boolean
// decoded encoded

// test('Sorts all key/value pairs by their keys.', () => {});

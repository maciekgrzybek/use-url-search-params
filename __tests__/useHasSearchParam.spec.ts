import { useHasSearchParam } from '../src';

  test('returns true if param exists', () => {
    expect(useHasSearchParam('?topic=api', 'topic')).toBeTruthy();
  });
  test('returns false if param does not exist', () => {
    expect(useHasSearchParam('?topic=api', 'not-topic')).toBeFalsy();
  });;

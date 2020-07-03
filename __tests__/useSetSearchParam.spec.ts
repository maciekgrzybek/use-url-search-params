import { useSetSearchParam } from '../src';

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

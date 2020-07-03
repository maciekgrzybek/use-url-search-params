import { useAppendSearchParam } from '../src';

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

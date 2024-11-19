import { TimestampToSecondsPipe } from './timestamp-to-seconds.pipe';

describe('TimestampToSecondsPipe', () => {
  it('create an instance', () => {
    const pipe = new TimestampToSecondsPipe();
    expect(pipe).toBeTruthy();
  });
});

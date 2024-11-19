import { SecondsToTimestampPipe } from './seconds-to-timestamp.pipe';

describe('SecondsToTimestampPipe', () => {
  it('create an instance', () => {
    const pipe = new SecondsToTimestampPipe();
    expect(pipe).toBeTruthy();
  });
});

import { Logger } from '@nestjs/common';
import { AllExceptionFilter } from './all-exception.filter';

describe('AllExceptionFilter', () => {
  it('should be defined', () => {
    expect(new AllExceptionFilter(new Logger())).toBeDefined();
  });
});

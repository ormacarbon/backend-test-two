import { AppError, AppErrorType } from '#/api/app-error.js';

describe('app-error.ts', () => {
  test('works', () => {
    const error = new AppError(AppErrorType.BAD_REQUEST, 'wrong stuff');

    expect(error.statusCode).toBe(400);
    expect(error.name).toBe('AppError');
    expect(error.type).toBe('BAD_REQUEST');
    expect(error.message).toBe('wrong stuff');
    expect(error.details).toBeNull();
  });
});

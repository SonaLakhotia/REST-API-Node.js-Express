import { addNumbers } from '../utils';

it('should add two numbers correctly', () => {
  const result = addNumbers(2, 3);
  expect(result).toBe(5);
})
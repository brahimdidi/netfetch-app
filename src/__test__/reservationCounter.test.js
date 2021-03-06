/**
 * @jest-environment jsdom
 */
import { counterReservation } from '../modules/printReservation.js';

describe('Test the comments function', () => {
  test('Number of item in the arr', () => {
    const arr = [];
    expect(counterReservation(arr)).toBe(0);
  });

  test('Number of item in the arr', () => {
    const arr = ['Soufiane', 'Vignesh', 'Ridwan', 'Brahim'];
    expect(counterReservation(arr)).toBe(4);
  });

  test('Number of item in the arr', () => {
    const arr = ['Hello people', 'Do you like me?', { go: 1, have: 101 }];
    expect(counterReservation(arr)).toBe(3);
  });

  test('Number of item in the arr', () => {
    const arr = ['Soufiane', {}, [1, 'go'], 2022, 'JavaScript'];
    expect(counterReservation(arr)).toBe(5);
  });
});

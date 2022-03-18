/**
 * @jest-environment jsdom
 */
import {counterComments}  from '../modules/printComment';
console.log(counterComments)


describe('Test the comments function', () => {
  test('Number of item in the arr', () => {
    const arr = [];
    expect(counterComments(arr)).toBe(0);
  });

  test('Number of item in the arr', () => {
    const arr = ['Soufiane', 'Vignesh', 'Ridwan', 'Brahim'];
    expect(counterComments(arr)).toBe(4);
  });

  test('Number of item in the arr', () => {
    const arr = ['Hello people', 'Do you like me?', {go: 1, have: 101}];
    expect(counterComments(arr)).toBe(3);
  });

  test('Number of item in the arr', () => {
    const arr = ['Soufiane', {}, [1, 'go'], 2022, 'JavaScript'];
    expect(counterComments(arr)).toBe(5);
  });

});

   
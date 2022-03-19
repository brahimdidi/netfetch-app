/**
 * @jest-environment jsdom
 */
import moviesCounter from '../modules/moviesCounter.js';

describe('Test the comments function', () => {
  test('Number of movies ', () => {
    // Arrenge
    const moviesData = [{ name: 'movie1' }, { name: 'movie2' }];

    // Assert
    const movieName = moviesData[0].name;
    const moviesNumber = moviesData.length;
    // Act
    expect(moviesCounter(movieName, moviesNumber)).toBe('movie1 (2)');
  });
  test('Number of movies ', () => {
    // Arrenge
    const moviesData = [{ name: 'movie1' }, { name: 'movie2' }, { name: 'movie2' }];

    // Assert
    const movieName = moviesData[1].name;
    const moviesNumber = moviesData.length;
    // Act
    expect(moviesCounter(movieName, moviesNumber)).toBe('movie2 (3)');
  });
  test('Number of movies ', () => {
    // Arrenge
    const moviesData = [{ name: 'movie1' }, { name: 'movie2' }, { name: 'movie4' }, { name: 'movie5' }];

    // Assert
    const movieName = moviesData[3].name;
    const moviesNumber = moviesData.length;
    // Act
    expect(moviesCounter(movieName, moviesNumber)).toBe('movie5 (4)');
  });
});

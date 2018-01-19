import reducer from './bookstore';

describe('Bookstore Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, { type: 'ANYTHING' });
    expect(result).toBeDefined();
  });

  test('adds a book', () => {
    const startState = {
      books: [
        {
          id: 1,
          title: 'SurviveJS - Webpack',
          genre: 'IT',
          price: 19.99
        },
        {
          id: 2,
          title: 'SurviveJS - React',
          genre: 'IT',
          price: 15.99
        }
      ]
    };
    const expectedState = {
      books: [
        {
          id: 1,
          title: 'SurviveJS - Webpack',
          genre: 'IT',
          price: 19.99
        },
        {
          id: 2,
          title: 'SurviveJS - React',
          genre: 'IT',
          price: 15.99
        },
        {
          id: 3,
          title: 'Eloquent JavaScript: A Modern Introduction to Programming',
          genre: 'IT',
          price: 31.96
        }
      ]
    };
    const action = {
      type: 'ADD_BOOK',
      payload: {
        id: 3,
        title: 'Eloquent JavaScript: A Modern Introduction to Programming',
        genre: 'IT',
        price: 31.96
      }
    };
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  });

  test('remove a book', () => {
    const initialState = {
      books: [
        {
          id: 1,
          title: 'SurviveJS - Webpack',
          genre: 'IT',
          price: 19.99
        },
        {
          id: 2,
          title: 'SurviveJS - React',
          genre: 'IT',
          price: 15.99
        },
        {
          id: 3,
          title: 'Eloquent JavaScript: A Modern Introduction to Programming',
          genre: 'IT',
          price: 31.96
        }
      ]
    };
    const expectedState = {
      books: [
        {
          id: 1,
          title: 'SurviveJS - Webpack',
          genre: 'IT',
          price: 19.99
        },
        {
          id: 2,
          title: 'SurviveJS - React',
          genre: 'IT',
          price: 15.99
        }
      ]
    };
    const action = {
      type: 'REMOVE_BOOK',
      payload: {
        id: 3
      }
    };
    const result = reducer(initialState, action);
    expect(result).toEqual(expectedState);
  });

  test('edit a book', () => {
    const initialState = {
      books: [
        {
          id: 1,
          title: 'SurviveJS - Webpack',
          genre: 'IT',
          price: 19.99
        },
        {
          id: 2,
          title: 'SurviveJS - React',
          genre: 'IT',
          price: 15.99
        },
        {
          id: 3,
          title: 'Eloquent JavaScript: A Modern Introduction to Programming',
          genre: 'IT',
          price: 31.96
        }
      ]
    };
    const expectedState = {
      books: [
        {
          id: 1,
          title: 'SurviveJS - Webpack',
          genre: 'IT',
          price: 19.99
        },
        {
          id: 2,
          title: 'SurviveJS - React',
          genre: 'IT',
          price: 15.99
        },
        {
          id: 3,
          title: 'Eloquent JavaScript: A Modern Introduction to Programming',
          genre: 'IT',
          price: 25.99
        }
      ]
    };
    const action = {
      type: 'EDIT_BOOK',
      payload: {
        id: 3,
        title: 'Eloquent JavaScript: A Modern Introduction to Programming',
        genre: 'IT',
        price: 25.99
      }
    };
    const result = reducer(initialState, action);
    expect(result).toEqual(expectedState);
  });
});

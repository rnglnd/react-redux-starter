import reducer from 'reducers/appReducer';

const initialState = {
  initialText: '',
};

describe('App Reducer', () => {
  it('should fetch text to display in the app', () => {
    expect(reducer(initialState, {
      type: 'FETCH_TEXT',
      payload: '',
    })).toEqual({
      ...initialState,
      initialText: '',
    });
  });
});


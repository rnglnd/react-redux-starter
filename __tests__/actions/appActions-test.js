import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as appActions from 'actions/appActions.js';
import appApis from 'apis/appApis';

jest.mock('apis/appApis');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('App Actions', () => {
  it('should fetch text to display in the aoo', () => {
    appApis.getText.mockImplementationOnce(() =>
      Promise.resolve({ data: '' }));

    const store = mockStore('');
    const expectedActions = [{
      type: 'FETCH_TEXT',
      payload: '',
    }];

    return store.dispatch(appActions.fetchText())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});


import { getText } from 'apis/appApis';

export const fetchText = () => dispatch =>
  getText()
    .then(({ data }) => (
      dispatch({
        type: 'FETCH_TEXT',
        payload: data,
      })
    ));

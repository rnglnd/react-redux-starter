const initialState = {
  initialText: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TEXT':
      return {
        ...state,
        initialText: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;

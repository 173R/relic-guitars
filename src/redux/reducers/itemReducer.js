const initialState = {
  item: {},
  loading: true,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ITEM_LOADED':
      return {
        ...state,
        loading: false,
        item: action.payload,
      };
    case 'ITEM_REQUESTED':
      return {
        ...state,
        item: {},
        loading: true,
      };
    default: return state;
  }
}

export default itemReducer;
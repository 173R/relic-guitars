
const itemsLoaded = (newItems) => {
  return {
    type : 'ITEMS_LOADED',
    payload: newItems,
  };
};

const itemsRequested = () => {
  return {
    type : 'ITEMS_REQUESTED',
  };
};

const setCategory = (category) => {
  return {
    type : 'SET_CATEGORY',
    payload: category,
  };
}

const fetchItems = (category) => (dispatch) => {
  dispatch(itemsRequested());

  fetch(`http://localhost:3000/${category}`)
    .then(resolve => resolve.json())
    .then(data => dispatch(itemsLoaded(data)));
};

export {
  itemsLoaded,
  itemsRequested,
  fetchItems,
  setCategory,
};
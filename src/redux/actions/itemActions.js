
const itemRequested = () => {
  return {
    type: "ITEM_REQUESTED",
  }
}
const itemLoaded = (item) => {
  return {
    type: "ITEM_LOADED",
    payload: item,
  }
}

const fetchItem = (id) => (dispatch) => {
  dispatch(itemRequested());
  fetch(`http://localhost:3001${id}`)
    .then(resolve => resolve.json())
    .then(data => dispatch(itemLoaded(data)));
}

export {itemRequested,itemLoaded,fetchItem};
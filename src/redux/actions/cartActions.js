
const addToCart = (newItem) => {
  return {
    type: 'ADD_TO_CART',
    payload: newItem,
  }
};

const removeFromCart = (deletedItem) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: deletedItem,
  }
};

export {addToCart, removeFromCart};
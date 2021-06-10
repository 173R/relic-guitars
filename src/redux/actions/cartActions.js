
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

const quantityInc = (target) => {
  return {
    type: 'QUANTITY_INC',
    payload: target,
  }
}
const quantityDec = (target) => {
  return {
    type: 'QUANTITY_DEC',
    payload: target,
  }
}

export {addToCart, removeFromCart, quantityInc, quantityDec};

const initialState = {
  cart: [],
}

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        cart: [...state.cart, action.payload],
      }
    case 'REMOVE_FROM_CART':
      const newCart  = [...state.cart];
      newCart.splice(state.cart.indexOf(action.payload),1);
      return {
        cart: newCart,
      }
    default:
      return state
  }
};

export default cartReducer;
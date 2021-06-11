
const initialState = {
  cart: {},
}

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      let newItem = {};
      if(!state.cart.hasOwnProperty(action.payload.id)) {
        newItem = {
          [action.payload.id]: [action.payload, 1]
        }
      }
      else {
        newItem = {
          [action.payload.id]: [state.cart[action.payload.id][0], ++state.cart[action.payload.id][1]]
        }
      }
      return {
        cart: {...state.cart, ...newItem},
      }
    case 'REMOVE_FROM_CART':
      const newCart  = {...state.cart};
      delete newCart[action.payload.id];
      return {
        cart: newCart,
      }
    case 'QUANTITY_INC':
      return {
        cart: {...state.cart, [action.payload[0].id]: [action.payload[0], ++state.cart[action.payload[0].id][1]]}
      };
    case 'QUANTITY_DEC':
      return {
        cart: {...state.cart, [action.payload[0].id]: [action.payload[0], --state.cart[action.payload[0].id][1]]}
      };
    default:
      return state
  }
};

export default cartReducer;
export const order = (state = {}, action) => {
  switch(action.type) {
    case "ADD_ORDER":
      return {
        id: "",
        name: action.name,
        quantity: action.quantity,
        place: "beta"
      };
    default:
      return state;
  }
}

export const orders = (state = [], action) => {
  switch(action.type) {
    case "ADD_ORDER":
      const nextState = {
        orders: [
        ...state.orders,
        order(undefined, action)
      ]};
      return nextState;
    case "ALL_ORDERS":
      return {
        orders: action.orders
      };
    default:
      return state;
  }
}

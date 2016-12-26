import {actionTypes} from "./action-types"

export const order = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.AddOrder:
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
    case actionTypes.AddOrder:
      const nextState = {
        orders: [
        ...state.orders,
        order(undefined, action)
      ]};
      return nextState;
    case actionTypes.AllOrders:
      return {
        orders: action.orders
      };
    default:
      return state;
  }
}

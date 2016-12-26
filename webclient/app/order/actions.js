import {actionTypes} from "./action-types"

export const addOrder = (item) => {
  return {
    meta: {
      remote: true
    },
    type: actionTypes.AddOrder,
    name: item,
    quantity: 1,
    place: "beta"
  };
}

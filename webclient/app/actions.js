export const addOrder = (item) => {
  return {
    meta: {
      remote: true
    },
    type: "ADD_ORDER",
    name: item,
    quantity: 1,
    place: "beta"
  };
}

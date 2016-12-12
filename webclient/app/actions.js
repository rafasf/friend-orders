export const addOrder = (item) => {
  return {
    type: "ADD_ORDER",
    name: item,
    quantity: 1,
    place: "beta"
  };
}

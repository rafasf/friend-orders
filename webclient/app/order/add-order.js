import React from "react"
import {connect} from "react-redux"
import {addOrder} from "../actions"

const addOrderInput = ({dispatch}) => {
  let input;
  return (<form onSubmit={e => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addOrder(input.value.trim()));
    input.value = '';
  }}>
  <input ref={node => { input = node }} type="text" className="an-item" placeholder="Item" />
  <button type="submit" className="primary-btn">Add</button>
</form>);
};

const AddOrder = connect()(addOrderInput);

export default AddOrder;


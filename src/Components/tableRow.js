import React from "react";
import TableCell from './tableCell'

const TableRow = props => {
  //console.log(props)
  return(
    <tr>
      <td>{props.product}</td>
      <td>
        <input 
          onChange = {(event) => props.updateAmount(props.id, event.target.value)} 
          id = 'amount' 
          type = 'number' 
          value = {props.amount}/>
      </td>
      <td>
        <input 
        onChange = {(event) =>  props.updatePrice(props.id, event.target.value)} 
        id = 'price' 
        type = 'number'
        value = {props.price}/>
      </td>
      <td>{props.totalPrice}</td>
    </tr>
  
  )
};

export default TableRow;

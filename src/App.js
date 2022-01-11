import React, { useState, useEffect, useCallback } from 'react';
import TableRow from './Components/tableRow';
import './App.css';

function App() {
  
  const [ tableState, setTableState ] = useState([
    {
      id: 'redSock',
      product: 'Красные носки',
      amount: 0,
      price: 0,
      totalPrice: 0
    },
    {
      id: 'blueSock',
      product: 'Синие носки',
      amount: 0,
      price: 0,
      totalPrice: 0
    },
    {
      id: 'colorlessSock',
      product: 'Бесцветные носки',
      amount: 0,
      price: 0,
      totalPrice: 0
    }
  ])

  // useEffect(() => {
  //   const updatedTotalPrice = tableState.map(item => {
      
  //     const totalprice = item.amount * item.price

  //     return {
  //       ...item,
  //       totalPrice: totalprice
  //     }
  //   })
  //   setTableState(updatedTotalPrice)
  // }, [])
  const allPrice = tableState.map(item => item.totalPrice).reduce((sum, current) => sum + current, 0)

  function updateAmount(id, value) {
    const updatedAmountState = tableState.map(item => {
      if(item.id === id) {
        return {
          ...item,
          totalPrice: value * item.price,
          amount: +value,
        }
      }
      return item
    })
    
    setTableState(updatedAmountState)
  
  }

  function updatePrice(id, value) {
    const updatedPriceState = tableState.map(item => {
      if(item.id === id) {        
        return {
          ...item,
          totalPrice: item.amount * value,
          price: +value,
        }
      }
      return item
    })
    
    setTableState(updatedPriceState)
  }

 

  let row = tableState.map(item => 
    <TableRow 
      id = {item.id}
      product = {item.product}
      price = {item.price}
      totalPrice = {item.totalPrice}
      updateAmount = {updateAmount}
      updatePrice = {updatePrice}
    >
    </TableRow>)


  return (
    <div className="App">
      <table>
        <thead>
          <tr className = "header">
            <th>Название товара</th>
            <th>Количество</th>
            <th>Стоимость 1 ед.</th>
            <th>Общая Стоимость</th>
          </tr>
        </thead>
        <tbody className = 'body'>
          {row}
        </tbody>
        <tfoot className = "footer">
          <tr>
            <td colSpan = '3'>Общая стоимость товаров</td>
            <td>{allPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;


/*
  <tr>
    <td>Красный носок</td>
    <td><input type = 'number'/></td>
    <td><input  type = 'number'/></td>
    <td><label>0</label></td>
  </tr>
  <tr>
    <td>Синий носок</td>
    <td><input type = 'number'/></td>
    <td><input type = 'number'/></td>
    <td></td>
  </tr>
  <tr>
    <td>Бесцветный носок</td>
    <td><input type = 'number'/></td>
    <td><input type = 'number'/></td>
    <td></td>
  </tr>
   <tfoot className = "footer">
          <tr>
            <td colSpan = '3'>Общая стоимость товаров</td>
            <td></td>
          </tr>
        </tfoot>
*/
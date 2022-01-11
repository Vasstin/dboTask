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

  const [ isSorted, setIsSorted] = useState({
    sortedByPrice: "up"
  })

  console.log(isSorted)
  // useEffect(() => {
  //   console.log(tableState)
  //   function sortByPrice() {
  //     // let sortedRow = tableState.sort((a, b) => a.totalPrice - b.totalPrice);
  //     // console.log(sortedRow)
  //     // sortedRow = tableState.map(item => {
  //     //   console.log(item)       
  //     //     return {
  //     //       ...item
  //     //     }
  //     // })
  //     setTableState(tableState.sort((a, b) => a.totalPrice - b.totalPrice))
  //   }
  // }, [tableState])
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

  function sortByPrice() {
    let sortedRow;
    if(isSorted.sortedByPrice === 'up') {
      setIsSorted(
        { 
          ...isSorted, 
          sortedByPrice: "down"
        })
      sortedRow = tableState.sort((a, b) => a.totalPrice - b.totalPrice);
      sortedRow = tableState.map(item => { 
          return {
            ...item
          }
      })
    } else if(isSorted.sortedByPrice === 'down') {
      setIsSorted(
        { 
          ...isSorted, 
          sortedByPrice: "up"
        })
      sortedRow = tableState.sort((a, b) => b.totalPrice - a.totalPrice);
      sortedRow = tableState.map(item => { 
          return {
            ...item
          }
      })
    }
    setTableState(sortedRow)
  }
  console.log(tableState)
  let row = tableState.map(item => 
    <TableRow 
      id = {item.id}
      product = {item.product}
      price = {item.price}
      amount = {item.amount}
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
            <th className = 'sortButton' onClick={sortByPrice}>Общая Стоимость</th>
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
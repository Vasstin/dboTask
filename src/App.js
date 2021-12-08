import React, { useState } from 'react';
import './App.css';

function App() {

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
            <td><label>0</label></td>
          </tr>
          <tr>
            <td>Бесцветный носок</td>
            <td><input type = 'number'/></td>
            <td><input type = 'number'/></td>
            <td><label>0</label></td>
          </tr>
        </tbody>
        <tfoot className = "footer">
          <tr>
            <td colSpan = '3'>Общая стоимость товаров</td>
            <td><lable >0</lable></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;

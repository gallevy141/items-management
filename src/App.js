import React, { useState } from 'react'
import Items from './components/Items'

function App() {
  const [items, setItems] = useState([
    { name: 'item1', price: 5 },
    { name: 'item2', price: 7 },
    { name: 'item3', price: 10 },
    { name: 'item4', price: 2 },
  ])
  
  const selectItem = (item) => {
    console.log(item)
  }

  return (
    <div style={{ backgroundColor: 'green', color: 'black' }}>
      <h1>Items Management</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Items items={items} selectItem={selectItem} />
        <div style={{ border: '2px solid green', color: 'black' }}>Item Details</div>
        <div style={{ border: '2px solid green', color: 'black' }}>Add New Item</div>
      </div>
    </div>
  )
}

export default App
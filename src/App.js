import React, { useState } from 'react'
import Items from './components/Items'
import ItemDetails from './components/ItemDetails'

function App() {
  const [items, setItems] = useState([
    { name: 'item1', price: 5, image: 'image-url-1' },
    { name: 'item2', price: 7, image: 'image-url-2' },
    { name: 'item3', price: 10, image: 'image-url-3' },
    { name: 'item4', price: 2, image: 'image-url-4' },
  ])
  const [selectedItem, setSelectedItem] = useState(null)

  const selectItem = (item) => {
    setSelectedItem(item)
  }

  return (
    <div style={{ backgroundColor: 'green', color: 'black' }}>
      <h1>Items Management</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Items items={items} selectItem={selectItem} />
        <ItemDetails selectedItem={selectedItem} />
        <div style={{ border: '2px solid green', color: 'black' }}>Add New Item</div>
      </div>
    </div>
  )
}

export default App
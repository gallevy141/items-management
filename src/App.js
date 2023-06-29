import React, { useState } from 'react'
import Items from './components/Items'
import ItemDetails from './components/ItemDetails'
import NewItemForm from './components/NewItemForm'

function App() {
  const [items, setItems] = useState([
    { name: 'item1', price: 5, image: 'image-url-1' },
    { name: 'item2', price: 7, image: 'image-url-2' },
    { name: 'item3', price: 10, image: 'image-url-3' },
    { name: 'item4', price: 2, image: 'image-url-4' },
  ]);
  const [selectedItem, setSelectedItem] = useState(null)

  const selectItem = (item) => {
    setSelectedItem(item)
  }

  const addItem = (item) => {
    setItems(prevItems => [...prevItems, item])
  }

  return (
    <div>
      <h1 style={{ backgroundColor: 'green', color: 'black' }}>Items Management</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '30%', border: '2px solid green', color: 'green' }}>
          <Items items={items} selectItem={selectItem} />
        </div>
        <div style={{ width: '30%', border: '2px solid green', color: 'black' }}>
          <ItemDetails selectedItem={selectedItem} />
        </div>
        <div style={{ width: '30%', border: '2px solid green', color: 'black' }}>
          <NewItemForm addItem={addItem} />
        </div>
      </div>
    </div>
  )
}

export default App
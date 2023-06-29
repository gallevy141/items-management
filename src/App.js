import React from 'react'

function App() {
  return (
    <div style={{ backgroundColor: 'green', color: 'black' }}>
      <h1>Items Management</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ border: '2px solid green', color: 'green' }}>Items</div>
        <div style={{ border: '2px solid green', color: 'black' }}>Item Details</div>
        <div style={{ border: '2px solid green', color: 'black' }}>Add New Item</div>
      </div>
    </div>
  )
}

export default App
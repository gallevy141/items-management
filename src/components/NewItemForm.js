import React, { useState } from 'react'

function NewItemForm({ addItem }) {
  const [showForm, setShowForm] = useState(false)
  const [item, setItem] = useState({ name: '', price: '', image: '' })

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(item)
    setItem({ name: '', price: '', image: '' })
    setShowForm(false)
  }

  if (!showForm) {
    return (
      <div>
        <h2>Item Form</h2>
        <button onClick={() => setShowForm(true)}>Add New Item</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={item.name} onChange={handleChange} placeholder="Name" required />
      <input name="price" value={item.price} onChange={handleChange} placeholder="Price" type="number" required />
      <input name="image" value={item.image} onChange={handleChange} placeholder="Image URL" required />
      <button type="submit">Add</button>
    </form>
  )
}

export default NewItemForm
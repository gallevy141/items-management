import React, { useState } from 'react'

const NewItemForm = ({ addItem }) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addItem({ name, price: parseFloat(price), image })
        setName('')
        setPrice('')
        setImage('')
    }

    return (
        <div style={{ border: '2px solid green', color: 'black' }}>
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Price:
                    <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </label>
                <label>
                    Image URL:
                    <input type="url" value={image} onChange={(e) => setImage(e.target.value)} required />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewItemForm
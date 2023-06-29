import React from 'react'

const Items = ({ items, selectItem }) => {
    return (
        <div style={{ border: '2px solid green', color: 'green' }}>
            <h2>Items</h2>
            {items.map((item, index) => (
                <div key={index} onClick={() => selectItem(item)}>
                    <p>{item.name} ${item.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Items
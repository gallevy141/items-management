import React from 'react'

const ItemDetails = ({ selectedItem }) => {
    return (
        <div style={{ border: '2px solid green', color: 'black' }}>
            <h2>Item Details</h2>
            {selectedItem ?
                <>
                    <p>{selectedItem.name}</p>
                    <p>${selectedItem.price}</p>
                    <img src={selectedItem.image} alt={selectedItem.name} />
                </>
                :
                <p>No item selected</p>
            }
        </div>
    )
}

export default ItemDetails
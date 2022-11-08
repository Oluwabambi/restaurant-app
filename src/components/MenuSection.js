import React from 'react'

const MenuSection = ({ name, description, price }) => {
  return (
    <div className='m-sect'>
        <div className="m-sect-details">
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <h4>{price}</h4>
        </div>
    </div>
  )
}

export default MenuSection
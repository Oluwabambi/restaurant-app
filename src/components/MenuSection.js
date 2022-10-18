import React from 'react'

const MenuSection = ({ name, description, price }) => {
  return (
    <div className='m-sect'>
        <div className="m-sect-one">
            <h1>{name}</h1>
            <h3>{price}</h3>
        </div>
        <div className="m-sect-two">
            <p>{description}</p>
        </div>
    </div>
  )
}

export default MenuSection
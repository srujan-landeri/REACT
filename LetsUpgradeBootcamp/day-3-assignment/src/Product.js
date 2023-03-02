import React from 'react'

// receving the product data passed via props from the parent
const Product = (props) => {
  
    const product = props.product

    return (
        <div className='product--container'>
        <h3 className='product--title'> <span className = "highlight">Title:</span>  Product{product.id}</h3>
        <h3 className='product--price'><span className = "highlight">Price:</span> {product.price}</h3>
        <h3 className='product--desc'><span className = "highlight">Description:</span> {product.description}</h3>
        </div>
    )
}

export default Product

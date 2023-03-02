import React from "react"
import Product from "./Product"

export default function App(){

    // details of the two products
    const products = [
        {
            id:1,
            price:10,
            description:'First Product'
        },
        {
            id:2,
            price:20,
            description:'Second Product'
        }
    ]

    return (
        <div className="App">

            <div className="products--container">
            {/* title */}
            <h1>My Demo Shop</h1>

            {/* displaying products by creating the product compontnet */}
            <h1 className="products--heading">Products</h1>
                <div className="inner-container">
                    <Product product = {products[0]}/>
                    <Product product = {products[1]}/>
                </div>

            </div>
        </div>
    )
}
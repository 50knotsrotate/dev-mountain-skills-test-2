import React, { Component } from 'react'
import './Product.css'



export default function Product(props) { 
    return (
        <div className='product'>
            <div className='image'>
                <img src={props.imageURL} className='product-image' />
            </div>

            <div className='name-price'>
                <h1>{props.name}</h1>
                <h3>{`$${props.price}`}</h3>
                <div id='buttons'>
                    <button onClick={() => props.deleteItem(props.id)}>Delete</button>
                    <button onClick={() => props.selectItem({ id: props.id, imageURL: props.imageURL, price: props.price, name: props.name })}>Edit</button>
                </div>
            </div>

        </div>
        
    )
}

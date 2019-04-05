import React, { Component } from 'react'
import Product from '../Product/Product'
import './Dashboard.css'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const products = this.props.inventory.map(product => { 
            return <Product
                inventory={this.props.inventory}
                name={product.name}
                price={product.price}
                imageURL={product.URL}
            />
        })

        return (
            <div className = 'dashboard-container'>
                {products}
            </div>
        )
      
    }
}

export default Dashboard
import React, { Component } from 'react'
import Product from '../Product/Product'
import './Dashboard.css'
import Axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    deleteItem = id => { 
        //call get products from APP
        console.log(id)
        Axios.delete(`/api/inventory/${id}`)
            .then(res => { 
                this.props.getProducts()
            })
        
    }

    render() {
        const products = this.props.inventory.map(product => { 
            return <Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                imageURL={product.url}
                refreshList={this.props.getProducts}
                deleteItem={this.deleteItem}
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
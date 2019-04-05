import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: '',
            productName: '',
            price: '',
            selectedProduct: false 
        }
    }

    componentDidUpdate = () => { 
        if (this.props.selectedProduct && !this.state.selectedProduct) {

            this.setState({
                imageUrl: this.props.selectedProduct.imageURL,
                productName: this.props.selectedProduct.name,
                price: this.props.selectedProduct.price,
                selectedProduct: this.props.selectedProduct
            })
        }
    }
    addingImageURL = val => { 
        this.setState({
            imageUrl: val
        })
        }


    addingName = val => { 
        this.setState({
            productName: val
        })
    }

    addingPrice = price => { 
        this.setState({
            price
        })
    }

    edit = obj => { 
        var newObj = Object.assign({}, obj)
        this.props.edit(newObj)
        this.cancel()
    }

    cancel = () => { 

        this.setState({
            imageUrl: '',
            productName: '',
            price: '',
            selectedProduct: false
        })
    }

    submitItem = (obj) => { 
        this.props.submitItem(obj)
        this.setState({
            imageUrl: '',
            productName: '',
            price: '',
            selectedProduct: false
        })  
    }
    //I conbined this.props.submitItem with this.cancel just so I can update the inventory in App while clearing state in this component at the same time. 


    render() {
        return (
            <div className='form-wrapper'>
                <img className='form-picture' src={this.state.selectedProduct ? this.state.selectedProduct.imageURL : this.state.imageUrl} alt={'No image available'}/> 

                <div className='form-inputs'>
                    <h3>URL:</h3>
                    <input value={this.state.imageUrl} onChange={(e) => this.addingImageURL(e.target.value)} className = 'form-input' type = 'text' />
                    <h3>NAME</h3>
                    <input value={ this.state.productName} onChange={(e) => this.addingName(e.target.value)} className = 'form-input' type = 'text' />
                    <h3>Price</h3>
                    <input onChange={(e) => this.addingPrice(e.target.value)} value={this.state.price} className ='form-input' type = 'number' />
                </div>
                <div className='form-buttons'>
                    {!this.state.selectedProduct ? <button onClick={() => this.submitItem({ URL: this.state.imageUrl, name: this.state.productName, price: this.state.price })}>Submit</button> : <button onClick={() => this.edit(this.state)}>Update</button> }
                    {this.props.selectedProduct ? <button onClick={this.cancel}>Cancel</button> : <button onClick={this.cancel}>Confirm</button> }
                </div>
            </div>
        )
    }
}

export default Form
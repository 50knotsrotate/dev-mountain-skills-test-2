import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';

class App extends Component {
 
    constructor(){ 
      super()

      this.state = {
        inventory: [],
        selectedProduct: null
      }
      this.getProducts = this.getProducts.bind(this)
    }
  
  componentDidMount = () => { 
    this.getProducts()
      
  }

  edit = (obj) => { 
    console.log('called')
    axios.put(`/api/inventory/${obj.selectedProduct.id}?newText=${obj.productName}&price=${obj.price}&url=${obj.imageUrl}`)
      .then(res => { 
        this.setState({
          inventory: res.data,
          selectedProduct: null
        })
      })
    
  }
  
  submit = item => { 
    axios.post('/api/inventory', item)
      .then(res => { 
        this.setState({
          inventory: res.data
        })
      })
  }

  getProducts() { 
    axios.get('/api/inventory')
      .then(res => {
        this.setState({
          inventory: res.data,
          selectedProduct: null
        })
      }).catch(err => console.log(err))
  }

  selectItem = product => { 
    this.setState({
      selectedProduct: product
    })

  }
    render(){
      return (
        <div className="App">
        
          <Header />
          <div className = 'dashboard-form'>
            <Dashboard
              getProducts={this.getProducts}
              inventory={this.state.inventory}
              selectItem={this.selectItem}
              
            />
          <Form
              submitItem={this.submit}
              selectedProduct={this.state.selectedProduct}
              edit={this.edit}
            />
            </div>
        </div>
      );
    }
  }


export default App;

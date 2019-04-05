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
        inventory: []
      }
      this.getProducts = this.getProducts.bind(this)
    }
  
  componentDidMount = () => { 
    this.getProducts()
      
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
          inventory: res.data
        })
      }).catch(err => console.log(err))
  }
    render(){
      return (
        <div className="App">
        
          <Header />
          <div className = 'dashboard-form'>
            <Dashboard
              getProducts={this.getProducts}
              inventory={this.state.inventory}
            />
          <Form
            submitItem={this.submit}
            />
            </div>
        </div>
      );
    }
  }


export default App;

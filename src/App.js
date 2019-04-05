import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends Component {
 
    constructor(){ 
      super()

      this.state = {
        inventory: []
      }
    }
  
  submit = item => { 
    console.log(item)
    let newInventory = [...this.state.inventory, item]
    this.setState({
      inventory: newInventory
    })
  }
    render(){
      return (
        <div className="App">
        
          <Header />
          <div className = 'dashboard-form'>
            <Dashboard
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

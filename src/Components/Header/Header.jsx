import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className = 'header'>
                <h1>This is my Header component</h1>
            </div>
        )
    }
}

export default Header
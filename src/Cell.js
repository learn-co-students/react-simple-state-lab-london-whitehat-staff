import React, { Component } from 'react'

export default class Cell extends Component {
    constructor(value){
    super(value)
    this.state = {
        color: this.props.value
    }
    }
    onClick() {
        this.setState({
            color: '#333'
        })
    }
    render(){
        return(
            <div style={{backgroundColor: this.state.color}} className="cell" onClick={this.onClick.bind(this)}></div>
        )
    }

    
}
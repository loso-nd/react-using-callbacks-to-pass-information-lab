import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  render() {
    return (
      <div onClick = {this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}

// To finish up this application, we now need to configure our `Cell` component so that when it is clicked, it changes color to the currently selected color. In `Matrix`, we're already passing down the selected color in `genRow()`
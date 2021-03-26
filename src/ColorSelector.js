import React, { Component } from 'react';

export default class ColorSelector extends Component {


// We need to update this code so that when any one of these `div`s is clicked the
// hexadecimal color value of that `div` becomes the selected color in `Matrix`. For
// click events, we know we'll have to add an event and provide a callback on the `div` element itself:
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {

// Inside the onClick() callback, we'll call `this.props.setSelectedColor()`, but this callback function will be defined here?

      let callback = () => this.props.setSelectedColor(str)

      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}

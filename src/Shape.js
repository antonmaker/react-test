import React, { Component } from 'react';

class Shape extends Component {
  render() {
    const options = this.props.options;
    const top = (options.y - options.width/2);
    const left = (options.x - options.width/2);

    const style = {
      backgroundColor: options.color,
      width: options.width + 'px',
      height: options.width + 'px',
      top: top + 'px',
      left: left + 'px',
    };

    return (
      <div
        className={"Shape " + options.shape}
        style={style}
        onClick={() => this.props.onClick()}
      />
    );
  }
}

export default Shape;
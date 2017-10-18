import React, { Component } from 'react';
import Shape from './Shape';
import SHAPE_CONSTS from './consts';
import { random, randomColor } from './functions';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shapes: [],
    }
  }

  handleClick(e) {
    if (e.nativeEvent.target.className !== 'Board') return;

    const shape = random(0, 1) ? 'circle' : 'square';
    const color = randomColor();
    const width = random(
      SHAPE_CONSTS[shape].MIN_WIDTH,
      SHAPE_CONSTS[shape].MAX_WIDTH
    );
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    let shapes = this.state.shapes.slice();
    shapes.push({
      shape: shape,
      color: color,
      width: width,
      x: x,
      y: y,
    });
    this.setState({
      shapes: shapes,
    });
  }

  handleCircleClick(key) {
    let shapes = this.state.shapes.slice();
    shapes.splice(key, 1);
    this.setState({
      shapes: shapes,
    });
  }

  rendershapes() {
    return this.state.shapes.map((circleOptions, key) => {
      return (
        <Shape
          key={key}
          options={circleOptions}
          onClick={() => this.handleCircleClick(key)}
        />
      );
    })
  }

  render() {
    let shapes = this.rendershapes();
    return (
      <div className="Board" onClick={(e) => this.handleClick(e)}>
        {
          this.state.shapes.length === 0
            ? (<h1>Click anywhere on the page!</h1>)
            : ''
        }
        {shapes}
      </div>
    );
  }
}

export default Board;
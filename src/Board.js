import React, { Component } from 'react';
import Shape from './Shape';
import SHAPE_CONSTS from './consts';
import { random, randomColor } from './functions';

/**
 * Board component. Where all the action happens.
 * Click on the board, to get random Shape appeared on it.
 */
export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shapes: [],
    }
  }

  /**
   * Handles click action on the Board.
   * Adds new Shape to the Board with randomly generated form, width
   * and color. Adds it to the Board state object.
   * @param {Proxy} e click event Proxy
   */
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

  /**
   * Handles click on the Shape.
   * Deletes the clicked Shape from the Board and state.
   * @param {Number} key Shape index
   */
  handleShapeClick(key) {
    let shapes = this.state.shapes.slice();
    shapes.splice(key, 1);
    this.setState({
      shapes: shapes,
    });
  }

  /**
   * Shapes renderer
   * @returns {Array} Array of Shape Components
   */
  rendershapes() {
    return this.state.shapes.map((shapeOptions, key) => {
      return (
        <Shape
          key={key}
          options={shapeOptions}
          onClick={() => this.handleShapeClick(key)}
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

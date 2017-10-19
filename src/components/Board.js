import React, { Component } from 'react';
import Shape from './Shape';

/**
 * Board component. Where all the action happens.
 * Click on the board, to get random Shape appeared on it.
 */
export default class Board extends Component {
  /**
   * Handles click action on the Board.
   * Adds new Shape to the Board with randomly generated form, width
   * and color. Adds it to the Board state object.
   * @param {Proxy} e click event Proxy
   */
  handleClick(e) {
    if (e.nativeEvent.target.className !== 'Board') return;

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    this.props.onBoardClick(x, y);
  }

  /**
   * Shapes renderer
   * @returns {Array} Array of Shape Components
   */
  rendershapes() {
    return this.props.shapes.map((shapeOptions, key) => {
      return (
        <Shape
          key={key}
          options={shapeOptions}
          onClick={() => this.props.onShapeClick(key)}
        />
      );
    })
  }

  /**
   * Component renderer
   */
  render() {
    return (
      <div className="Board" onClick={(e) => this.handleClick(e)}>
        {
          this.props.shapes.length === 0
            ? (<h1>Click anywhere on the page!</h1>)
            : this.rendershapes()
        }
      </div>
    );
  }
}

import SHAPE_CONSTS from '../consts';
import { randomNumber, randomBoolean, randomColor } from '../helpers/randoms';

export default (state = { shapes: [] }, action) => {
  switch (action.type) {
    case 'ADD_SHAPE':
      return addShape(state, action)
    case 'REMOVE_SHAPE':
      return removeShape(state, action)
    default:
      return state
  }
}

function addShape(state, action) {
  const shape = randomBoolean() ? 'circle' : 'square';
  const color = randomColor();
  const width = randomNumber(
    SHAPE_CONSTS[shape].MIN_WIDTH,
    SHAPE_CONSTS[shape].MAX_WIDTH
  );

  let shapes = state.shapes.slice();
  shapes.push({
    shape: shape,
    color: color,
    width: width,
    x: action.x,
    y: action.y,
  });

  return { shapes };
}

function removeShape(state, action) {
  let shapes = state.shapes.slice();
  shapes.splice(action.key, 1);
  return { shapes }
}

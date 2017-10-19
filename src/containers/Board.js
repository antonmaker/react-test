import { connect } from 'react-redux'
import Board from '../components/Board'

const mapStateToProps = state => {
    return {
        shapes: state.shapes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBoardClick: (x, y) => {
            dispatch({ type: 'ADD_SHAPE', x, y });
        },
        onShapeClick: (key) => {
            dispatch({ type: 'REMOVE_SHAPE', key });
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)
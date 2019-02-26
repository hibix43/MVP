import { LOAD_VIDEO } from '../actions/index'

function videos(state = [], action) {
  switch (action.type) {
    case LOAD_VIDEO:
      return [
        ...state,
        {
          file: action.file,
          position: state.length
        }
      ]
    default:
      return state
  }
}

export default videos
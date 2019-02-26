import { connect } from 'react-redux'
import { loadVideo } from '../actions/index'
import LoadForm from '../components/LoadForm'

function mapStateToProps(state) {
  return
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(video) {
      dispatch(loadVideo(video))
    }
  }
}

const LoadVideo = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadForm)

export default LoadVideo
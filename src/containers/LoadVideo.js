import { connect } from 'react-redux'
import { loadVideo } from '../actions/index'
import LoadForm from '../components/LoadForm'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadVideo: path => {
      console.log(`loadVideoPath=${path}`)
      dispatch(loadVideo(path))
    }
  }
}

const LoadVideo = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadForm)

export default LoadVideo
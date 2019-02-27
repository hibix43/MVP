import { connect } from 'react-redux'
import VideoListView from '../components/VideosListView'

const mapStateToProps = state => {
  return {
    videos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const LoadVideo = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoListView)

export default LoadVideo

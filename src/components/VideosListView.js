import React from 'react'
import PropTypes from 'prop-types'
import Video from './Video'

const VideosListView = ({ videos }) => (
  videos.map((video, index) => (
    <Video key={index} path={video.path} />
  ))
)

VideosListView.propTypes = {
  videos: PropTypes.arrayOf({
    path: PropTypes.string.isRequired
  })
}

export default VideosListView
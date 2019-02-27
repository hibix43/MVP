import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Video from './Video'

const FlexVideos = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const VideosListView = ({ videos }) => (
  <FlexVideos>
    {
      videos.map((video, index) => (
        <Video key={index} path={video.path} />
      ))
    }
  </FlexVideos>
)

VideosListView.propTypes = {
  videos: PropTypes.arrayOf({
    path: PropTypes.string.isRequired
  })
}

export default VideosListView
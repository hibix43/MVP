import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RateWidthVideo = styled.div`
  width: ${props => props.videosLength>= 3 ? "33%" : "50%"};
  height: 480px;
`

const Video = ({ path, videosLength }) => (
  <RateWidthVideo videosLength={videosLength}>
    <video width="100%" controls loop>
      <source src={path} />
    </video>
  </RateWidthVideo>
)

Video.protoTypes = {
  path: PropTypes.string.isRequired
}

export default Video
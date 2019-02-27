import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RateWidthVideo = styled.video`
  width: 600px;
  height: 480px;
`

const Video = ({ path }) => (
  <RateWidthVideo controls loop>
    <source src={path} />
  </RateWidthVideo>
)

Video.protoTypes = {
  path: PropTypes.string.isRequired
}

export default Video
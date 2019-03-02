import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Form = styled.input`
  display: block;
  width: calc(100% - 16px);
  padding: 8px;
  color: #fff;
`

const LoadForm = ({ onLoadVideo }) => (
  <Form type="file" onChange={e =>
    onLoadVideo(e.target.files[0].path)} />
)

LoadForm.propTypes = {
  props: PropTypes.shape({
    onLoadVideo: PropTypes.func.isRequired
  })
}

export default LoadForm
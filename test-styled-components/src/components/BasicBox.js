import React from 'react'
import styled from 'styled-components'


const StyledWrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`


const BasicBox = () => (
  <div>
    <h3>basic01</h3>
    <StyledWrapper>
      <StyledTitle>
        StyledTitle, basics
      </StyledTitle>
    </StyledWrapper>
  </div>
)

export default BasicBox

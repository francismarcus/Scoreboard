import React from 'react';
import styled from 'styled-components';

export default class Title extends React.Component {
    render() {
        
      return (
        <Wrapper>
          <StyledTitle>{this.props.title}</StyledTitle>
        </Wrapper>
      );
    }
  }

  const StyledTitle = styled.h1`
  font-size: 3em;
  text-align: center;
  color: palevioletred;
  `;

  const Wrapper = styled.div`
  padding: 1.5em;
  background: papayawhip;
  `; 

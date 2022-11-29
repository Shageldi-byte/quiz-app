import React, {useState, useEffect} from 'react';
import styled,{css} from 'styled-components'


const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  ${props =>
          props.primary &&
          css`
      background: palevioletred;
      color: white;
    `};
`
const primaryColor="#f3b500";


export const CardView = styled.div`
  background-color: ${primaryColor};
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 12px;
  margin: 12px;
`;

// export {CardView}

export default Button;
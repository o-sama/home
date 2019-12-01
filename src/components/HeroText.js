import styled, { css } from "styled-components";

const HeroText = styled.h1`
  font-size: 100px;
  color: white;
  margin: 0;
  text-transform: uppercase;

  ${props => {
    if (props.mobile) {
      return css`
        font-size: 50px;
      `;
    }
  }}
`;

export default HeroText;

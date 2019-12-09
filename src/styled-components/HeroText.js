import styled, { css } from "styled-components";

const HeroText = styled.h1`
  font-size: 500%;
  color: white;
  margin: 0;
  text-transform: uppercase;

  ${props => {
    if (props.mobile) {
      return css`
        font-size: 350%;
      `;
    }
  }}
`;

export default HeroText;

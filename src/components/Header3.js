import styled, { css } from "styled-components";

const Header3 = styled.h3`
  display: block;
  font-size: 30px;
  color: ${props => props.theme.textColor};
  align-items: center;
  justify-content: center;
  text-align: center;
  /* padding-bottom: 30px; */
  padding: 30px 0 10px 0;
  margin: 0;
  text-transform: uppercase;

  ${props => {
    if (props.mobile) {
      return css`
        font-size: 20px;
      `;
    }
  }}
`;

export default Header3;

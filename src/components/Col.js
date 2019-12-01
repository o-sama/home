import styled, { css } from "styled-components";

const Col = styled.div`
  color: ${props => props.theme.textColor};
  display: inline-block;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 15px;

  ${props => {
    if (props.mobile) {
      return css`
        padding: 0 8px;
      `;
    }
  }}
`;

export default Col;

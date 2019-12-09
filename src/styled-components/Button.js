import styled, { css } from "styled-components";

const Button = styled.button`
  ${props => {
    const ret = [];
    if (props.themeButton) {
      ret.push(css`
        height: 35px;
        width: 35px;
        outline: none;
        background-image: url(${props => props.icon});
        background-color: transparent;
        border: none;
        cursor: pointer;
      `);
    }
    return ret;
  }}
`;

export default Button;

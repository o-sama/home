import styled, { css } from "styled-components";

const Button = styled.button`
  ${props => {
    const ret = [];
    if (props.themeButton) {
      ret.push(css`
        position: fixed;
        top: 54%;
        right: 2%;
        padding: 0;
        height: 50px;
        width: 50px;
        transform: translateY(-50%);
        outline: none;
        background-image: url(${props => props.icon});
        background-color: transparent;
        border: none;
        cursor: pointer;
      `);
    }
    if (props.mobile) {
      ret.push(
        css`
          height: 35px;
          width: 35px;
          outline: none;
          background-image: url(${props => props.icon});
          background-color: transparent;
          border: none;
        `
      );
    }
    return ret;
  }}
`;

export default Button;

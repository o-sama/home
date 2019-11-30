import styled, { css } from "styled-components";

const Button = styled.button`
  ${props => {
    if (props.themeButton) {
      return css`
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
      `;
    }
  }}
`;

export default Button;

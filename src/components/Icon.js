import styled, { css } from "styled-components";

const Icon = styled.img`
  height: 100px;
  width: 100px;
  padding: 30px 35px;

  ${props => {
    if (props.work === "r1") {
      return css`
        cursor: pointer;
        height: 150px;
        width: 250px;
      `;
    }
    if (props.work === "r2") {
      return css`
        cursor: pointer;
        height: 100px;
        width: 250px;
      `;
    }
    if (props.school) {
      return css`
        height: 250px;
        width: 250px;
      `;
    }
    if (props.navTop) {
      return css`
        position: fixed;
        top: 47%;
        right: 2%;
        padding: 0;
        height: 50px;
        width: 50px;
        transform: translateY(-50%);
      `;
    }
    if (props.navBot) {
      return css`
        position: fixed;
        top: 53%;
        right: 2%;
        padding: 0;
        height: 50px;
        width: 50px;
        transform: translateY(-50%);
      `;
    }
    if (props.footerIcon) {
      return css`
        height: 64px;
        width: 64px;
      `;
    }
  }};
`;

export default Icon;

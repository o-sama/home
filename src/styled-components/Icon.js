import styled, { css } from "styled-components";

const Icon = styled.img`
  height: 64px;
  width: 64px;
  padding: 20px 30px;

  ${props => {
    if (props.mobile) {
      const ret = [];
      ret.push(css`
        height: 50px;
        width: 50px;
        padding: 20px 15px;
      `);
      if (props.work === "r1") {
        ret.push(css`
          cursor: pointer;
          height: 75px;
          width: 125px;
        `);
      }
      if (props.work === "r2") {
        ret.push(css`
          cursor: pointer;
          height: 50px;
          width: 125px;
        `);
        if (props.school) {
          ret.push(css`
            height: 125px;
            width: 125px;
          `);
        }
      }
      return ret;
    } else {
      if (props.work === "r1") {
        return css`
          cursor: pointer;
          height: 75px;
          width: 125px;
        `;
      }
      if (props.work === "r2") {
        return css`
          cursor: pointer;
          height: 50px;
          width: 125px;
        `;
      }
      if (props.school) {
        return css`
          height: 125px;
          width: 125px;
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
    }
  }};
`;

export default Icon;

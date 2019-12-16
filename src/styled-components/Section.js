import styled, { css } from "styled-components";
import hero from "../img/hero.jpg";

const Section = styled.section`
  /* background: ${props => props.theme.backgroundColor}; */
  color: ${props => props.theme.textColor};

  ${props => {
    const ret = [];
    if (props.hero) {
      ret.push(css`
        height: 100vh;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url(${hero});
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        position: sticky;
      `);
    } else {
      ret.push(css`
        padding: 2% 0;
        width: 80%;
        margin: 2% auto;
        box-sizing: border-box;
      `);
    }
    return ret;
  }};
`;

export default Section;

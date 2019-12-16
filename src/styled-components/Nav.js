import styled, { css } from "styled-components";

const Nav = styled.div`
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  background: ${props => props.theme.backgroundColor};

  & Card {
    border: 1px solid ${props => props.theme.primaryColor};
  }
`;

export default Nav;

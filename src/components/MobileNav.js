import styled, { css } from "styled-components";

const MobileNav = styled.div`
  position: fixed;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 0;
  width: 100vw;
  background-color: ${props => props.theme.backgroundColor};
`;

export default MobileNav;

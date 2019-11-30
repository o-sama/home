import styled, { css } from "styled-components";

const SectionHeader = styled.h2`
  display: block;
  font-size: 50px;
  color: ${props => props.theme.textColor};
  align-items: center;
  justify-content: center;
  text-align: center;
  /* padding-bottom: 30px; */
  padding-top: 30px;
  margin: 0;
  text-transform: uppercase;

  &::after {
    display: block;
    height: 2px;
    background-color: ${props => props.theme.primaryColor};
    content: " ";
    width: 200px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export default SectionHeader;

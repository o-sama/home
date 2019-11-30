import styled, { css } from "styled-components";

const UnorderedList = styled.ul`
  width: 80%;
  margin: 15px auto 0 auto;
  text-align: left;
  padding-bottom: 25px;
  box-sizing: border-box;
  color: ${props => props.theme.textColor};
`;

export default UnorderedList;

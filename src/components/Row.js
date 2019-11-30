import styled, { css } from "styled-components";

const Row = styled.div`
  width: 90%;
  margin: 0 auto;
  color: ${props => props.theme.textColor};
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  padding: 25px 0;
`;

export default Row;

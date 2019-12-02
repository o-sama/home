import styled, { css } from "styled-components";

const Card = styled.div`
  width: 70%;
  margin: 0 auto;
  color: ${props => props.theme.textColor};
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${props => props.theme.elevationColor};
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  ${props => {
    if (props.mobile) {
      return css`
        width: 90%;
      `;
    }
  }};
`;

export default Card;

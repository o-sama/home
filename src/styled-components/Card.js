import styled, { css } from "styled-components";

const Card = styled.div`
  margin: 0 auto;
  color: ${props => props.theme.textColor};
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${props => props.theme.elevationColor};
  border-right: 1px solid ${props => props.theme.primaryColor};
  border-left: 1px solid ${props => props.theme.primaryColor};
  border-bottom: 1px solid ${props => props.theme.primaryColor};

  ${props => {
    if (props.mobile) {
      return css`
        width: 90%;
      `;
    }
  }};
`;

export default Card;

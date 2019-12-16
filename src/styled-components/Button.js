import styled, { css } from "styled-components";

const Button = styled.button`
  height: 75px;
  width: 100px;
  outline: none;
  background-color: transparent;
  border: 1px solid ${props => props.theme.primaryColor};
  cursor: pointer;
  vertical-align: middle;
  margin: 10px 5px;
  color: ${props => props.theme.textColor};

  &:hover {
    box-shadow: 0 0 10px ${props => props.sectionColor};
  }

  ${props => {
    return (
      props.icon &&
      css`
        border: none;
        width: 75px;
        font-weight: 700
        background-image: url(${props => props.icon});

        &:hover {
      box-shadow: none;
  }
      `
    );
  }};
`;

export default Button;

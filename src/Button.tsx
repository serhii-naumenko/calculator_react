import styled, { css } from 'styled-components';

interface Props {
  operant?: boolean,
  plusMinus?: boolean,
  equals?: boolean,
  withoutHover?: boolean
}

export const Button = styled.button<Props>`
  height: 40px;
  width: 40px;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(176, 181, 188);
  }

  ${(props) => props.operant
  && css`
    background-color: aquamarine;

    &:hover {
      background-color: rgb(53, 203, 153);
      color: red;
    }
  `}

  ${(props) => props.plusMinus
  && css`
    background-color: rgb(168, 230, 143);

    &:hover {
      background-color: rgb(111, 175, 86);
    }
  `}

  ${(props) => props.equals
  && css`
    background-color: rgb(100, 161, 222);

    &:hover {
      background-color: rgb(49, 141, 233);
    }
  `}

  ${(props) => props.withoutHover
  && css`
    &:hover {
      background-color: antiquewhite;
      cursor: auto;
    }
  `}
`;

import styled from "styled-components";

export const Button = styled.button`
  appearance: none;
  background-color: #FF7500;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 0;
  margin: 0 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;

  &:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;

  &:hover {
  background-color: #2c974b;
  }
  }
`;

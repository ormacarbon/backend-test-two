import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  background-color: #323232;
  display: flex;
  align-items: center;
  flex-flow: row;
  height: 4rem;
  justify-content: space-between;
`;

export const Navlink = styled(Link)`
  color: white;
  text-decoration: none;
  transition-duration: 0.5s;
  margin: 0 20px;
  &:hover {
    color: #00AEA4;
    transition-duration: 0.5s;
  }
`;
import styled from "styled-components";
import { Button } from "../Button";

export const Card = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #532D81;
  color: white;
  padding: 15px;
  margin: 20px 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  p {
    margin: 5px 0;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
`;

export const Actions = styled.div`
  margin: 0 auto;

  button {
    padding: 10px;

    a {
      text-decoration: none;
      color: white;
    }
  }
`


export const EditButton = styled(Button)`
  background-color: #00BAFF;

  a {
    text-decoration: none;
    color: white;
  }
`

import styled from "styled-components";
import { Button } from "../../components/Button";

export const Header = styled.header`
  width: 100%;
  background-color: #323232;
  padding: 15px 0;
  margin: auto;
  text-align: center;

  a {
    text-decoration: none;
    cursor: pointer;
    color: white;

    &:hover {
      color: #00BAFF;
    }
  }
`;

export const Content = styled.main`
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: #532D81;
`;

export const Form = styled.div`
  color: white;
  width: 800px;
  padding: 20px;
  
  div {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    button {
    margin: 10px;
    color: black;
    }
  }
`;

export const Actions = styled.div`
    button {
    margin-bottom: 20px;
    padding: 10px;
    
    a {
      text-decoration: none;
      color: white;
    }
    }
`;

export const CancelButton = styled(Button)`
  background-color: #F73577;
`;

export const SaveButton = styled(Button)`
  background-color: #00BAFF;
`;

export const NewBeer = styled.main`
  height: 78vh;
  margin: 50px 0;
  text-align: center;

  div {
    background-color: #F73577;
    width: 200px;
    margin: auto;
    padding: 15px;
    border-radius: 8px;
  }
`;
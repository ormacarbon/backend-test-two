import styled from "styled-components";

export const Input = styled.input`
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  width: 600px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;  
  
  
  &:focus {
    outline: none;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
`;

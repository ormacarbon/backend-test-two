import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const Paginate = styled(ReactPaginate)`
  display: flex;
  margin-bottom: 40px;
  width: 100%;
  justify-content: center;
  
  li {
    list-style-type: none;
  }
  
  a {
    cursor: pointer;
    margin: 0 5px;
    padding: 10px;

    &:hover {
      color: #00AEA4
    }
  }
`;


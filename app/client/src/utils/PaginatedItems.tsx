import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { IBeer } from "../interfaces/IBeer";
import Home from "../pages/Home";
import * as S from "./styles";

type Props = {
  itemsPerPage: number,
}

function PaginatedItems({ itemsPerPage }: Props) {
  const [itemOffset, setItemOffset] = useState(0);
  const [beers, setBeers] = useState<IBeer[]>([])

  useEffect(() => {
    axios.get('http://localhost:3005/beers/').then(data => {
      setBeers(data.data)
    }) as unknown as IBeer[];
  }, [])


  const endOffset = itemOffset + itemsPerPage;
  const currentItems = beers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(beers.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % beers.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Home currentItems={currentItems} />
      <S.Paginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
      />
    </>
  );
}

export default PaginatedItems;
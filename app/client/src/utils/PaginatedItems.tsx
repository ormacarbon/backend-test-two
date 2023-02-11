import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { IBeer } from "../interfaces/IBeer";
import Home from "../pages/Home";

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
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = beers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(beers.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % beers.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Home currentItems={currentItems} />
      <ReactPaginate
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
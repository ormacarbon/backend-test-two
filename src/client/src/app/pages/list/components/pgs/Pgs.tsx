//  Dependencies
import Pagination from "@mui/material/Pagination"
//  Type
import { IPgs } from "../../../../shared/types"
//  Style
import './pgs.css'

export const Pgs = ({currentPage, pages, setCurrentPage}: IPgs ) => {
    return (
        <Pagination
            page={currentPage}
            count={pages - 1}
            onChange={(e, newPage) => setCurrentPage(newPage)}
            className="Pgs-pagination"
        />
    )
}
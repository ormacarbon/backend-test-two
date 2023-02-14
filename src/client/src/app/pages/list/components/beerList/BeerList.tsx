//  Type
import { IBeerList } from "../../../../shared/types"
//  Components
import { TableData } from "./components"
//  Style
import "./beerList.css"

export const BeerList = ({currentItems}: IBeerList) => {
    return (
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>ABV</th>
                    <th>IBU</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Category</th>
                    <th></th>
                </thead>
                <tbody>
                    {currentItems?.map(item => {
                        return  <TableData item={item} />
                    })}
                </tbody>
            </table>
        </div>
    )
}
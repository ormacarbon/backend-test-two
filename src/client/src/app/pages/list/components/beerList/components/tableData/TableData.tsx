//  Dependencies
import { useNavigate } from "react-router-dom"
//  Hooks
import { IEditBeerList } from "../../../../../../shared/types"
import { Api } from "../../../../../../shared/services"
//  Style
import "./tableData.css"

export const TableData = (props: IEditBeerList) => {
    const _id = props.item._id
    const navigate = useNavigate()

    const editItem = () => {
        navigate(`/edit/${_id}`)
    }

    const removeItem = async () => {
        await Api().delete(`/remove/${_id}`)
        .then(res => {
            alert(res.data)
            window.location.reload()
        })
        .catch(error => console.log(error))
    }

    return (
        <tr>                  
            <td>{props.item.name}</td>
            <td>{props.item.abv}</td>
            <td>{props.item.ibu}</td>
            <td>{props.item.country}</td>
            <td>{props.item.city}</td>
            <td>{props.item.state}</td>
            <td>{props.item.category}</td>
            <td className="BeerList-buttons">
                <span className="BeerList-edit" onClick={editItem}>Edit</span>
                <span className="BeerList-remove" onClick={removeItem}>Remove</span>
            </td>
        </tr>
    )
}
import React, {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import {Table} from "semantic-ui-react"
import DeleteBeer from "../actions/delete"

import IBeer from "../interfaces/IBeer"
const Read = () => {
  let {id} = useParams()
  let [beer, setBeer] = useState<IBeer>()
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/beer/" + id).then((res) => res.json().then((r) => setBeer(r)))
  }, [id])

  const setData = (data: any) => {
    let {ID, abv, address, category, city, coordinates, country, description, ibu, name, state, website} = data
    localStorage.setItem("ID", ID)
    localStorage.setItem("Abv", abv)
    localStorage.setItem("Address", address)
    localStorage.setItem("Category", category)
    localStorage.setItem("City", city)
    localStorage.setItem("CoordinatesX", coordinates[0])
    localStorage.setItem("CoordinatesY", coordinates[1])

    localStorage.setItem("Country", country)

    localStorage.setItem("Description", description)

    localStorage.setItem("Ibu", ibu)

    localStorage.setItem("Name", name)

    localStorage.setItem("State", state)

    localStorage.setItem("Website", website)
  }

  return (
    <div>
      <Table className="ui-table">
        <Table.HeaderCell className="th-read">Name</Table.HeaderCell>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>State</Table.HeaderCell>
        <Table.HeaderCell>Coordinates</Table.HeaderCell>

        <Table.HeaderCell>Country</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>ABV</Table.HeaderCell>
        <Table.HeaderCell>Ibu</Table.HeaderCell>
        <Table.HeaderCell>Website</Table.HeaderCell>
        <Table.Body>
          <Table.Row>
            <Table.Cell className="th-read">{beer?.name}</Table.Cell>

            <Table.Cell>{beer?.category}</Table.Cell>
            <Table.Cell>{beer?.address}</Table.Cell>
            <Table.Cell>{beer?.city}</Table.Cell>
            <Table.Cell>{beer?.state}</Table.Cell>
            <Table.Cell>
              {beer?.coordinates[0]} ; {beer?.coordinates[1]}
            </Table.Cell>
            <Table.Cell>{beer?.country}</Table.Cell>
            <Table.Cell>{beer?.description}</Table.Cell>
            <Table.Cell>{beer?.abv}</Table.Cell>
            <Table.Cell>{beer?.ibu}</Table.Cell>
            <Table.Cell>
              <a href={beer?.website}>{beer?.website}</a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Link to="/" className="home-button" onClick={() => DeleteBeer(beer?.ID)}>
        DELETE
      </Link>
      <Link to={"/update/" + beer?.ID} className="home-button" onClick={() => setData(beer)}>
        UPDATE
      </Link>
      <Link to={"/list"} className="home-button">
            BACK
          </Link>
    </div>
  )
}

export default Read

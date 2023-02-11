import React, {useState, useEffect} from "react"
import {Pagination, Table} from "semantic-ui-react"
import IBeer from "../interfaces/IBeer"


const List = () => {
  const [data, setData] = useState([])
  const [activePage, setActivePage] = useState(1)
  const [apiUrl, setApiUrl] = useState("http://localhost:5000/api/v1/beers?page=1&page_size=10")
  const [length, setLength] = useState(0)

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/beer").then((res) => res.json().then((r) => setLength(r.length)))
  }, [])
  useEffect(() => {
    fetch(apiUrl).then((response) => {
      response.json().then((r) => setData(r))
    })
  }, [apiUrl])

  const onChange = (e: any, pageInfo: any) => {
    setActivePage(pageInfo.activePage)
    fetch("http://localhost:5000/api/v1/beers?page=" + pageInfo.activePage.toString() + "&page_size=10").then((res) =>
      res.json().then((r) => setData(r)),
    )
  }
  const moreDetailsRedirect = (id: number) => "/read/" + id 
  return (
    <div className="App">

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>State</Table.HeaderCell>
            <Table.HeaderCell>Country</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data?.map((beer: IBeer) => (
            <Table.Row>
              <Table.Cell>{beer.name}</Table.Cell>
              <Table.Cell>{beer.category}</Table.Cell>
              <Table.Cell>{beer.address}</Table.Cell>
              <Table.Cell>{beer.city}</Table.Cell>
              <Table.Cell>{beer.state}</Table.Cell>
              <Table.Cell>{beer.country}</Table.Cell>
              <Table.Cell>
                <a href={beer.website}>{beer.website}</a>
              </Table.Cell>
              <Table.Cell>
                <a href={moreDetailsRedirect(beer.ID)} className="action-button">
                  <span>More details</span>
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Pagination
        activePage={activePage}
        onPageChange={onChange}
        totalPages={Math.round(length / 10)}
        ellipsisItem={null}
      />
    </div>
  )
}

export default List

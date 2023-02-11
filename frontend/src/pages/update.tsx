import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { Form} from "semantic-ui-react"
import UpdateBeer from "../actions/update"
import {Link} from "react-router-dom"
const Update = () => {
  let {id} = useParams()

  const [abv, setAbv] = useState(0.0)
  const [address, setAddres] = useState<string | null>("")
  const [category, setCategory] = useState<string | null>("")
  const [webSite, setWebSite] = useState<string | null>("")
  const [city, setCity] = useState<string | null>("")
  const [coordinateX, setCoordinateX] = useState(0.0)
  const [coordinateY, setCoordinateY] = useState(0.0)
  const [country, setCountry] = useState<string | null>("")
  const [description, setDescription] = useState<string | null>("")
  const [ibu, setIbu] = useState(0)
  const [name, setName] = useState<string | null>("")
  const [state, setState] = useState<string | null>("")

  useEffect(() => {
    setAbv(parseFloat(localStorage.getItem("Abv")!))
    setAddres(localStorage.getItem("Address"))
    setCategory(localStorage.getItem("Category"))
    setCountry(localStorage.getItem("City"))
    setCoordinateX(parseFloat(localStorage.getItem("CoordinatesX")!))
    setCoordinateY(parseFloat(localStorage.getItem("CoordinatesY")!))
    setCity(localStorage.getItem("Country"))

    setDescription(localStorage.getItem("Description"))

    setIbu(parseInt(localStorage.getItem("Ibu")!))
    setName(localStorage.getItem("Name"))

    setState(localStorage.getItem("State"))

    setWebSite(localStorage.getItem("Website"))
  }, [])

  return (
    <>
      <div className="main-header">
        <h2>Update Beer form</h2>
      </div>
      <Form className="create-form">
        <div className="form-field">
          <Form.Field>
            <label>Abv</label>
            <input type="number" placeholder="Abv" value={abv} onChange={(e) => setAbv(parseFloat(e.target.value))} />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input placeholder="Address" value={address!} onChange={(e) => setAddres(e.target.value)} />
          </Form.Field>
        </div>
        <div className="form-field">
          <Form.Field>
            <label>Category</label>
            <input placeholder="Category" value={category!} onChange={(e) => setCategory(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder="City" value={city!} onChange={(e) => setCity(e.target.value)} />
          </Form.Field>
        </div>

        <div className="form-field">
          <Form.Field>
            <label>Cordinate X</label>
            <input
              type="number"
              value={coordinateX}
              placeholder="Cordinate X"
              onChange={(e) => setCoordinateX(parseFloat(e.target.value))}
            />
          </Form.Field>
          <Form.Field>
            <label>Cordinate Y</label>
            <input
              type="number"
              value={coordinateY}
              placeholder="Cordinate Y"
              onChange={(e) => setCoordinateY(parseFloat(e.target.value))}
            />
          </Form.Field>
        </div>
        <div className="form-field">
          <Form.Field>
            <label>Country</label>
            <input placeholder="Country" value={country!} onChange={(e) => setCountry(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input placeholder="Description" value={description!} onChange={(e) => setDescription(e.target.value)} />
          </Form.Field>
        </div>
        <div className="form-field">
          <Form.Field>
            <label>Ibu</label>
            <input type="number" placeholder="Ibu" value={ibu} onChange={(e) => setIbu(parseInt(e.target.value))} />
          </Form.Field>
          <Form.Field>
            <label>Name</label>
            <input required placeholder="Name" value={name!} onChange={(e) => setName(e.target.value)} />
          </Form.Field>
        </div>
        <div className="form-field">
          <Form.Field>
            <label>State</label>
            <input placeholder="State" value={state!} onChange={(e) => setState(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Website</label>
            <input placeholder="Website" value={webSite!} onChange={(e) => setWebSite(e.target.value)} />
          </Form.Field>
        </div>
        <div className="btn-container">
          <Link
            to={"/read/" + id}
            className="home-button-create"
            onClick={() =>
              UpdateBeer(
                parseInt(id!),
                abv,
                address,
                category,
                city,
                coordinateX,
                coordinateY,
                country,
                description,
                ibu,
                name,
                state,
                webSite,
              )
            }
            type="submit"
          >
            UPDATE
          </Link>
          <Link to={"/read/" + id} className="home-button-create">
            BACK
          </Link>
        </div>
      </Form>
    </>
  )
}

export default Update

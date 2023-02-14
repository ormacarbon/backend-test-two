//  Dependencies
import { useNavigate, useParams } from "react-router-dom"
//  Hooks
import { useState, useEffect } from "react"
import { Api } from "../../../../shared/services"
//  Types
import { IList } from "../../../../shared/types"
//  Components
import { Input } from "../../../../shared/components"
//  Style
import "./editForm.css"

export const EditForm = () => {

    const params = useParams()
    const navigate = useNavigate()
    let _id = params.id

    const [ editItem, setEditItem ] = useState<IList | null>(null)

    useEffect(() => {
        const getLits = async () => {
            await Api().post("/itemToEdit", {_id})
            .then(res => setEditItem(res.data))
            .catch(error => console.log(error))
        }
        getLits()
    }, [_id])

    const [ name, setName ] = useState<string>()
    const [ abv, setAbv ] = useState<string>()
    const [ ibu, setIbu ] = useState<string>()
    const [ category, setCategory ] = useState<string>()
    const [ country, setCountry ] = useState<string>()
    const [ state, setState ] = useState<string>()
    const [ city, setCity ] = useState<string>()
    const [ address, setAddress ] = useState<string>()
    const [ x, setX ] = useState<string>()
    const [ y, setY ] = useState<string>()
    const [ website, setWebsite ] = useState<string>()
    const [ description, setDescription ] = useState<string>()
    
    const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        await Api().put("/editedBeer",{
            name, abv, ibu, category, country, state, city, address, x, y, website, description, _id
        })
        .then(res => {
            alert(res.data)
            navigate("/list")
        })
        .catch(error => {
            let errors = error.response.data
            if(errors) errors.forEach((error:string) => alert(error))
        })
    }

    return (
        <div className="EditForm-container">
            <h1>New Beer Form</h1>
            <form>
                <div className="EditForm-content">
                    <div>
                        <h3>Beer Informations</h3>
                        <div>
                            <Input type="text" title="Beer Name:" placeholder={editItem?.name} mask="justText" onChange={e => setName(e.target.value)} required />
                            <Input type="text" title="Alcohol by Volume:" placeholder={editItem?.abv.toString()} mask="justNumber" onChange={e => setAbv(e.target.value)} required />
                        </div>
                        <div>
                            <Input type="text" title="IBU:" placeholder={editItem?.ibu.toString()} mask="justNumber" onChange={e => setIbu(e.target.value)} required />
                            <div>
                                <p>Category</p>
                                <select onChange={e => setCategory(e.target.value)}>
                                    <option selected disabled>{editItem?.category ? editItem?.category : "Select..."}</option>
                                    <option value="North American Ale">North American Ale</option>
                                    <option value="British Ale">British Ale</option>
                                    <option value="North American Lager">North American Lager</option>
                                    <option value="German Lager">German Lager</option>
                                    <option value="German Ale">German Ale</option>
                                    <option value="Irish Ale">Irish Ale</option>
                                    <option value="Belgian and French Ale">Belgian and French Ale</option>
                                    <option value="Other Style">Other Style</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>Location Informations</h3>
                        <div>
                            <Input type="text" title="Country:" placeholder={editItem?.country} mask="justText" onChange={e => setCountry(e.target.value)} required />
                            <Input type="text" title="State:" placeholder={editItem?.state} mask="justText" onChange={e => setState(e.target.value)} />
                        </div>
                        <div>
                            <Input type="text" title="City:" placeholder={editItem?.city} mask="justText" required onChange={e => setCity(e.target.value)} />
                            <Input type="text" title="Address:" placeholder={editItem?.address} onChange={e => setAddress(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <h3>Other Informations</h3>
                        {editItem?.coordinates && (
                            <div>
                                <Input type="text" title="Coordinates" placeholder={editItem?.coordinates[0].toString()} mask="justNumber" onChange={e => setX(e.target.value)} />
                                <Input type="text" title="Coordinates" placeholder={editItem?.coordinates[1].toString()} mask="justNumber" onChange={e => setY(e.target.value)} />
                            </div> 
                        )}
                        <div>
                            <Input type="text" title="Website" placeholder={editItem?.website} onChange={e => setWebsite(e.target.value)} />
                        </div>
                        <div className="EditForm-container-textarea">
                            <p>Description</p>
                            <textarea placeholder={editItem?.description} onChange={e => setDescription(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="EditForm-button">
                    <button onClick={handleClick}>Enviar</button>
                </div>
            </form>
        </div>
    )
}
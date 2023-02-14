//  Components
import { Input } from "../../../../shared/components"
//  Hooks
import { useState } from "react"
import { Api } from "../../../../shared/services"
//  Style
import "./form.css"

export const Form = () => {

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

        await Api().post("/newBeer",{
            name, abv, ibu, category, country, state, city, address, x, y, website, description
        })
        .then(res => alert(res.data))
        .catch(error => {
            let errors = error.response.data
            if(errors) errors.forEach((error:string) => alert(error))
        })
    }
    
    return (
        <div className="Form-container">
            <h1>New Beer Form</h1>
            <form>
                <div className="Form-content">
                    <div>
                        <h3>Beer Informations</h3>
                        <div>
                            <Input type="text" title="Beer Name:" placeholder="Name..." mask="justText" onChange={e => setName(e.target.value)} required />
                            <Input type="text" title="Alcohol by Volume:" placeholder="ABV..." mask="justNumber" onChange={e => setAbv(e.target.value)} required />
                        </div>
                        <div>
                            <Input type="text" title="IBU:" placeholder="IBU..." mask="justNumber" onChange={e => setIbu(e.target.value)} required />
                            <div>
                                <p>Category</p>
                                <select onChange={e => setCategory(e.target.value)}>
                                    <option selected disabled>Selecione...</option>
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
                            <Input type="text" title="Country:" placeholder="Country..." mask="justText" onChange={e => setCountry(e.target.value)} required />
                            <Input type="text" title="State:" placeholder="State..." mask="justText" onChange={e => setState(e.target.value)} />
                        </div>
                        <div>
                            <Input type="text" title="City:" placeholder="City..." mask="justText" required onChange={e => setCity(e.target.value)} />
                            <Input type="text" title="Address:" placeholder="Address..." onChange={e => setAddress(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <h3>Other Informations</h3>
                        <div>
                            <Input type="text" title="Coordinates" placeholder="X..." mask="justNumber" onChange={e => {setX(e.target.value)}} />
                            <Input type="text" title="Coordinates" placeholder="Y..." mask="justNumber" onChange={e => setY(e.target.value)} />
                        </div>
                        <div>
                            <Input type="text" title="Website" placeholder="Website..." onChange={e => setWebsite(e.target.value)} />
                        </div>
                        <div className="Form-container-textarea">
                            <p>Description</p>
                            <textarea placeholder="Description..." onChange={e => setDescription(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="Form-button">
                    <button onClick={handleClick}>Enviar</button>
                </div>
            </form>
        </div>
    )
}
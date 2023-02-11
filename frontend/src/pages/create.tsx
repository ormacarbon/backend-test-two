import React, { useState} from 'react'
import { Link } from 'react-router-dom';

import { Form } from 'semantic-ui-react'

const Create = () => {
    const [abv, setAbv] = useState(0.0);
    const [address, setAddres] = useState('');
    const [category, setCategory] = useState('');
    const [webSite, setWebSite] = useState('');
    const [city, setCity] = useState('');
    const [cordinateX, setCordinateX] = useState(0.0);
    const [cordinateY, setCordinateY] = useState(0.0);
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const [ibu, setIbu] = useState(0);
    const [name, setName] = useState('');
    const [state, setState] = useState('');

    const postData = () => {
        let body = {
            abv: abv,
            address: address,
            category: category,
            webSite: webSite,
            city: city,
            coordinates: [cordinateX, cordinateY],
            country: country,
            description: description,
            ibu: ibu,
            name: name,
            state: state
        }
        fetch("http://localhost:5000/api/v1/beer", {method: "POST", body: JSON.stringify(body)}).then(res =>res.json().then(r => r))
    }
    return (
        <><div className='main-header'>
            <h2>
                Beer form
            </h2>
        </div><Form className='create-form'>
                <div className='form-field'>
                    <Form.Field>
                        <label>Abv</label>
                        <input type="number" placeholder='Abv' onChange={(e) => setAbv(parseFloat(e.target.value))} />
                    </Form.Field>
                    <Form.Field>
                        <label>Address</label>
                        <input placeholder='Address' onChange={(e) => setAddres(e.target.value)} />
                    </Form.Field>
                </div>
                <div className='form-field'>
                    <Form.Field>
                        <label>Category</label>
                        <input placeholder='Category' onChange={(e) => setCategory(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input placeholder='City' onChange={(e) => setCity(e.target.value)} />
                    </Form.Field>
                </div>

                <div className='form-field'>
                    <Form.Field>
                        <label>Cordinate X</label>
                        <input type="number" placeholder='Cordinate X' onChange={(e) => setCordinateX(parseFloat(e.target.value))} />
                    </Form.Field>
                    <Form.Field>
                        <label>Cordinate Y</label>
                        <input type="number" placeholder='Cordinate Y' onChange={(e) => setCordinateY(parseFloat(e.target.value))} />
                    </Form.Field>
                </div>
                <div className='form-field'>
                    <Form.Field>
                        <label>Country</label>
                        <input placeholder='Country' onChange={(e) => setCountry(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                    </Form.Field>
                </div>
                <div className='form-field'>
                    <Form.Field>
                        <label>Ibu</label>
                        <input type="number" placeholder='Ibu' onChange={(e) => setIbu(parseInt(e.target.value))} />
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                        <input required placeholder='Name' onChange={(e) => setName(e.target.value)} />
                    </Form.Field>
                </div>
                <div className='form-field'>
                    <Form.Field>
                        <label>State</label>
                        <input placeholder='State' onChange={(e) => setState(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Website</label>
                        <input placeholder='Website' onChange={(e) => setWebSite(e.target.value)} />
                    </Form.Field>
                </div>
                <div className='btn-container'>
                <Link to="/" className='home-button-create' onClick={postData} type='submit'>SUBMIT</Link>

                </div>
            </Form></>
    )
}

export default Create;
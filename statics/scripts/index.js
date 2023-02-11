const createLocation = document.querySelector('#createsubmit')

createLocation.addEventListener('click', async (e) => {
    e.preventDefault()
    const abv = parseFloat(document.querySelector('#abv').value)
    const category = document.querySelector('#category').value
    const city = document.querySelector('#city').value
    const latitude = parseFloat(document.querySelector('#latitude').value)
    const longitude = parseFloat(document.querySelector('#longitude').value)
    const country = document.querySelector('#country').value
    const description = document.querySelector('#description').value
    const ibu = parseInt(document.querySelector('#ibu').value)
    const name = document.querySelector('#name').value
    const state = document.querySelector('#state').value
    const website = document.querySelector('#website').value

    const coordinates = []
    coordinates.push(latitude)
    coordinates.push(longitude)
    const location = {
        abv,
        category,
        city,
        coordinates,
        country,
        description,
        ibu,
        name,
        state,
        website
    }

    console.log(location)
    const res = await fetch('http://localhost:9090/api/location', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(location)
    })
    console.log(res)
})

const updateLocation = document.querySelector('#updatesubmit')

updateLocation.addEventListener('click', async (e) => {
    e.preventDefault()
    const abv = parseFloat(document.querySelector('#abv').value)
    const category = document.querySelector('#category').value
    const city = document.querySelector('#city').value
    const latitude = parseFloat(document.querySelector('#latitude').value)
    const longitude = parseFloat(document.querySelector('#longitude').value)
    const country = document.querySelector('#country').value
    const description = document.querySelector('#description').value
    const ibu = parseInt(document.querySelector('#ibu').value)
    const name = document.querySelector('#name').value
    const state = document.querySelector('#state').value
    const website = document.querySelector('#website').value

    const coordinates = []
    coordinates.push(latitude)
    coordinates.push(longitude)
    const location = {
        abv,
        category,
        city,
        coordinates,
        country,
        description,
        ibu,
        name,
        state,
        website
    }

    console.log(location)

    const locationId = document.querySelector('#updateId').value

    const res = await fetch(`http://localhost:9090/api/location/${locationId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(location)
    })
    console.log(res)
})

const getById = document.querySelector('#getbyid')

getById.addEventListener('click', async (e) => {
    e.preventDefault()

    console.log(e.currentTarget)
    const locationId = document.querySelector('.getordeletebyid-container #id').value

    let location

    await fetch(`http://localhost:9090/api/location/${locationId}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(res => res.json().then(data => { location = data.location }))

    const locationUl = document.querySelector('#locationbyid')

    if (locationUl.childElementCount === 0) {
        fillLocationById(location, locationUl)
    } else {
        locationUl.innerHTML = ''
        fillLocationById(location, locationUl)
    }
})

function fillLocationById(location, locationUl) {
    console.log(location)
    if (location.abv !== undefined) {
        locationUl.insertAdjacentHTML('beforeend', `
        <label for="abvbyid">Abv:</label>
        <p id="abvabvbyid">${location.abv}</p>
    `)
    }
    if (location.address !== undefined) {
        locationUl.insertAdjacentHTML('beforeend', `
        <label for="addressbyid">Address:</label>
        <p id="addressbyid">${location.address}</p>
    `)
    }
    if (location.category !== undefined) {
        locationUl.insertAdjacentHTML('beforeend', `
        <label for="categorybyid">Category:</label>
        <p id="categorybyid">${location.category}</p>
    `)
    }
    if (location.city !== undefined) {
        locationUl.insertAdjacentHTML('beforeend', `
        <label for="citybyid">City:</label>
        <p id="citybyid">${location.city}</p>
    `)
    }
    if (location.coordinates[0] !== undefined) {
        locationUl.insertAdjacentHTML('beforeend', `
        <label for="latitudebyid">Latitude:</label>
        <p id="latitudebyid">${location.coordinates[0]}</p>
    `)
    }
    if (location.coordinates[1] !== undefined) {
        locationUl.insertAdjacentHTML('beforeend', `
        <label for="longitudebyid">Longitude:</label>
        <p id="longitudebyid">${location.longitude}</p>
    `)
    }
    if (location.country !== undefined) {
        locationUl.insertAdjacentHTML('beforeend', `
        <label for="countrybyid">Country:</label>
        <p id="countrybyid">${location.country}</p>
    `)
    }
    if (location.description !== undefined) {
        locationUl.insertAdjacentHTML('beforeend', `
        <label for="descriptionbyid">Description:</label>
        <p id="descriptionbyid">${location.description}</p>
    `)
    }
    if (location.ibu !== undefined) {
        locationUl.insertAdjacentHTML('beforeend', `
        <label for="ibubyid">Ibu:</label>
        <p id="ibubyid">${location.ibu}</p>
    `)
    }
    if (location.name !== undefined) {
        locationUl.insertAdjacentHTML('beforeend', `
        <label for="namebyid">Name:</label>
        <p id="namebyid">${location.name}</p>
    `)
    }
    if (location.state !== undefined) {
        locationUl.insertAdjacentHTML('beforeend', `
        <label for="statebyid">State:</label>
        <p id="statebyid">${location.state}</p>
    `)
    }
    if (location.website !== undefined) {
        locationUl.insertAdjacentHTML('beforeend', `
        <label for="websitebyid">Website:</label>
        <p id="websitebyid">${location.website}</p>
    `)
    }
}

const deleteById = document.querySelector('#deletebyid')

deleteById.addEventListener('click', async (e) => {
    e.preventDefault()
    const locationId = document.querySelector('.getordeletebyid-container #id').value

    await fetch(`http://localhost:9090/api/location/${locationId}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(res => {
        if (res.status === 200) {
            alert("Location deleted.")
        }
    })
})

const refillLocations = (async function fillLocations() {
    document.querySelector('.locations').innerHTML = ''
    let allLocations = []

    await fetch('http://localhost:9090/api/location', { method: "get" }).then(res => res.json().then(data => allLocations = data.test))

    console.log(allLocations)

    let contador = 0

    allLocations.forEach(item => {
        contador++
        if (contador <= 20) {

            const locationContainer = document.createElement('div')

            locationContainer.className = "location-container"
            if (item.abv !== undefined) {
                console.log(item.abv)
                locationContainer.insertAdjacentHTML('beforeend', `
            <label for="abvbyid">Abv:</label>
            <p id="abvabvbyid">${item.abv}</p>
        `)
            }
            if (item.address !== undefined) {
                locationContainer.insertAdjacentHTML('beforeend', `
        <label for="addressbyid">Address:</label>
        <p id="addressbyid">${item.address}</p>
        `)
            }
            if (item.category !== undefined) {
                locationContainer.insertAdjacentHTML('beforeend', `
        <label for="categorybyid">Category:</label>
        <p id="categorybyid">${item.category}</p>
        `)
            }
            if (item.city !== undefined) {
                locationContainer.insertAdjacentHTML('beforeend', `
        <label for="citybyid">City:</label>
            <p id="citybyid">${item.city}</p>
        `)
            }
            if (item.coordinates !== undefined) {
                if (item.coordinates[0] !== undefined) {
                    locationContainer.insertAdjacentHTML('beforeend', `
                <label for="latitudebyid">Latitude:</label>
                <p id="latitudebyid">${item.coordinates[0]}</p>
                `)
                }
                if (item.coordinates[1] !== undefined) {
                    locationContainer.insertAdjacentHTML('beforeend', `
                <label for="longitudebyid">Longitude:</label>
                <p id="longitudebyid">${item.coordinates[1]}</p>
                `)
                }
            }
            if (item.country !== undefined) {
                locationContainer.insertAdjacentHTML('beforeend', `
            <label for="countrybyid">Country:</label>
            <p id="countrybyid">${item.country}</p>
            `)
            }
            if (item.description !== undefined) {
                locationContainer.insertAdjacentHTML('beforeend', `
            <label for="descriptionbyid">Description:</label>
            <p id="descriptionbyid">${item.description}</p>
            `)
            }
            if (item.ibu !== undefined) {
                locationContainer.insertAdjacentHTML('beforeend', `
            <label for="ibubyid">Ibu:</label>
            <p id="ibubyid">${item.ibu}</p>
            `)
            }
            if (item.name !== undefined) {
                locationContainer.insertAdjacentHTML('beforeend', `
            <label for="namebyid">Name:</label>
            <p id="namebyid">${item.name}</p>
            `)
            }
            if (item.state !== undefined) {
                locationContainer.insertAdjacentHTML('beforeend', `
            <label for="statebyid">State:</label>
            <p id="statebyid">${item.state}</p>
            `)
            }
            if (item.website !== undefined) {
                locationContainer.insertAdjacentHTML('beforeend', `
            <label for="websitebyid">Website:</label>
            <p id="websitebyid">${item.website}</p>
            `)
            }
            document.querySelector('.locations').insertAdjacentElement('beforeend', locationContainer)
        }
    })
}
)()



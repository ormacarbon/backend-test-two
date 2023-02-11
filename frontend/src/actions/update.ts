const UpdateBeer = (
    id: number | undefined,
    abv: number,
    address: string | null,
    category: string | null,
    city: string | null,
    coordinatesX: number,
    coordinatesY: number,
    country: string | null,
    description: string | null,
    ibu: number,
    name: string | null,
    state: string | null,
    website: string | null,
  ) => {
      let body = {
          abv: abv,
          address: address,
          category: category,
          webSite: website,
          city: city,
          coordinates: [coordinatesX, coordinatesY],
          country: country,
          description: description,
          ibu: ibu,
          name: name,
          state: state
      }
      fetch("http://localhost:5000/api/v1/beer/" +id, {method: "PUT", body: JSON.stringify(body)}).then(res => res.json().then(r => r))
  }
  
  export default UpdateBeer
  
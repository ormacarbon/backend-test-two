import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { IBeer } from "../../interfaces/IBeer";

function New() {
  const [beer, setBeer] = useState<IBeer>()
  const beerNameRef = useRef<HTMLInputElement>(null)
  const beerABVRef = useRef<HTMLInputElement>(null)
  const beerAddressRef = useRef<HTMLInputElement>(null)
  const beerCategoryRef = useRef<HTMLInputElement>(null)
  const beerCityRef = useRef<HTMLInputElement>(null)
  const beerCoordinatesRef = useRef<HTMLInputElement>(null)
  const beerCountryRef = useRef<HTMLInputElement>(null)
  const beerDescriptionRef = useRef<HTMLInputElement>(null)
  const beerIBURef = useRef<HTMLInputElement>(null)
  const beerStateRef = useRef<HTMLInputElement>(null)
  const beerWebsiteRef = useRef<HTMLInputElement>(null)

  function handleNewBeer() {
    const newBeer: IBeer = {}
    if (beerNameRef.current?.value != '') {newBeer["name"] = beerNameRef.current?.value}
    if (beerABVRef.current?.value != '') {newBeer["abv"] = beerABVRef.current?.value}
    if (beerAddressRef.current?.value != '') {newBeer["address"] = beerAddressRef.current?.value}
    if (beerCategoryRef.current?.value != '') {newBeer["category"] = beerCategoryRef.current?.value}
    if (beerCityRef.current?.value != '') {newBeer["city"] = beerCityRef.current?.value}
    if (beerCoordinatesRef.current?.value != '') {newBeer["coordinates"] = beerCoordinatesRef.current?.value}
    if (beerCountryRef.current?.value != '') {newBeer["country"] = beerCountryRef.current?.value}
    if (beerDescriptionRef.current?.value != '') {newBeer["description"] = beerDescriptionRef.current?.value}
    if (beerIBURef.current?.value != '') {newBeer["ibu"] = parseInt(beerIBURef.current?.value as unknown as string)}
    if (beerStateRef.current?.value != '') {newBeer["state"] = beerStateRef.current?.value}
    if (beerWebsiteRef.current?.value != '') {newBeer["website"] = beerWebsiteRef.current?.value}

    axios.post(`http://localhost:3005/beers/`, newBeer).then(data => {
      if (data.status == 201) {
        axios.get(`http://localhost:3005/beers/${data.data.id}`).then(data => {
          setBeer(data.data)
        }) as unknown as IBeer[];
      }
    });
  }

  if (!beer) return (
    <div>
      <div><span>Name:</span><Input ref={beerNameRef}/></div>
      <div><span>ABV:</span><Input ref={beerABVRef}/></div>
      <div><span>Address:</span><Input ref={beerAddressRef}/></div>
      <div><span>Category:</span><Input ref={beerCategoryRef}/></div>
      <div><span>City:</span><Input ref={beerCityRef}/></div>
      <div><span>Coordinates:</span><Input ref={beerCoordinatesRef}/></div>
      <div><span>Country:</span><Input ref={beerCountryRef}/></div>
      <div><span>Description:</span><Input ref={beerDescriptionRef}/></div>
      <div><span>IBU:</span><Input ref={beerIBURef}/></div>
      <div><span>State:</span><Input ref={beerStateRef}/></div>
      <div><span>Website:</span><Input ref={beerWebsiteRef}/></div>

      <div>
        <Button>
          <Link to="/">CANCEL</Link>
        </Button>
        <Button onClick={handleNewBeer}>
          SAVE
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      New Beer Save Successfully

      <div>
        {beer?.name ? <p><strong>Name:</strong>{beer.name}</p> : null}
        {beer?.abv ? <p><strong>ABV:</strong>{beer.abv}</p> : null}
        {beer?.address ? <p><strong>Address:</strong>{beer.address}</p> : null}
        {beer?.category ? <p><strong>Category:</strong>{beer.category}</p> : null}
        {beer?.city ? <p><strong>City:</strong>{beer.city}</p> : null}
        {beer?.coordinates ? <p><strong>Coordinates:</strong>{beer.coordinates}</p> : null}
        {beer?.description ? <p><strong>Description:</strong>{beer.description}</p> : null}
        {beer?.ibu ? <p><strong>IBU:</strong>{beer.ibu}</p> : null}
        {beer?.state ? <p><strong>State:</strong>{beer.state}</p> : null}
        {beer?.website ? <p><strong>Website:</strong>{beer.website}</p> : null}
      </div>
    </div>
  )
}

export default New;
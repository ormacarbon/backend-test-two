import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import Card from "../../components/Card";
import { Input } from "../../components/Input";
import { IBeer } from "../../interfaces/IBeer";

function Edit() {
  const {id} = useParams();
  const [beer, setBeer] = useState<IBeer | boolean>()
  const [beerUpdated, setBeerUpdated] = useState<IBeer>()
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

  useEffect(() => {
    axios.get(`http://localhost:3005/beers/${id}`).then(data => {
      setBeer(data.data)
    }) as unknown as IBeer[];
  }, [])

  function handleUpdateBeer() {
    const updateInfo: IBeer = {}
    if (beerNameRef.current?.value != '') {updateInfo["name"] = beerNameRef.current?.value}
    if (beerABVRef.current?.value != '') {updateInfo["abv"] = beerABVRef.current?.value}
    if (beerAddressRef.current?.value != '') {updateInfo["address"] = beerAddressRef.current?.value}
    if (beerCategoryRef.current?.value != '') {updateInfo["category"] = beerCategoryRef.current?.value}
    if (beerCityRef.current?.value != '') {updateInfo["city"] = beerCityRef.current?.value}
    if (beerCoordinatesRef.current?.value != '') {updateInfo["coordinates"] = beerCoordinatesRef.current?.value}
    if (beerCountryRef.current?.value != '') {updateInfo["country"] = beerCountryRef.current?.value}
    if (beerDescriptionRef.current?.value != '') {updateInfo["description"] = beerDescriptionRef.current?.value}
    if (beerIBURef.current?.value != '') {updateInfo["ibu"] = parseInt(beerIBURef.current?.value as unknown as string)}
    if (beerStateRef.current?.value != '') {updateInfo["state"] = beerStateRef.current?.value}
    if (beerWebsiteRef.current?.value != '') {updateInfo["website"] = beerWebsiteRef.current?.value}

    axios.put(`http://localhost:3005/beers/${id}`, updateInfo).then(data => {
      console.log(data)
      if (data.status == 200) {
        axios.get(`http://localhost:3005/beers/${id}`).then(data => {
          setBeerUpdated(data.data)
          setBeer(false)
        }) as unknown as IBeer[];
      }
    });
  }

  if (typeof(beer) != "boolean" && beer) return (
    <div>
      <div>
        {beer.name ? <div><span>Name:</span><Input placeholder={beer.name} ref={beerNameRef}/></div> : null}
        {beer.abv ? <div><span>ABV:</span><Input placeholder={beer.abv} ref={beerABVRef}/></div> : null}
        {beer.address ? <div><span>Address:</span><Input placeholder={beer.address} ref={beerAddressRef}/></div> : null}
        {beer.category ? <div><span>Category:</span><Input placeholder={beer.category} ref={beerCategoryRef}/></div> : null}
        {beer.city ? <div><span>City:</span><Input placeholder={beer.city} ref={beerCityRef}/></div> : null}
        {beer.coordinates ? <div><span>Coordinates:</span><Input placeholder={beer.coordinates} ref={beerCoordinatesRef}/></div> : null}
        {beer.country ? <div><span>Country:</span><Input placeholder={beer.country} ref={beerCountryRef}/></div> : null}
        {beer.description ? <div><span>Description:</span><Input placeholder={beer.description} ref={beerDescriptionRef}/></div> : null}
        {beer.ibu ? <div><span>IBU:</span><Input placeholder={beer.ibu.toString()} ref={beerIBURef}/></div> : null}
        {beer.state ? <div><span>State:</span><Input placeholder={beer.state} ref={beerStateRef}/></div> : null}
        {beer.website ? <div><span>Website:</span><Input placeholder={beer.website} ref={beerWebsiteRef}/></div> : null}
      </div>
      <div>
        <Button>
          <Link to="/">CANCEL</Link>
        </Button>
        <Button onClick={handleUpdateBeer}>
          SAVE
        </Button>
      </div>
    </div>
  )

  return (
    <div>
      Beer Infos Updated Successfully

      <div>
        {beerUpdated?.name ? <p><strong>Name:</strong>{beerUpdated.name}</p> : null}
        {beerUpdated?.abv ? <p><strong>ABV:</strong>{beerUpdated.abv}</p> : null}
        {beerUpdated?.address ? <p><strong>Address:</strong>{beerUpdated.address}</p> : null}
        {beerUpdated?.category ? <p><strong>Category:</strong>{beerUpdated.category}</p> : null}
        {beerUpdated?.city ? <p><strong>City:</strong>{beerUpdated.city}</p> : null}
        {beerUpdated?.coordinates ? <p><strong>Coordinates:</strong>{beerUpdated.coordinates}</p> : null}
        {beerUpdated?.description ? <p><strong>Description:</strong>{beerUpdated.description}</p> : null}
        {beerUpdated?.ibu ? <p><strong>IBU:</strong>{beerUpdated.ibu}</p> : null}
        {beerUpdated?.state ? <p><strong>State:</strong>{beerUpdated.state}</p> : null}
        {beerUpdated?.website ? <p><strong>Website:</strong>{beerUpdated.website}</p> : null}
      </div>
    </div>
  )
}

export default Edit;
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { IBeer } from "../../interfaces/IBeer";

function Home() {
  const [beers, setBeers] = useState<IBeer[]>([])
  const [selectedBeers, setSelectedBeers] = useState<IBeer[]>([])
  const [inputNameBeers, setInputNameBeers] = useState<string>('')

  useEffect(() => {
    axios.get('http://localhost:3005/beers/').then(data => {
      setBeers(data.data)
      if (selectedBeers.length == 0) {
        setSelectedBeers(data.data)
        console.log(selectedBeers.length)
      }
    }) as unknown as IBeer[];
  }, [])

  useEffect(() => {
    const filteredBeers = beers.filter((beer) => beer.name?.includes(inputNameBeers))
    setSelectedBeers(filteredBeers)
  }, [inputNameBeers])

  function handleDeleteBeer(id: string) {
    axios.delete(`http://localhost:3005/beers/${id}`).then(data => {
      if (data.status == 204) {
        axios.get('http://localhost:3005/beers/').then(data => {
          setSelectedBeers(data.data)
        }) as unknown as IBeer[];
      }
    });
  }

  return (
    <div>
      <Header setInputNameBeers={setInputNameBeers} />
      <main>
        {
          selectedBeers.length > 0 ? (selectedBeers.map((beer) => (
            <Card key={beer.id} beer={beer} handleDeleteBeer={handleDeleteBeer}/>
          ))) : null
        }
      </main>
    </div>
  );
}

export default Home;
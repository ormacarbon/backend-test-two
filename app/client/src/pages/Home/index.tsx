import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { IBeer } from "../../interfaces/IBeer";

function Home() {
  const [beers, setBeers] = useState<IBeer[]>([])

  useEffect(() => {
    axios.get('http://localhost:3005/beers/').then(data => {
      setBeers(data.data)
    }) as unknown as IBeer[];
  }, [beers])

  return (
    <div>
      <Header/>
      <main>
        {
          beers.length > 0 ? (beers.map((beer) => (
            <Card key={beer.id} beer={beer}/>
          ))) : null
        }
      </main>
    </div>
  );
}

export default Home;
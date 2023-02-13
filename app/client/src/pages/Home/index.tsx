import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { IBeer } from "../../interfaces/IBeer";
import * as S from "./styles";

type Props = {
  currentItems: IBeer[]
}

function Home({currentItems}: Props) {
  const [selectedBeers, setSelectedBeers] = useState<IBeer[]>([])
  const [beers, setBeers] = useState<IBeer[]>([])
  const [inputNameBeers, setInputNameBeers] = useState<string>('')

  useEffect(() => {
    setSelectedBeers(currentItems)
    setBeers(currentItems)
  }, [currentItems])

  useEffect(() => {
    setSelectedBeers(beers)
  }, [beers])

  useEffect(() => {
      const filteredBeers = beers.filter((b) => b.name?.toLowerCase().includes(inputNameBeers.toLowerCase()))
      setSelectedBeers(filteredBeers)
  }, [inputNameBeers])

  function handleDeleteBeer(id: string) {
    axios.delete(`http://localhost:3005/beers/${id}`).then(data => {
      if (data.status == 204) {
        const removeBeer = beers.filter((b) => b.id != id)
        setBeers(removeBeer);
      }
    });
  }
  return (
    <div>
      <Header setInputNameBeers={setInputNameBeers} />
      <S.Content>
        {
          selectedBeers && selectedBeers.length > 0 ? (selectedBeers.map((beer) => (
            <Card key={beer.id} beer={beer} handleDeleteBeer={handleDeleteBeer}/>
          ))) : null
        }
      </S.Content>
    </div>
  );
}

export default Home;
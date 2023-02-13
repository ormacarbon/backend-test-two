import { Link } from "react-router-dom";
import { IBeer } from "../../interfaces/IBeer";
import { Button } from "../Button";
import * as S from "./styles";

type Props = {
  beer: IBeer,
  handleDeleteBeer: (id: string) => void
}

function Card({beer, handleDeleteBeer}: Props) {
  return (
    <S.Card>
      <div>
        {beer.name ? <p><strong>Name: </strong>{beer.name}</p> : null}
        {beer.abv ? <p><strong>ABV: </strong>{beer.abv}</p> : null}
        {beer.address ? <p><strong>Address: </strong>{beer.address}</p> : null}
        {beer.category ? <p><strong>Category: </strong>{beer.category}</p> : null}
        {beer.city ? <p><strong>City: </strong>{beer.city}</p> : null}
        {beer.coordinates ? <p><strong>Coordinates: </strong>{beer.coordinates}</p> : null}
        {beer.description ? <p><strong>Description: </strong>{beer.description}</p> : null}
        {beer.ibu ? <p><strong>IBU: </strong>{beer.ibu}</p> : null}
        {beer.state ? <p><strong>State: </strong>{beer.state}</p> : null}
        {beer.website ? <p><strong>Website: </strong>{beer.website}</p> : null}
      </div>
      <S.Actions>
        <S.EditButton>
          <Link to={`/${beer.id}/edit`}>EDIT</Link>
        </S.EditButton>
        <Button onClick={() => (handleDeleteBeer(beer.id as string))}>
          DELETE
        </Button>
      </S.Actions>
    </S.Card>
  );
}

export default Card;
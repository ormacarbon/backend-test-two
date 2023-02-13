import { Button } from "../Button";
import { Input } from "../Input";
import * as S from "./styles";

type Props = {
  setInputNameBeers: (search: string) => void
}
function Header({setInputNameBeers}: Props) {
  return (
    <S.Header>
      <S.Navlink to="/">Home</S.Navlink>
      <Input placeholder="search beer" onChange={(e) => {setInputNameBeers(e.target.value)}}/>
      <Button><S.Navlink to='/new'>NEW</S.Navlink></Button>
    </S.Header>
  );
}

export default Header;
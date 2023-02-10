import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";

type Props = {
  setInputNameBeers: (search: string) => void
}

function Header({setInputNameBeers}: Props) {
  return (
    <header>
      <Link to="/">Home</Link>
      <Input placeholder="search beer" onChange={(e) => {setInputNameBeers(e.target.value)}}/>
      <Button><Link to='/new'>NEW</Link></Button>
    </header>
  );
}

export default Header;
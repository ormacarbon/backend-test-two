import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Input placeholder="search beer"/>
      <Button>NEW</Button>
    </header>
  );
}

export default Header;
//  Dependencies
import { Link } from "react-router-dom"
//  Style
import "./header.css"

export const Header = () => {

    const toggleMenu = () => {
        const nav = document.querySelector(".Header-nav")
        nav?.classList.toggle("active")
    }

    return (
        <header className="Header-container">
            <nav>
                <img src={require("../../images/beer.jpg")} alt="logo" className="Header-logo" />
                <div className="Header-nav">
                    <button className="Header-btn-mobile" onClick={toggleMenu}>
                        <span className="Header-hamburger"></span>
                    </button>
                    <ul className="Header-menu">
                        <li><Link to="/" className="Header-link">Home</Link></li>
                        <li><Link to="/list" className="Header-link">Beer List</Link></li>
                        <li><Link to="/new-beer" className="Header-link">New Beer</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
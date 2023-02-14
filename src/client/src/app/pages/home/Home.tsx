//  Dependencies
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { Link } from "react-router-dom"
//  Style
import "./home.css"

export const Home = () => {
    return (
        <div className="Home-container">
            <div className="Home-background">
                <div className="Home-background-shadow"></div>
            </div>

            <div className="Home-card-container">
                <h1>TASTE A NEW <br />EXPERIENCE!</h1>
                <div>
                    <Link to="/new-beer" className="Home-card">
                        <h2>Register new beer</h2>
                        <div>
                            <p>after registering a new beer category, it will appear in the list along with the others.</p>
                            <BsArrowRight className="Home-arrow-new-beer" size={30} /> 
                        </div>
                    </Link>
                    <Link to="/list" className="Home-card">
                        <h2>Beer list</h2>
                        <div>
                            <p>The list contains all beer categories already registered, here you can consult, edit or delete a category</p>
                            <BsArrowRight className="Home-arrow-list" size={30} /> 
                        </div>
                    </Link>
                </div>

                <div>
                    <div onClick={() => window.location.href="https://github.com/FernandoLuppo"}> <BsGithub size={40} /></div>
                    <div onClick={() => window.location.href="https://www.linkedin.com/in/fernando-luppo-331496203/"}> <BsLinkedin size={40} /></div>
                </div>
            </div>
        </div>
    )
}


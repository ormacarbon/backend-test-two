//  Dependencies
import { BsGithub, BsLinkedin } from "react-icons/bs"
//  Components
import { Header } from "../../shared/components"
import { Form } from "./components"
//  Style
import "./newBeer.css"

export const NewBeer = () => {
    return (
        <div>
            <Header />
            <div className="NewBeer-background">
                <div className="NewBeer-container">
                    <Form />
                </div>

                <div className="List-social-media">
                    <div onClick={() => window.location.href="https://github.com/FernandoLuppo"}> <BsGithub size={40} /></div>
                    <div onClick={() => window.location.href="https://www.linkedin.com/in/fernando-luppo-331496203/"}> <BsLinkedin size={40} /></div>
                </div>
            </div>
        </div>
    )
}
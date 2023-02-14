//  Dependencies
import { BsGithub, BsLinkedin } from "react-icons/bs"
//  Components
import { Header } from "../../shared/components"
import { EditForm } from "./components"
//  Style
import "./editBeer.css"

export const EditBeer = () => {
    return (
        <div>
            <Header />
            <div className="EditBeer-background">
                <div className="EditBeer-container">
                    <EditForm />
                </div>

                <div className="EditBeer-social-media">
                    <div onClick={() => window.location.href="https://github.com/FernandoLuppo"}> <BsGithub size={40} /></div>
                    <div onClick={() => window.location.href="https://www.linkedin.com/in/fernando-luppo-331496203/"}> <BsLinkedin size={40} /></div>
                </div>
            </div>
        </div>
    )
}
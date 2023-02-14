//  Components
import { justNumber, justText } from "./mask"
//  Types
import { IInput } from "../../types"
//  Style
import "./input.css"

export const Input = ({title, mask, ...props}: IInput) => {

    const handleKeyUp = (e: React.FormEvent<HTMLInputElement>) => {
        if (mask === "justText") {
            justText(e)
        }
        if (mask === "justNumber") {
            justNumber(e)
        }
    }

    return (
        <div className="Input-container">
            <p>{title}</p>
            <input {...props} onKeyUp={handleKeyUp} />
        </div>
    )
}
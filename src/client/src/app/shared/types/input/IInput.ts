//  Types
import { InputHTMLAttributes } from "react"

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    mask?: "justText" | "justNumber"
    title: string
}
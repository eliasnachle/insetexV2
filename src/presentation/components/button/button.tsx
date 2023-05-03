import { btnStyle } from "./button.css"

type BtnProps = {
    text: String
}

export default function Button({text} : BtnProps ) {
    return(
        <button className={btnStyle}>
            {text}
        </button>
    )
}
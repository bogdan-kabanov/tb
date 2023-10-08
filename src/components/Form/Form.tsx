import React from "react";
import "./Form.scss"
export interface PropsForm {
    addClass?: string
    children: React.ReactNode
}

function Form(props: PropsForm) {
    return (
        <form className={`Form` + ` ${props.addClass}`}>
            {props.children}
        </form>
    )
}

export default Form
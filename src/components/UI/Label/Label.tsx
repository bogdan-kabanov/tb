import Input from "../Input/Input"
import './Label.scss'
import { LabelProps } from '@//types/ComponentTypes'

function Label(props: LabelProps) {

    const { labelText, htmlFor, id, placeholder } = props

    return (
        <label htmlFor={htmlFor} className="Label">
            <span className="Label_Title">{labelText}</span>
            <Input id={id} placeholder={placeholder} />
        </label>
    )
}

export default Label
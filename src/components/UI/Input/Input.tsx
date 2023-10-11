import './Input.scss'
import { InputProps } from '@/types/ComponentTypes'

function Input(props: InputProps) {

    const { id, placeholder } = props
    return (
        <input className="Input" id={id} placeholder={placeholder} />
    )
}

export default Input
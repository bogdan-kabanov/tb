import './Button.scss'
import { ButtonProps } from '@/types/ComponentTypes'

function Button(props: ButtonProps) {
    const { children, type } = props
    return (
        <button type={type} className="Button" {...props}>{children}</button>
    )
}

export default Button
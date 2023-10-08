import './Headline.scss'
import { HeadlineProps } from '../../../types/ComponentTypes'

function Headline(props: HeadlineProps) {
    const { children } = props
    return (
        <h3 className="Headline">{children}</h3>
    )
}

export default Headline
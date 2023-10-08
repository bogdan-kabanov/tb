import './Paragraph.scss'
import { ParagraphProps } from '../../../types/ComponentTypes'

function Paragraph(props: ParagraphProps) {
    const { children } = props
    return (
        <p className="Paragraph">
            {children}
        </p>
    )
}

export default Paragraph
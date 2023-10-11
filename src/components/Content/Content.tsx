import './Content.scss'
import { ContentProps } from '@/types/ComponentTypes'

function Content(props: ContentProps) {
    return (
        <div className="Content">
            {
                props.children
            }
        </div>
    )
}
export default Content
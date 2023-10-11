import './Container.scss'
import { ContainerProps } from '@/types/ComponentTypes'

function Container(props: ContainerProps) {
    return (
        <div className="Container">
            {
                props.children
            }
        </div>
    )
}
export default Container
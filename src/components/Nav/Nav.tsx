import './Nav.scss'
import { NavProps } from '../../types/ComponentTypes'

function Nav(props: NavProps) {
        return (
            <div className="Nav">
                {props.children}
            </div>
        )
    }

export default Nav
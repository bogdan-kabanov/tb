import './Nav.scss'
import { NavProps } from '../../types/ComponentTypes'
import { useSelector } from 'react-redux';

function Nav(props: NavProps) {
    const navClass = useSelector(state => state.navs.navClass)
    return (
        <div className={navClass.join(' ')}>
            {props.children}
        </div >
    )
}

export default Nav
import './Nav.scss'
import { NavProps } from '@/types/ComponentTypes'
import { useSelector } from 'react-redux';
import { NavStateType } from "@/types/ComponentTypes"
function Nav(props: NavProps) {
    const navClass = useSelector((state: NavStateType) => state.navs.navClass)
    return (
        <div className={navClass.join(' ')}>
            {props.children}
        </div >
    )
}

export default Nav
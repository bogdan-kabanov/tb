import './Nav.scss'
import { NavProps } from '@/types/ComponentTypes'
import { useSelector } from 'react-redux';
import { StyleClassStateType } from "@/types/ComponentTypes"

function Nav(props: NavProps) {    
    const navClass = useSelector((state: StyleClassStateType) => state.dinamicClassArray.classArray['Nav'])

    return (
        <div className={navClass.join(' ')}>
            {props.children}
        </div >
    )
}

export default Nav
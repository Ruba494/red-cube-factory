import {PATHS_CONSTANTS, PATHS_CONSTANTS_ENUM} from "../routes";
import {useNavigate} from "react-router";

export const Navigation = () => {
    const navigate=useNavigate()
    const onNavigation = (e:any,path:any) => {
        e.preventDefault()
        navigate(path)
    }

    return  <nav className={'navigation'}>
        <ul className={'navigation__list'}>
            <li className={'navigation__list-item'} onClick={(e)=>onNavigation(e,PATHS_CONSTANTS[PATHS_CONSTANTS_ENUM.HOME])}>logo</li>
            <li className={'navigation__list-item'} onClick={(e)=>onNavigation(e,PATHS_CONSTANTS[PATHS_CONSTANTS_ENUM.ABOUT_ME])}>about me</li>
            <li className={'navigation__list-item'} onClick={(e)=>onNavigation(e,PATHS_CONSTANTS[PATHS_CONSTANTS_ENUM.DESIGNS])}>designs</li>
        </ul>
    </nav>
}
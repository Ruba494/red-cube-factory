import {useNavigate} from "react-router";
import {PATHS_CONSTANTS, PATHS_CONSTANTS_ENUM} from "../../routes";
import {PenButtonLottie} from "../lottie/penButtonLottie.tsx";

export const GoToTemplates = () => {
    const navigate=useNavigate()
    return <div className={'templates-go-to'}
    onClick={(e)=>{
        e.preventDefault()
        navigate(PATHS_CONSTANTS[PATHS_CONSTANTS_ENUM.TEMPLATES])
    }}
    >
      <PenButtonLottie/>
    </div>
}
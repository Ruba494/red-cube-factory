import animationData from '../../lotties/icons8-exit-button';
import Lottie from 'react-lottie';
import {useRef, useState} from "react";

export const CloseButtonLottie = () => {
    const lottieRef = useRef(null);
    const defaultOptions = {
        autoplay:false,
        loop:false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const [stopped,setStopped]=useState(true)

    return<div  onMouseEnter={()=>{setStopped(false)}}
                onMouseLeave={()=>{setStopped(true)}}>
        <Lottie
            ref={lottieRef}
            options={defaultOptions}
            isClickToPauseDisabled isStopped={stopped}
            height={25}
            width={25}
        />
    </div>

}
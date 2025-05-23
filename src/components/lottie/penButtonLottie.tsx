// @ts-ignore
import animationData from '../../lotties/pen-lottie';
// @ts-ignore
import Lottie from 'react-lottie';
import {useRef, useState} from "react";

export const PenButtonLottie = () => {
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
            height={60}
            width={60}
        />
    </div>

}
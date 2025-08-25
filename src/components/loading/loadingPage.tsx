import { useEffect, useState } from "react";
import { SpinningCube } from "../spinningCube";
import { useCanvasStore } from "../../stores/canvasStore";
import { getAsset } from "../../utils/getAsset";
import {preloadImages} from "../../utils/preLoadImages.ts";
import {IMAGES} from "../../pages/constants/images.ts";

export const LoadingPage = ({ setIsLoaded }) => {
    const [counter, setCounter] = useState(0);
    const setPreloadedImages = useCanvasStore(state => state.setPreloadedImages);


    useEffect(() => {
        const urls = IMAGES.map(img => getAsset(img.imageSrc));

        preloadImages(
            urls,
            (loaded, total) => {
                setCounter(Math.round((loaded / total) * 100));
            },
            { width: 200 } // 👈 all preloaded images get width 200px
        ).then((loadedMap) => {
            setPreloadedImages(loadedMap);
            setIsLoaded(true);
        });
    }, [setPreloadedImages, setIsLoaded]);


    return (
        <div className="loading-page">
            <SpinningCube counter={counter} />
        </div>
    );
};
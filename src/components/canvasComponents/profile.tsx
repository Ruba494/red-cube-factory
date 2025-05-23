import {forwardRef, useEffect, useImperativeHandle, useRef} from "react";
import gsap from 'gsap';

const DURATION=[0,0.3,0.7,1]

export const Profile = () => {
    const cubeRef = useRef(null);
    const flowerRef = useRef(null);
    const arrowRef = useRef(null);
    const starsRef = useRef(null);
    const homeRef = useRef(null);
    const titleUnlineRef = useRef(null);
    const titleMarkRef = useRef(null);
    const heartsRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({ defaults: { ease: "power2.out",duration:DURATION[3]} });
        if (titleUnlineRef.current?.play) timeline.add(titleUnlineRef.current.play());
        if (titleMarkRef.current?.play) timeline.add(titleMarkRef.current.play(), '+=0.1');
        if (heartsRef.current?.play) timeline.add(heartsRef.current.play(), '+=0.1');
        if (cubeRef.current.play) timeline.add(cubeRef.current.play(), '+=0.1');
        if (flowerRef.current?.play) timeline.add(flowerRef.current.play(), '+=0.1');
        if (arrowRef.current?.play) timeline.add(arrowRef.current.play(), '+=0.1');
        if (starsRef.current?.play) timeline.add(starsRef.current.play(), '+=0.1');
        if (homeRef.current?.play) timeline.add(homeRef.current.play(), '+=0.1');

    }, []);
    return <div className={'profile'}>
        <span className={'title'}> Hi, I'm <span className={'title-highlight'}>Ruba <DoodleUnderline ref={titleUnlineRef}/></span> <span className={'title-mark'}><DoodleExclamationMark ref={titleMarkRef} /></span></span>
        <span className={'subtitle'}> I'm a software engineer who loves writing digital diaries.</span>
        <span className={'text'}>
            I created this website to share my own diary entries and the templates I design. My goal is to inspire others to start documenting their thoughts, memories, and everyday moments.
        </span>
        <span className={'text ending'}>
             <span className={'ending-hearts'}> <DoodleHearts ref={heartsRef}/></span>
            Feel free to explore and use anything you like—I’d love to see how you make it your own!
        </span>
        <div className={'doodles'}>
            <span className={'doodles-cube'}> <DoodleCube ref={cubeRef}/></span>
            <span className={'doodles-flower'}> <DoodleFlower ref={flowerRef}/></span>
            <span className={'doodles-arrow'}> <DoodleArrow ref={arrowRef}/></span>
            <span className={'doodles-stars'}> <DoodleStars ref={starsRef}/></span>
            <span className={'doodles-home'}> <DoodleHome ref={homeRef}/></span>
        </div>

        <div className={'contacts'}>
            <span className={'text'}>Whether it's a question, an idea, or just a hello—feel free to reach out on </span>
            <a className={'link'} href={'https://www.instagram.com/ruu.diary'}>ruu.diary</a>
            <a className={'link'} href={'https://sa.linkedin.com/in/ruba-almutairi-2000/en'}>Ruba Almutairi</a>
        </div>
    </div>
}


const DoodleCube = forwardRef((props, ref)  => {
    const path1Ref = useRef(null);
    const path2Ref = useRef(null);
    const path3Ref = useRef(null);
    const path4Ref = useRef(null);
    const path5Ref = useRef(null);
    const path6Ref = useRef(null);
    const path7Ref = useRef(null);
    const path8Ref = useRef(null);
    const path9Ref = useRef(null);
    const path10Ref = useRef(null);
    const path11Ref = useRef(null);
    const path12Ref = useRef(null);

    const animationTimeline = () => {
        const paths = [
            path1Ref.current, path2Ref.current, path3Ref.current, path4Ref.current,
            path5Ref.current, path6Ref.current, path7Ref.current, path8Ref.current,
            path9Ref.current, path10Ref.current, path11Ref.current, path12Ref.current,
        ];

        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

        paths.forEach((path, index) => {
            const length = path.getTotalLength();

            // Initial dash setup
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 0, // Hide stroke initially to mask round-cap artifact
            });

            // Animate dashoffset AND fade in opacity after small delay
            timeline.to(path, {
                strokeDashoffset: 1,
                duration: DURATION[1],
                onStart: () => {
                    gsap.to(path, { opacity: 1, duration: DURATION[0]}); // Fade in when stroke is long enough
                },
            }, `+=${index === 0 ? 0 : 0.2}`);
        });
        return timeline
    }

    useImperativeHandle(ref, () => ({
        play: () => {
            return animationTimeline();
        }
    }));

    return <div className={'cube-mark'}>
        <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={path1Ref} d="M1.46362 11.5856V36.8632" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path2Ref} d="M1.36047 10.8633H29.6301" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path3Ref} d="M30.6619 10.657V36.4505" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path4Ref} d="M1.56683 36.9663H30.7651" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>


            <path ref={path5Ref} d="M11.1031 1.92859V27.2062" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path6Ref} d="M11 1.2063H39.2697" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path7Ref} d="M40.3014 1V26.7935" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path8Ref} d="M11.2064 27.3093H40.4046" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>

            <path ref={path9Ref} d="M1.66998 10.5538C2.69498 9.2528 4.11214 8.2976 5.15497 7.01144C5.70471 6.33343 6.34241 5.74647 6.90893 5.08553C7.50149 4.39421 7.97673 3.59168 8.58837 2.91887C8.9205 2.55354 9.37589 2.20228 9.79207 1.93299C10.1856 1.67832 10.9468 1.5952 11.162 1.16492" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path10Ref} d="M30.8682 10.6569C32.6221 9.73128 34.0687 8.25453 35.3104 6.73058C36.0853 5.77965 36.9028 4.97561 37.7694 4.12257C38.1237 3.77387 38.4613 3.40505 38.8929 3.14815C39.1268 3.0089 39.4176 2.95265 39.6266 2.76984C39.8175 2.60274 39.9448 2.3012 40.1539 2.19666" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path11Ref} d="M1.77313 36.8632C3.59494 35.4394 5.49605 34.1274 7.08086 32.4267C8.41697 30.9928 9.69716 29.5136 10.9556 28.0131C11.3375 27.5578 11.6788 27.1118 11.9874 26.6489" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path12Ref} d="M31.0746 36.6568C32.5938 35.1376 33.6163 33.2827 35.0525 31.7159C36.098 30.5754 37.1714 29.4528 38.2509 28.3456C38.6557 27.9303 39.1772 27.4572 39.5349 27.01C39.7022 26.8008 40.0305 26.8958 40.1539 26.6489" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>

        </svg>
    </div>

})
const DoodleArrow = forwardRef((props, ref) => {
    const path1Ref = useRef(null);

    const animationTimeline = () => {
        const paths = [
            path1Ref.current,
        ];

        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

        paths.forEach((path, index) => {
            const length = path.getTotalLength();

            // Initial dash setup
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 0, // Hide stroke initially to mask round-cap artifact
            });

            // Animate dashoffset AND fade in opacity after small delay
            timeline.to(path, {
                strokeDashoffset: 1,
                duration: DURATION[1],
                onStart: () => {
                    gsap.to(path, { opacity: 1, duration: DURATION[0] }); // Fade in when stroke is long enough
                },
            }, `+=${index === 0 ? 0 : 0.2}`);
        });
        return timeline;
    }
    useImperativeHandle(ref, () => ({
        play: () => {
            return animationTimeline();
        }
    }));

    return <div className={'arrow-mark'}>
        <svg width="28" height="66" viewBox="0 0 28 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={path1Ref} d="M15.5345 1.88708C9.69585 7.72576 4.21055 17.9424 3.52481 26.3426C2.83557 34.7858 6.25509 40.6325 11.7102 47.0409C14.4531 50.2631 19.5053 53.2799 23.8541 51.402C30.8179 48.3949 23.1972 38.1175 17.9163 38.1175C13.7727 38.1175 8.73764 39.0198 7.6846 44.0217C6.39017 50.1703 6.285 53.4948 9.02647 59.2519C9.30312 59.8329 10.6367 61.4596 10.6367 61.9692C10.6367 62.1304 3.60391 61.3011 2.55196 60.4596C0.652935 58.9404 2.99104 60.3714 3.92737 60.9292C6.06748 62.2042 9.07233 62.7866 10.838 64.5523C11.8022 65.5165 13.7217 60.8643 14.3268 59.8557" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
        </svg>

    </div>

})
const DoodleFlower = forwardRef((props, ref) => {
    const path1Ref = useRef(null);
    const path2Ref = useRef(null);
    const path3Ref = useRef(null);
    const path4Ref = useRef(null);
    const path5Ref = useRef(null);
    const path6Ref = useRef(null);
    const path7Ref = useRef(null);

    const  animationTimeline= () => {
        const paths = [path1Ref.current, path2Ref.current, path3Ref.current, path4Ref.current,
            path5Ref.current, path6Ref.current, path7Ref.current];

        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

        paths.forEach((path, index) => {
            const length = path.getTotalLength();

            // Initial dash setup
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 0, // Hide stroke initially to mask round-cap artifact
            });

            // Animate dashoffset AND fade in opacity after small delay
            timeline.to(path, {
                strokeDashoffset: 1,
                duration: DURATION[1],
                onStart: () => {
                    gsap.to(path, { opacity: 1, duration: DURATION[0] }); // Fade in when stroke is long enough
                },
            }, `+=${index === 0 ? 0 : 0.2}`);
        });
        return timeline;
    }

    useImperativeHandle(ref, () => ({
        play: () => {
            return animationTimeline();
        }
    }));

    return <div className={'flower-mark'}>
        <svg width="45" height="58" viewBox="0 0 45 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={path1Ref} d="M19.9163 18.4534C20.2556 17.2095 22.2367 16.8349 23.2687 16.8938C24.8644 16.985 27.1105 17.2062 28.1727 18.5338C28.907 19.4518 29.0577 20.2943 29.0329 21.4601C29.0042 22.809 26.6278 23.6629 25.5117 23.6629C23.0491 23.6629 20.8851 22.6361 19.5144 20.6562C19.0204 19.9426 18.701 18.829 18.9034 18.0193" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>

            <path ref={path2Ref} d="M23.534 23.6629C21.1454 26.9201 19.7752 31.3863 15.7198 33.0689C12.5789 34.3721 7.36945 34.6816 5.55818 31.0591C3.42002 26.7828 8.56516 23.3986 11.9575 22.0711C13.8098 21.3463 15.7422 20.7831 17.7136 20.4874C18.3237 20.3959 18.8642 20.1899 19.4822 20.1899" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>

            <path ref={path3Ref} d="M19.4823 20.1899C15.8661 20.522 12.5418 20.3936 9.06333 19.177C6.97282 18.4458 4.25729 17.4071 2.72837 15.704C0.0649769 12.7372 4.27628 8.82517 7.1339 8.14709C9.5195 7.58101 11.5497 8.17308 13.8548 8.82239C15.2715 9.22147 16.4174 9.65885 17.3116 10.8161C17.7111 11.3331 17.8365 11.9137 18.003 12.5365C18.1696 13.1597 18.4913 13.7275 18.5819 14.3695C18.7 15.2073 18.9252 16.0587 19.1928 16.8617" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>

            <path ref={path4Ref} d="M20.0611 16.8617C19.6182 16.8064 18.9034 15.047 18.7265 14.6429C18.2048 13.4502 17.5564 12.1816 17.3116 10.8966C16.8669 8.5618 16.8518 6.18445 17.8583 4.01493C18.2039 3.27 18.4688 2.57089 19.2571 2.24628C20.1352 1.88475 21.0855 1.50051 22.0387 1.4102C23.8294 1.24056 25.2665 1.5179 26.9105 2.24628C29.8801 3.56191 30.2147 8.13319 29.7243 10.9287C29.4164 12.684 28.8011 14.4313 28.02 15.9935" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path5Ref} d="M27.8752 16.5723C27.9795 14.6952 30.1665 13.5516 31.2678 12.3034C31.5323 12.0037 31.6673 11.7361 31.9592 11.4754C32.6788 10.8329 34.1661 10.6202 35.1106 10.5268C36.2366 10.4154 37.3959 10.4946 38.5273 10.4946C38.9499 10.4946 39.5682 10.3775 39.894 10.7358C41.1276 12.0928 42.8688 13.2046 43.4715 15.0127C43.9971 16.5896 43.4101 18.3254 42.1128 19.3298C40.5171 20.5652 38.6624 21.9294 36.7345 22.5857C35.8754 22.8782 34.5886 22.8922 33.6877 22.9314C33.0301 22.96 32.3683 22.9394 31.71 22.9394C31.0589 22.9394 29.5022 23.0098 29.1776 22.3606" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path6Ref} d="M29.1776 22.3606C29.2397 22.857 30.5299 23.5045 30.9061 23.7353C31.6004 24.1613 32.2023 24.7189 32.7471 25.3191C33.1177 25.7274 33.755 26.0931 33.953 26.6375C34.2196 27.3707 34.2424 28.208 34.2424 28.9769C34.2424 31.8081 32.5933 34.2018 29.6118 34.4999C27.8007 34.681 26.1567 34.4765 24.4746 33.8568C23.4055 33.4629 23.1231 32.2082 22.9874 31.2038C22.769 29.5878 22.3329 27.7005 23.0195 26.131C23.2825 25.53 23.5341 24.4442 23.5341 23.8077" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>

            <path ref={path7Ref} d="M23.9682 22.3606C22.1274 27.8829 20.3815 33.3301 19.9967 39.1708C19.7787 42.4808 19.7567 45.7466 19.9164 49.0591C20.0065 50.9306 20.2635 52.8411 20.6399 54.6786C20.7461 55.1971 20.9293 55.6911 20.9293 56.2221" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>

        </svg>
    </div>
})
const DoodleHearts = forwardRef((props, ref) => {
    const path1Ref = useRef(null);
    const path2Ref = useRef(null);
    const path3Ref = useRef(null);
    const path4Ref = useRef(null);

    const animationTimeline = () => {
        const paths = [path1Ref.current, path2Ref.current, path3Ref.current, path4Ref.current];

        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

        paths.forEach((path, index) => {
            const length = path.getTotalLength();

            // Initial dash setup
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 0, // Hide stroke initially to mask round-cap artifact
            });

            // Animate dashoffset AND fade in opacity after small delay
            timeline.to(path, {
                strokeDashoffset: 1,
                duration: DURATION[1],
                onStart: () => {
                    gsap.to(path, { opacity: 1, duration: DURATION[0] }); // Fade in when stroke is long enough
                },
            }, `+=${index === 0 ? 0 : 0.2}`);
        });
        return timeline;
    }

    useImperativeHandle(ref, () => ({
        play: () => {
            return animationTimeline();
        }
    }));

    return <div className={'hearts-mark'}>
        <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={path1Ref} d="M9.1026 6.99558C9.1026 5.92985 9.20919 4.78312 9.71592 3.82357C10.3213 2.67725 11.7706 1.82807 13.0636 1.89097C13.5686 1.91554 13.8905 2.1767 14.2583 2.49152C14.6641 2.83887 15.1668 3.2269 15.4019 3.72135C15.8675 4.70078 15.9699 5.85932 15.9354 6.93169C15.8999 8.03088 15.1874 9.11993 14.533 9.94718C13.7266 10.9666 12.7957 11.8761 11.9967 12.8988C11.5364 13.4879 11.0428 14.083 10.687 14.7387C10.3771 15.31 10.1678 15.8746 9.96508 16.4829" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path2Ref} d="M9.33256 7.45559C9.27085 6.96195 9.13914 6.34044 8.9141 5.89035C8.71301 5.48817 8.44494 5.11192 8.21134 4.7276C7.99299 4.36839 7.79653 3.96792 7.49899 3.66707C6.38411 2.5398 5.11535 2.08577 3.58908 2.5714C2.01381 3.07262 1.615 5.13587 1.88329 6.56117C2.04899 7.44145 2.55435 8.02197 3.1227 8.69181C3.68258 9.35167 4.20231 10.0451 4.79336 10.6755C5.26245 11.1759 5.75504 11.9097 6.35541 12.2599C7.62075 12.998 8.74483 13.8763 9.56255 15.1029" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path3Ref} d="M21.9252 22.8755C21.9252 21.929 21.9209 20.8649 22.3437 19.9912C22.929 18.7816 23.7884 18.2699 25.0188 17.8466C26.1347 17.4628 27.2964 17.4299 28.1273 18.3697C28.6973 19.0145 29.1067 19.9461 29.0501 20.8243C28.9686 22.088 27.988 23.1112 27.238 24.0486C26.8844 24.4907 26.536 24.9373 26.2218 25.4086C25.9647 25.7943 25.6287 26.0896 25.3849 26.4846C24.7795 27.4657 24.2865 28.4579 23.8494 29.5221C23.7056 29.8722 23.5572 30.2476 23.4421 30.6093C23.422 30.6725 23.3375 31.1466 23.3375 30.8783" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path4Ref} d="M22.1269 23.0772C21.4353 21.4863 20.8878 19.8036 19.5042 18.6536C18.6748 17.9643 17.773 18.1338 16.9785 18.691C15.0516 20.0423 14.5889 23.7227 16.1117 25.5356C16.7634 26.3114 17.4546 27.2717 18.3534 27.7773C18.8199 28.0397 19.3378 28.1935 19.7993 28.4573C20.0926 28.6249 20.3451 28.9402 20.6063 29.1559C21.0419 29.5158 21.2856 30.0344 21.6898 30.4076C21.9264 30.6259 22.0489 31.0747 22.3287 31.2146" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
        </svg>
    </div>

})
const DoodleUnderline = forwardRef((props, ref) => {
    const pathRef = useRef(null);

    const animationTimeline = () => {

        const path = pathRef.current;
        const length = path.getTotalLength();

        //
        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

        timeline.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        // Animate stroke drawing
        timeline.to(path, {
            strokeDashoffset: 0,
            duration: DURATION[3],
            ease: "power2.out",
        });
        return timeline
    }

    useImperativeHandle(ref, () => ({
        play: () => {
            return animationTimeline();
        }
    }));

    return <div className={'underline'}>
        <svg  width="133" height="7" viewBox="0 0 133 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef}  d="M1.02118 2.33831C1.45756 2.26558 1.75274 1.86774 2.15177 1.69973C2.71163 1.464 3.67673 1.60365 4.27163 1.58981C5.06643 1.57133 5.7652 1.62294 6.53805 1.82535C8.55708 2.35414 10.1551 3.84489 12.0863 4.54715C13.0712 4.90529 13.6266 5.09386 14.693 4.78792C16.3931 4.30017 17.9833 3.50098 19.6027 2.80939C22.1782 1.70941 25.3982 2.28665 27.6058 3.99755C28.4264 4.63353 29.6238 5.38869 30.694 5.4422C32.0881 5.5119 33.3045 5.05375 34.5621 4.49481C37.0986 3.36748 39.7646 2.03895 42.403 3.53171C43.295 4.03644 44.2123 4.60037 45.1876 4.93448C46.3027 5.31652 47.688 5.24044 48.841 5.25377C50.9461 5.2781 52.841 5.09555 54.7924 4.25927C56.4489 3.5493 58.023 2.95961 59.8172 2.75704C60.5914 2.66963 61.3323 2.56911 62.115 2.66283C62.7259 2.73596 63.0759 3.09327 63.612 3.33281C64.3991 3.68447 65.0469 4.15836 65.8941 4.41106C67.3891 4.85693 69.2322 4.57202 70.7096 4.22263C72.4099 3.82053 74.0645 3.23094 75.6507 2.5058C77.1173 1.83536 78.7351 1.26035 80.372 1.41708C81.8243 1.55613 83.1909 2.30146 84.6013 2.64189C85.6512 2.89532 86.708 3.18503 87.7732 3.36421C89.0623 3.58108 90.3753 3.56311 91.6779 3.56311C94.2865 3.56311 96.8694 2.90955 99.3722 2.20222C100.843 1.78666 102.046 1.43672 103.581 1.39091C104.882 1.35206 106.467 1.04348 107.674 1.67879C108.488 2.10749 109.196 2.69405 110.092 2.98735C111.382 3.40961 113.221 3.52026 114.536 3.19148C116.043 2.81462 117.48 2.14057 119.027 1.91957C119.689 1.82501 120.307 1.7614 120.874 2.108C121.729 2.63051 122.507 2.91465 123.507 3.03969C125.577 3.29842 127.67 2.99785 129.673 2.48486C130.116 2.37145 131.059 2.16803 131.322 1.77301" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
        </svg>
    </div>

})
const DoodleExclamationMark = forwardRef((props, ref) => {
    const path1Ref = useRef(null);
    const path2Ref = useRef(null);
    const path3Ref = useRef(null);
    const path4Ref = useRef(null);
    const animationTimeline = () => {
        const paths = [path1Ref.current, path2Ref.current, path3Ref.current, path4Ref.current];

        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

        paths.forEach((path, index) => {
            const length = path.getTotalLength();

            // Initial dash setup
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 0, // Hide stroke initially to mask round-cap artifact
            });

            // Animate dashoffset AND fade in opacity after small delay
            timeline.to(path, {
                strokeDashoffset: 1,
                duration: DURATION[1],
                onStart: () => {
                    gsap.to(path, { opacity: 1, duration: DURATION[0] }); // Fade in when stroke is long enough
                },
            }, `+=${index === 0 ? 0 : 0.2}`);
        });
        return timeline;
    }

    useImperativeHandle(ref, () => ({
        play: () => {
            return animationTimeline();
        }
    }));

    return <div className={'exclamation-mark'}>

        <svg width="14" height="38" viewBox="0 0 14 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={path2Ref} d="M1.5 1C3.91776 1 9.5 1.00011 9.5 1.00011C9.5 1.00011 11.5 1 12.5291 1.11941C13.0117 1.17541 12.751 1.8399 12.6913 2.15117C12.4365 3.47975 12.0183 4.76224 11.8082 6.10251C11.5173 7.95755 11.2942 9.80811 10.9656 11.6578C10.6462 13.456 10.3381 16.635 10.2628 17.087C10.1692 17.6487 9.3752 22.1253 9.3752 24.6833C9.3752 25.0742 9.25805 25.3745 9.25805 25.7691C9.25805 26.0234 9 27.4601 9 28" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path1Ref} d="M1.5 1C1.5 4.48092 1.93195 8.63689 2.4277 12.0717C2.62342 13.4278 3 16 3 16L3.33331 19.1994C3.33331 19.1994 3.65994 23.1292 4.13979 24.98C4.40023 25.9846 4.67188 26.9863 4.99584 27.9582" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path3Ref} d="M5 27.9982C5.04606 27.9982 5.5 27.9982 5.5 27.9982L6 27.9982H7C7.07176 27.9912 8 27.9982 8 27.9982L8.5 27.9982C8.5 27.9982 8.94751 28.0041 9 27.9982" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path4Ref} d="M7.00314 32.3537C6.60034 32.3354 5.84286 32.2925 5.5 32.5C4.91652 32.8532 4.3942 33.075 4.1301 33.739C3.91349 34.2836 3.98128 35.1261 4.2403 35.6518C4.60382 36.3895 5.27854 36.6112 6.08219 36.6042C7.07571 36.5955 7.87106 36.0459 8.34914 35.1952C8.52277 34.8863 8.81847 34.2284 8.54592 33.8807C8.27246 33.5318 8.30221 33.3242 8 33C7.88021 32.8715 7.21272 32.3632 7.00314 32.3537Z" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
        </svg>

    </div>

})
const DoodleStars = forwardRef((props, ref) => {
    const path1Ref = useRef(null);
    const path2Ref = useRef(null);
    const path3Ref = useRef(null);

    const animationTimeline = () => {
        const paths = [path1Ref.current, path2Ref.current, path3Ref.current];

        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

        paths.forEach((path, index) => {
            const length = path.getTotalLength();

            // Initial dash setup
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 0, // Hide stroke initially to mask round-cap artifact
            });

            // Animate dashoffset AND fade in opacity after small delay
            timeline.to(path, {
                strokeDashoffset: 1,
                duration: DURATION[1],
                onStart: () => {
                    gsap.to(path, { opacity: 1, duration:DURATION[0] }); // Fade in when stroke is long enough
                },
            }, `+=${index === 0 ? 0 : 0.2}`);
        });
        return timeline;
    }

    useImperativeHandle(ref, () => ({
        play: () => {
            return animationTimeline();
        }
    }));

    return <div className={'stars-mark'}>

        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={path1Ref} d="M14.3862 17.4031C14.3862 16.5578 14.5899 15.7225 14.5973 14.8706C14.6099 13.4082 14.4298 11.965 14.2846 10.513C14.1852 9.51891 14.2312 8.51026 14.0697 7.52325C13.8973 6.46958 13.7705 5.33134 13.7531 4.26384C13.7412 3.53147 13.6052 2.81862 13.4874 2.09872C13.4635 1.95293 13.4073 1.80864 13.4014 1.66101C13.3973 1.55936 13.6092 2.08251 13.6476 2.14562C15.0349 4.42479 17.219 5.80741 19.3926 7.23014C20.3819 7.87771 21.3219 8.55729 22.2612 9.27411C23.1061 9.91895 23.9631 10.497 24.8445 11.0953C25.2181 11.3489 25.5935 11.5932 25.9544 11.8613C26.0592 11.9392 26.2659 12.0068 26.3296 12.1271C26.371 12.2054 24.9883 12.1922 24.8992 12.1896C20.8126 12.0711 16.7571 11.6346 12.6666 11.6346C10.2667 11.6346 7.86353 11.705 5.46781 11.705C4.78321 11.705 5.40011 11.5133 5.76483 11.3532C7.09238 10.7708 8.47324 10.3253 9.88403 10.001C12.7977 9.33122 15.6286 8.20705 18.3022 6.88231C19.3949 6.34091 20.2534 5.42176 21.3154 4.81489C22.3955 4.19771 23.6206 3.76414 24.5514 2.94288C24.7931 2.72959 24.9503 2.47323 24.7194 2.93507C24.216 3.94192 23.703 4.94072 23.1327 5.91309C22.0008 7.84317 20.4304 9.52339 18.9119 11.1617C18.5907 11.5083 18.3767 11.949 18.0873 12.3225C17.8495 12.6293 17.5928 12.9141 17.3643 13.2292C16.7565 14.0669 16.1777 14.8699 15.6447 15.7617C15.0578 16.7434 14.1844 17.7271 13.8235 18.81" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path2Ref} d="M28.4639 28.8796C28.7617 27.5724 29.0231 26.288 29.1807 24.954C29.3045 23.9069 29.6269 22.9302 29.8938 21.9159C30.3283 20.265 30.4681 18.6193 30.6637 16.9321C30.7351 16.3165 30.7668 16.7657 30.9027 17.1217C31.2369 17.9972 31.6607 18.8758 32.0899 19.7085C32.4914 20.4875 32.9071 21.2462 33.3794 21.9842C33.745 22.5554 34.1825 23.0752 34.5362 23.653C35.0554 24.5009 35.7192 25.2729 36.2999 26.0804C36.9137 26.934 37.7533 27.6379 38.3632 28.4851C38.401 28.5376 38.5379 28.7614 38.5263 28.7582C37.4241 28.452 36.3414 28.0645 35.2265 27.7834C33.9075 27.4509 32.5922 27.1766 31.2858 26.7973C30.3514 26.526 29.4193 26.2501 28.4866 25.9742C26.9618 25.5232 25.3829 25.2572 23.8594 24.7985C23.2079 24.6023 22.5375 24.5078 21.8795 24.3433C21.7895 24.3208 21.5437 24.2578 21.6292 24.222C22.115 24.0182 22.6972 23.9386 23.2108 23.8389C24.431 23.6019 25.6744 23.4451 26.9012 23.2434C28.7561 22.9385 30.5894 22.5354 32.4236 22.1207C34.3449 21.6863 36.1687 20.9733 38.0826 20.5125C38.2171 20.4801 39.5599 20.0211 39.3645 20.3684C38.6443 21.6488 37.5529 22.8398 36.463 23.8085C35.5847 24.5893 34.7449 25.3258 33.7473 25.9477C32.824 26.5233 31.9502 27.0912 31.1644 27.8479C30.4149 28.5696 29.562 29.1868 28.8052 29.9036C28.4427 30.2471 27.8743 30.5366 27.6446 30.996" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path3Ref} d="M7.9825 38.4376C7.84575 38.2325 7.91423 37.8459 7.91423 37.6259C7.91423 36.8421 7.91423 36.0582 7.91423 35.2743C7.91423 33.9972 8.07914 32.7873 8.25559 31.527C8.47786 29.9394 8.52062 28.2513 8.52867 26.6494C8.53334 25.7202 8.52867 24.7909 8.52867 23.8616C8.52867 23.1873 8.7535 24.2712 8.85486 24.4875C9.29011 25.416 9.89825 26.2311 10.4972 27.059C11.4689 28.4022 12.4104 29.7406 13.2925 31.1439C13.7874 31.9313 14.3595 32.6742 14.8741 33.4462C15.0675 33.7363 15.2824 34.0631 15.5189 34.2996C15.5517 34.3324 15.4306 34.271 15.3862 34.2579C15.0207 34.1494 14.6429 34.0813 14.2711 33.9999C13.2393 33.7742 12.2179 33.5966 11.1685 33.4689C9.79613 33.302 8.4236 33.1067 7.06084 32.8735C5.71364 32.6429 4.33844 32.1566 2.96835 32.1566C2.62447 32.1566 2.28058 32.1566 1.9367 32.1566C1.8128 32.1566 1.6889 32.1566 1.565 32.1566C1.16711 32.1566 1.69613 31.9535 1.82291 31.8835C3.64556 30.8773 5.65899 30.2107 7.55012 29.3423C8.52141 28.8963 9.46006 28.354 10.482 28.0262C10.9196 27.8858 11.3355 27.6815 11.7754 27.5521C12.5069 27.3369 13.2652 27.1955 14.0056 27.0135C14.873 26.8003 15.7344 26.6915 16.5164 26.3005C16.8314 26.143 16.8147 26.1818 16.6985 26.5622C16.459 27.346 16.253 28.1525 15.9172 28.9023C15.5623 29.6947 15.1181 30.4679 14.7034 31.2312C14.2433 32.0782 13.5121 32.852 12.8601 33.5562C12.4103 34.042 12.063 34.5857 11.6464 35.0999C11.0476 35.8388 10.4648 36.5039 9.75756 37.1404C9.33123 37.5241 8.94528 37.8366 8.59695 38.301" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
        </svg>


    </div>

})
const DoodleHome = forwardRef((props, ref) => {
    const path1Ref = useRef(null);
    const path2Ref = useRef(null);
    const path3Ref = useRef(null);
    const path4Ref = useRef(null);

    const animationTimeline = () => {
        const paths = [path1Ref.current, path2Ref.current, path3Ref.current, path4Ref.current];

        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

        paths.forEach((path, index) => {
            const length = path.getTotalLength();

            // Initial dash setup
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 0, // Hide stroke initially to mask round-cap artifact
            });

            // Animate dashoffset AND fade in opacity after small delay
            timeline.to(path, {
                strokeDashoffset: 1,
                duration: DURATION[1],
                onStart: () => {
                    gsap.to(path, { opacity: 1, duration: DURATION[0] }); // Fade in when stroke is long enough
                },
            }, `+=${index === 0 ? 0 : 0.2}`);
        });
        return timeline
    }

    useImperativeHandle(ref, () => ({
        play: () => {
            return animationTimeline();
        }
    }));

    return <div className={'home-mark'}>
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={path1Ref} d="M1 15C1.68126 14.4465 4.5 12 4.5 12C4.5 12 5.99595 10.5424 7.55008 9.16398C8.51671 8.30661 9.54268 7.36546 10.5 6.5C12.3314 4.84432 11.7365 5.48371 12.3314 4.84432C13.2461 3.86123 14.2881 2.99071 15.1408 1.95262C15.2987 1.76043 15.5 1.5 15.5 1.5" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path2Ref} d="M15.6956 1.36566C16.85 1.99699 17.9669 2.65452 19.0955 3.34118C21 4.5 22.5 6 22.5 6C22.5 6 31.2837 13.7116 31.5 14" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path3Ref} d="M1.008 15.2157C4.57219 15.117 8.10953 14.676 11.6658 14.457C13.1555 14.3653 14.6484 14.3482 16.1393 14.2817C17.5374 14.2193 18.9361 14.186 20.3266 14.0133C21.5692 13.8588 22.7508 14.0971 24 14C24.7496 13.9417 25.75 14.053 26.5 14C27.4495 13.9328 28.0496 14.0547 29 14C29.8151 13.9531 30.6841 14 31.5 14" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path4Ref} d="M6.38651 15.7727C6.50148 17.8421 6.3865 21.8361 6.3865 23.9113C6.3865 24.7717 6.3063 25.6838 6.41871 26.5381C6.50316 27.1799 6.32208 27.7522 6.32208 28.3741C6.32208 29.0791 6.32208 30.4892 6.32208 30.4892C6.3298 30.6203 8.53173 30.4892 8.53173 30.4892C8.53173 30.4892 12.8895 30.6045 15.0317 30.5C15.6779 30.4684 16.3871 30.5 17.0317 30.5C17.1291 30.5 17.3421 30.2528 17.4022 30.1661C17.5469 29.9569 17.531 29.0554 17.531 28.7928C17.531 27.5638 17.4022 26.348 17.4022 25.1245C17.4022 24.8803 17.1342 23.1336 17.395 23.1239C18.3575 23.0883 19.2876 22.8754 20.2581 22.9342C20.7134 22.9618 21.1594 22.9951 21.618 22.9951C21.9063 22.9951 21.971 23.0137 22.0475 23.31C22.2808 24.214 22.4269 25.1987 22.4269 26.1373C22.4269 26.6902 22.4009 27.2801 22.5235 27.8194C22.6509 28.3801 22.4985 29.9353 22.5317 30.5C22.5401 30.6431 23.8103 30.5 24.0317 30.5C24.3094 30.5 24.7578 30.5472 25.0317 30.5C25.5245 30.415 26.0334 30.5178 26.5317 30.5C27.0693 30.4808 27.4948 30.5282 28.0317 30.5C28.2672 30.4876 28.3534 28.6115 28.3534 28.485C28.3534 27.793 28.4402 27.1009 28.4787 26.4093C28.5415 25.278 28.6399 24.1203 28.5317 22.9951C28.4597 22.2461 28.5317 21 28.5317 21C28.5317 21 28.5913 19.596 28.5317 19C28.4623 18.3057 28.5317 17 28.5317 17C28.5317 17 28.5317 15.5911 28.5317 15" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
        </svg>

    </div>

})


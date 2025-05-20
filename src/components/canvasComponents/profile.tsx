import {useEffect, useRef} from "react";
import gsap from 'gsap';


export const Profile = () => {
    return <div className={'profile'}>
        <span className={'title'}> Hi, I'm <span className={'title-highlight'}>Ruba <DoodleUnderline/></span> <span className={'title-mark'}><DoodleExclamationMark/></span>👋🏼</span>
        <span className={'subtitle'}> I'm a software engineer who loves writing digital diaries.</span>
        <span className={'text'}>
            I created this website to share my own diary entries and the templates I design. My goal is to inspire others to start documenting their thoughts, memories, and everyday moments.
        </span>
        <span className={'text'}>   Feel free to explore and use anything you like—I’d love to see how you make it your own!
        </span>
        <div className={'contacts'}>
            <span className={'text'}>Whether it's a question, an idea, or just a hello—feel free to reach out on </span>
            <a className={'link'} href={'https://www.instagram.com/ruu.diary'}>ruu.diary</a>
            <a className={'link'} href={'https://sa.linkedin.com/in/ruba-almutairi-2000/en'}>Ruba Almutairi</a>
        </div>
    </div>
}


const DoodleCircle = () => {
    return   <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path fill="none" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7" />
    </svg>
}

const DoodleUnderline = () => {
    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        const length = path.getTotalLength();

        // Set initial dash properties
        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        // Animate stroke drawing
        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.2,
        });
    }, []);
    return <div className={'underline'}>
        <svg  width="133" height="7" viewBox="0 0 133 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef}  d="M1.02118 2.33831C1.45756 2.26558 1.75274 1.86774 2.15177 1.69973C2.71163 1.464 3.67673 1.60365 4.27163 1.58981C5.06643 1.57133 5.7652 1.62294 6.53805 1.82535C8.55708 2.35414 10.1551 3.84489 12.0863 4.54715C13.0712 4.90529 13.6266 5.09386 14.693 4.78792C16.3931 4.30017 17.9833 3.50098 19.6027 2.80939C22.1782 1.70941 25.3982 2.28665 27.6058 3.99755C28.4264 4.63353 29.6238 5.38869 30.694 5.4422C32.0881 5.5119 33.3045 5.05375 34.5621 4.49481C37.0986 3.36748 39.7646 2.03895 42.403 3.53171C43.295 4.03644 44.2123 4.60037 45.1876 4.93448C46.3027 5.31652 47.688 5.24044 48.841 5.25377C50.9461 5.2781 52.841 5.09555 54.7924 4.25927C56.4489 3.5493 58.023 2.95961 59.8172 2.75704C60.5914 2.66963 61.3323 2.56911 62.115 2.66283C62.7259 2.73596 63.0759 3.09327 63.612 3.33281C64.3991 3.68447 65.0469 4.15836 65.8941 4.41106C67.3891 4.85693 69.2322 4.57202 70.7096 4.22263C72.4099 3.82053 74.0645 3.23094 75.6507 2.5058C77.1173 1.83536 78.7351 1.26035 80.372 1.41708C81.8243 1.55613 83.1909 2.30146 84.6013 2.64189C85.6512 2.89532 86.708 3.18503 87.7732 3.36421C89.0623 3.58108 90.3753 3.56311 91.6779 3.56311C94.2865 3.56311 96.8694 2.90955 99.3722 2.20222C100.843 1.78666 102.046 1.43672 103.581 1.39091C104.882 1.35206 106.467 1.04348 107.674 1.67879C108.488 2.10749 109.196 2.69405 110.092 2.98735C111.382 3.40961 113.221 3.52026 114.536 3.19148C116.043 2.81462 117.48 2.14057 119.027 1.91957C119.689 1.82501 120.307 1.7614 120.874 2.108C121.729 2.63051 122.507 2.91465 123.507 3.03969C125.577 3.29842 127.67 2.99785 129.673 2.48486C130.116 2.37145 131.059 2.16803 131.322 1.77301" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
        </svg>
    </div>

}


const DoodleExclamationMark = () => {
    const path1Ref = useRef(null);
    const path2Ref = useRef(null);
    const path3Ref = useRef(null);
    const path4Ref = useRef(null);

    useEffect(() => {
        const paths = [path1Ref.current, path2Ref.current, path3Ref.current, path4Ref.current];

        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

        paths.forEach((path, index) => {
            const length = path.getTotalLength();
            console.log(length)

            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            timeline.to(path, {
                strokeDashoffset: 0,
                duration: 0.8,
            }, `+=${index === 0 ? 0 : 0.2}`);
        });
    }, []);
    return <div className={'exclamation-mark'}>
        <svg width="14" height="38" viewBox="0 0 14 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={path1Ref} d="M2.31958 1.27646C4.73734 1.27646 7.15579 1.29437 9.57346 1.27646C10.5673 1.26909 11.5381 1.11426 12.5291 1.11426C13.0015 1.11426 12.751 1.83474 12.6913 2.14602C12.4365 3.4746 12.0183 4.75709 11.8082 6.09736C11.5174 7.95239 11.2942 9.80295 10.9657 11.6527C10.6462 13.4508 10.5628 15.2817 10.2628 17.0818C9.84316 19.5997 9.37522 22.1201 9.37522 24.6781C9.37522 25.0691 9.36064 25.383 9.25807 25.7639C9.1164 26.2901 9.21302 26.9316 9.21302 27.4715" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path2Ref} d="M1.34637 1.68201C1.34637 5.16293 1.93195 8.63689 2.4277 12.0717C2.62342 13.4278 2.90664 14.7515 3.13957 16.0997C3.31556 17.1183 3.18859 18.1704 3.33331 19.1994C3.59974 21.0941 3.65994 23.1292 4.13979 24.98C4.40023 25.9846 4.67188 26.9863 4.99584 27.9582" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path3Ref} d="M5.96906 28.0392C6.7967 27.8611 7.56756 27.845 8.40203 27.7959C8.53923 27.7878 8.6361 27.6337 8.80753 27.6337" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
            <path ref={path4Ref} d="M6.22388 33.2034C6.30945 32.9039 6.60034 32.335 7.00314 32.3533C7.21272 32.3629 7.49732 32.7837 7.6171 32.9122C7.91932 33.2365 8.27246 33.5315 8.54592 33.8804C8.81847 34.2281 8.52277 34.8859 8.34914 35.1949C7.87106 36.0456 7.07571 36.5952 6.08219 36.6039C5.27854 36.6108 4.60382 36.3892 4.2403 35.6514C3.98128 35.1258 3.91349 34.2833 4.1301 33.7387C4.3942 33.0747 4.97511 32.7075 5.65714 32.7075" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
        </svg>
    </div>

}


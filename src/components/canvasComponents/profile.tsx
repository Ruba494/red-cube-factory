export const Profile = () => {
    return <div className={'profile'}>
        <span className={'title'}> Hi, I'm <span className={'title-highlight'}>Ruba <DoodleUnderline/> </span> 👋🏼</span>
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
    return    <svg viewBox="0 0 250 80" preserveAspectRatio="none">
        <path d="M1.36829 7.15009C2.12796 5.4788 5.3579 4.93698 6.92056 4.33058C8.91978 3.55476 11.9964 3.10732 14.0778 3.8968C17.9582 5.36867 18.8427 7.46903 23.1002 5.97891C26.9923 4.61668 30.9459 3.18204 34.9422 2.16172C35.9117 1.91418 36.887 2.3678 37.7834 2.70393C39.0849 3.19202 40.5506 3.83062 41.9476 4.00525C43.2226 4.16463 44.7307 3.13942 45.96 2.85575C47.8053 2.4299 49.5688 2.03078 51.4689 2.07496C52.5009 2.09896 53.6078 2.93663 54.6137 3.24615C55.6887 3.5769 56.597 4.41733 57.7802 4.41733C60.9841 4.41733 64.2652 2.7416 67.4316 2.24847C70.2773 1.8053 71.444 3.63654 73.9816 3.63654C77.775 3.63654 81.2067 1.68457 84.9126 1.68457C86.4835 1.68457 87.0778 2.7635 88.5129 3.15939C91.2669 3.91912 94.4275 2.68673 97.1233 2.48705C99.4265 2.31644 101.207 2.69604 103.261 3.7233C105.955 5.07005 108.824 4.21089 111.611 3.46303C112.677 3.17699 113.695 2.85575 114.799 2.85575C115.712 2.85575 116.128 3.59228 116.925 3.63654C118.803 3.74087 120.507 3.36588 122.217 2.87744C123.336 2.55778 124.536 4.0153 125.6 4.33058C127.284 4.82957 129.57 4.18569 130.979 3.24615" stroke="#CF0921" stroke-width="2" stroke-linecap="round"/>
    </svg>
}



import {EmojiNode} from "../canvasComponents/emojiNode.tsx";

export const Card3 = () => {
    return <div className={'card card-3'}>
        <div className={'description'}>
            See the fun emojis? Tap them and watch them pop!
        </div>
        <div className={'emoji'} onClick={(e)=>{e.stopPropagation()}} >
            <EmojiNode data={ {
                emoji:'🥳'
            }}/>
        </div>
    </div>
}
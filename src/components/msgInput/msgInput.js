import { useState } from "react";
import Picker from "emoji-picker-react";

import classes from './msgInput.module.css'
const MsgInput = ()=>{

    const [showPicker, setShowPicker] = useState(false)
    const handleEmojiSelect = (obj)=>{
        console.log(obj.emoji)
    }
    return (
        <>
            <form className={`${classes['msg-form']} d-flex align-items-center`} method="POST" action="#">
                <div>
                    <i className="bi bi-emoji-smile" onClick={()=>setShowPicker(!showPicker)}></i>
                    {showPicker && <Picker onEmojiClick={handleEmojiSelect} />}
                </div>
                <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
                <button type="submit" title="Search"><i className="bi bi-send"></i></button>
            </form>
        </>
    )
}

export default MsgInput;
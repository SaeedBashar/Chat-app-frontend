import { useState } from "react";
import Picker from "emoji-picker-react";

import classes from './msgInput.module.css'
const MsgInput = ({msgSend})=>{
    const [msg, setMsg] = useState("");
    const [showPicker, setShowPicker] = useState(false)

    const handleEmojiSelect = (obj)=>{
        console.log(obj.emoji)
        let message = msg;
        message += obj.emoji;
        setMsg(message);
    }

    const sendMsg = (event) => {
        event.preventDefault();
        if (msg.length > 0) {
          msgSend(msg);
          setMsg("");
        }
    };

    return (
        <form className={`${classes['msg-form']} d-flex align-items-center`}>
            <div className={`p-2 ${classes['emoji-div']}`}>
                <i className="bi bi-emoji-smile" style={{fontSize: '20px',cursor: 'pointer'}} onClick={()=>setShowPicker(!showPicker)}></i>
                <div className={classes['picker-div']}>
                    {showPicker && <Picker onEmojiClick={handleEmojiSelect} />}
                </div>
            </div>
            <input 
                type="text" name="query" 
                placeholder="type your message here" 
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
            />
            <button type="button" onClick={sendMsg}><i className="bi bi-send"></i></button>
        </form>
    )
}

export default MsgInput;
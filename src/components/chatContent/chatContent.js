import {useState, useRef, useEffect } from 'react';
import axios from 'axios';

import { messagesApi, msgSendApi } from '../../apis/chat';
import MsgInput from '../msgInput/msgInput';

import classes from './chatContent.module.css';

const ChatContent = ({currentChat})=>{

    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        const data = JSON.parse(
          sessionStorage.getItem('userInfo')
        );
        axios.post(messagesApi, {
          from: data._id,
          to: currentChat._id,
        })
        .then(({data})=>{
            console.log(data)
            setMessages(data);
        });
      }, [currentChat]);

    const handleMsgSend = async (msg) => {
        const data = JSON.parse(
            sessionStorage.getItem('userInfo')
        );

        axios.post(msgSendApi, {
            from: data._id,
            to: currentChat._id,
            message: msg,
        })
        .then(({data})=>{
            console.log(data)
            if(data.status){
                const msgs = [...messages];
                msgs.push({ fromSelf: true, message: msg });
                setMessages(msgs);
            }
        });
        
    };

    return (
        <main id="main" className={`main ${classes.chatMain}`}>
            <div className="modal-content" style={{height: '100%'}}>
                <div className="modal-header">
                    <h5 className="modal-title">Current Chat</h5>
                </div>
                <div className="modal-body">
                <div>
                    {
                        messages.map(m=>(
                            <div className={`mb-2 ${m.fromSelf ? classes.sent : classes.received}`} key={m.createdAt}>
                                <div className={classes.msgContent}>
                                    <p>{m.message}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                </div>
                <div className="modal-footer">
                    <MsgInput msgSend={handleMsgSend}/>
                </div>
            </div>
        </main>
    )
}

export default ChatContent
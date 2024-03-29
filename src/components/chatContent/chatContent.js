import {useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { messagesApi, msgSendApi } from '../../apis/chat';
import MsgInput from '../msgInput/msgInput';

import classes from './chatContent.module.css';

const ChatContent = ({currentChat, socket})=>{
    
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState(null);

    const scrollRef = useRef();
   
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);
      

    useEffect(() => {
        if (socket) {
          socket.on("msg-recieve", (msg) => {
            console.log('msg sent')
            setNewMessage({ fromSelf: false, message: msg });
          });
        }
    }, []);

    useEffect(() => {
        newMessage && setMessages((prev) => [...prev, newMessage]);
    }, [newMessage]);
    
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
                socket.emit("send-msg", {
                    to: currentChat._id,
                    msg
                  });
            }
        });
        
    };

    return (
        <main id="main" className={`main ${classes.chatMain}`}>
            <div className={`modal-content`} style={{height: '100%'}}>
                <div className="modal-header">
                    <h5 className="modal-title">{currentChat.username}</h5>
                </div>
                <div className={`modal-body ${classes['modal-body']}`}>
                <div>
                    {
                        messages.map((m, i)=>(
                            <div ref={scrollRef} className={`mb-2 ${m.fromSelf ? classes.sent : classes.received}`} key={m.createdAt + i}>
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
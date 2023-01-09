import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import ChatList from '../chatList/chatList';

import Navigation from '../navigation/navigation';
import { useEffect } from 'react';
import { host, usersApi } from '../../apis/chat';
import ChatContent from '../chatContent/chatContent';

const ChatMessages = ()=>{

    const socket = useRef();
    const navigate = useNavigate()

    const [chatList, setChatList] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    
    useEffect(() => {
        if (!sessionStorage.getItem('userInfo')) {
            navigate("/signin");
        } else {
            let user = JSON.parse(sessionStorage.getItem('userInfo'))
            setCurrentUser(user);
        }
      }, []);

    useEffect(()=>{
        if(currentUser){
            axios.get(`${usersApi}/${currentUser._id}`)
            .then(({data})=>{
                console.log(data)
                setChatList(data);
            });
        }
    }, [currentUser]) 

   

    return (
        <>
            <Navigation/>
            <ChatList chats={chatList} onChatChange={(chat)=>setCurrentChat(chat)}/>
            
            {currentChat ? 
                <ChatContent currentChat={currentChat}/>
            : <div>Select A Chat</div>
            }
        </>
    )
}

export default ChatMessages
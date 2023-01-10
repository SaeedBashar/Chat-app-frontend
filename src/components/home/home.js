import { useRef, useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { io } from "socket.io-client";
import { Routes, Route } from 'react-router-dom';

import ChatList from '../chatList/chatList';
import Navigation from '../navigation/navigation';
import { host, usersApi } from '../../apis/chat';
import ChatContent from '../chatContent/chatContent';
import Status from '../status/status';
import Calls from '../calls/calls';

import classes from './home.module.css';

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

    useEffect(() => {
        if (currentUser) {
            socket.current = io(host);
            socket.current.emit("add-user", currentUser._id);
        }
    }, [currentUser]);
      
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
            <Navigation user={currentUser}/>
            <ChatList chats={chatList} onChatChange={(chat)=>setCurrentChat(chat)}/>
            
            <main id="main" className={`main ${classes.chatMain}`}>
                <ul className="nav nav-tabs nav-tabs-bordered">

                    <li className="nav-item">
                        <Link to='/home' 
                            className="nav-link active" data-bs-toggle="tab" 
                            data-bs-target="#profile-overview">Chats</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/home/status" className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Status</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/home/calls" className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Calls</Link>
                    </li>

                </ul>
            
                <div class="tab-content pt-2">
                
                    {
                        currentChat ? 
                        <ChatContent currentChat={currentChat} socket={socket}/>
                        : <div>Select A Chat</div>
                    }
                    <Outlet/>
                </div>
            </main>
        </>
    )
}

export default ChatMessages
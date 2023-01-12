import { useRef, useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { io } from "socket.io-client";
import { connect } from 'react-redux';
import { setSocket, setCurrentChat, userAdd } from '../../store/actions/actions';

import ChatList from '../chatList/chatList';
import Navigation from '../navigation/navigation';
import { host, usersApi } from '../../apis/chat';
import ChatContent from '../chatContent/chatContent';

import classes from './home.module.css';
import { getChats } from '../../store/actionCreators/actionCreaters';

const ChatMessages = props=>{

    // const socket = useRef();
    const navigate = useNavigate()

    // const [chatList, setChatList] = useState([]);
    // const [currentChat, setCurrentChat] = useState(undefined);
    // const [currentUser, setCurrentUser] = useState(undefined);
    
    useEffect(() => {
        if(!props.user){
            if (!sessionStorage.getItem('userInfo')) {
                navigate("/signin");
            } else {
                let user = JSON.parse(sessionStorage.getItem('userInfo'))
                props.setUser(user);
            }
        }
      }, []);

    useEffect(() => {
        if (props.user) {
            // socket.current.emit("add-user", props.user._id);
            let soc = io(host);
            soc.emit("add-user", props.user._id);

            props.socket || props.setSocket(soc);
            props.setChat(props.user._id);
        }
    }, [props.user]);
      
    // useEffect(()=>{
    //     if(props.user){
    //         axios.get(`${usersApi}/${props.user._id}`)
    //         .then(({data})=>{
    //             console.log(data)
    //             setChatList(data);
    //         });
    //     }
    // }, [props.user]) 

    return (
        <>
            <Navigation user={props.user}/>
            <ChatList chats={props.chats} onChatChange={(chat)=>props.setCurrentChat(chat)}/>
            
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
            
                <div className="tab-content pt-2">
                
                    {
                        props.currentChat ? 
                        <ChatContent currentChat={props.currentChat} socket={props.socket}/>
                        : <div>Select A Chat</div>
                    }
                    <Outlet/>
                </div>
            </main>
        </>
    )
}

const mapPropsToState = state=>{
    console.log(state)
    return {
        user : state.user,
        socket : state.socket,
        chats : state.chats,
        currentChat : state.currentChat
    }
}

const mapDispatchToProps = dispatch => {

    return {
        setChat : (id)=>dispatch(getChats(id)),
        setSocket : (soc)=>dispatch({type: setSocket, socket: soc}),
        setCurrentChat : (chat)=>dispatch({type: setCurrentChat, chat: chat}),
        setUser : (user)=>dispatch({type: userAdd, user : user})
    }
}
export default connect(mapPropsToState,mapDispatchToProps)(ChatMessages);
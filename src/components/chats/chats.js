import { useRef } from 'react';
import {connect } from 'react-redux';
import ChatContent from '../chatContent/chatContent';

const Chats = props => {

    
    return (
        <>
            {
                props.currentChat ? 
                <ChatContent currentChat={props.currentChat} socket={props.socket}/>
                : <div>Select A Chat</div>
            }
        </>
    )
}

const mapPropsToState = state => {
    return {
        currentChat : state.currentChat,
        socket : state.socket
    }
}

export default connect(mapPropsToState)(Chats);
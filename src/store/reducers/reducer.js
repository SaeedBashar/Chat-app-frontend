import { setChats, setCurrentChat, setSocket, setStatus, userAdd } from "../actions/actions";

const initState = {
    user : null,
    socket : null,
    chats : [],
    status : [],
    currentChat: null
}

const reducer = (state=initState, action)=>{

    switch(action.type){
        case userAdd:
            return {
                ...state,
                user : {...action.user}
            }
        case setSocket:
            return {
                ...state,
                socket : action.socket
            }
        case setChats:
            return {
                ...state,
                chats : action.chats
            }
        case setCurrentChat:
            return {
                ...state,
                currentChat : action.chat
            }
        case setStatus :
            return {
                ...state,
                status : action.status
            }
    }
    return state
}


export default reducer;
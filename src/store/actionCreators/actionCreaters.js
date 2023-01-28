import axios from "axios";
import { setChats, setStatus} from "../actions/actions";
import { usersApi, getStatusApi } from "../../apis/chat";

export const getChats = (id)=>{

    return dispatch => {
            axios.get(`${usersApi}/${id}`)
            .then(({data})=>{
                console.log(data)
                dispatch({type: setChats, chats : data});
            });
    }
}

export const getStatus = (id)=>{

    return dispatch => {
        axios.get(getStatusApi + '/' + id)
        .then(({data})=>{
            dispatch({type: setStatus, status : data})
        })
    }
}
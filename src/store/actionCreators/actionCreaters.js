import axios from "axios";

import { setChats } from "../actions/actions";
import { usersApi } from "../../apis/chat";

export const getChats= (id)=>{

    return dispatch => {
            axios.get(`${usersApi}/${id}`)
            .then(({data})=>{
                console.log(data)
                dispatch({type: setChats, chats : data});
            });
    }
}
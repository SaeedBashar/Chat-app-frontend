
import { Routes, Route, Navigate} from 'react-router-dom'
import Signin from '../../components/auth/signin';
import ChatMessages from '../../components/chatMessages/chatMessages';

const Pages = ()=>{

    return (
        <>
            <Routes>
                <Route path='/chats' element={<ChatMessages/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/signup' element={<Signin/>}/>
                <Route path="*" element={<Navigate to="/signin" replace />}/>
            </Routes>
        </>
    )
}

export default Pages;
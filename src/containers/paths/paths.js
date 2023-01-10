
import { Routes, Route, Navigate, Outlet} from 'react-router-dom'
import Signin from '../../components/auth/signin';
import Home from '../../components/home/home';
import Status from '../../components/status/status';
import Calls from '../../components/calls/calls';
import ChatContent from '../../components/chatContent/chatContent';

const paths = ()=>{

    return (
        <>
            <Routes>
                <Route path='home' element={<><Outlet/></>}>
                    <Route index element={<Home/>}/>
                    <Route path="status" element={<Status/>} />
                    <Route path="calls" element={<Calls/>} />
                </Route>
                <Route path='signin' element={<Signin/>}/>
                <Route path='signup' element={<Signin/>}/>
                <Route path="/" element={<Navigate to="/home" replace />}/>
                <Route path="*" element={<Navigate to="/signin" replace />}/>
            </Routes>
        </>
    )
}

export default paths;
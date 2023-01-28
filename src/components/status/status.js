
import { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './status.module.css';
import axios from 'axios';
import { getStatus } from '../../store/actionCreators/actionCreaters';

const Status = props=>{
    useEffect(()=>{
        console.log(props)
        props.setStatus(props.user._id)
    }, [])
    return (
        <>
            <div className="card">
                <div className="card-header"><i className={`bi bi-person-plus ${classes.statusAddIcon}`}></i> <span className={`${classes.statusAddText}`}>Status</span> </div>
                <div className="card-body">
                    <ul className={classes.statusList} id="">
                        {props.status[0].status.map((item)=><li className={classes.statusListItem} >
                            <a className="" onClick={()=>1}>
                            <i className="bi bi-person"></i>
                            <span>{item.datePosted}</span>
                            </a>
                        </li>)}
                    </ul>
                </div>
                <div className="card-footer">
                    Footer
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        socket : state.socket,
        status : state.status,
        user : state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setStatus : (id)=>dispatch(getStatus(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Status);
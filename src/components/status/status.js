
import classes from './status.module.css';

const Status = ()=>{

    return (
        <>
            <div className="card">
                <div className="card-header"><i className={`bi bi-person-plus ${classes.statusAddIcon}`}></i> <span className={`${classes.statusAddText}`}>Status</span> </div>
                <div className="card-body">
                    <ul className={classes.statusList} id="">
                        <li className={classes.statusListItem} >
                            <a className="" onClick={()=>1}>
                            <i className="bi bi-person"></i>
                            <span>sdsd</span>
                            </a>
                        </li>
                        <li className={classes.statusListItem} >
                            <a className="" onClick={()=>1}>
                            <i className="bi bi-person"></i>
                            <span>sdsd</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="card-footer">
                    Footer
                </div>
            </div>
        </>
    )
}

export default Status;

import MsgInput from '../msgInput/msgInput';
import classes from './chatMessages.module.css';

const ChatMessages = ()=>{

    return (
        <main id="main" className={`main ${classes.chatMain}`}>
            {/* <section className="section"> */}
                <div className="modal-content" style={{height: '100%'}}>
                    <div className="modal-header">
                        <h5 className="modal-title">Current Chat</h5>
                    </div>
                    <div className="modal-body">
                    <div>
                        <div className={classes.sent}>
                            <div className={classes.msgContent}>
                                <p>Hello</p>
                            </div>
                        </div>
                        <div className={classes.received}>
                            <div className={classes.msgContent}>
                                <p>xup</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <MsgInput/>
                    </div>
                </div>
            {/* </section> */}
        </main>
    )
}

export default ChatMessages
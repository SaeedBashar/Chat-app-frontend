
const ChatList = ({chats, onChatChange})=>{

    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                {chats.map(c=><li className="nav-item" key={c._id}>
                    <a className="nav-link " onClick={()=>onChatChange(c)}>
                    <i className="bi bi-person"></i>
                    <span>{c.username}</span>
                    </a>
                </li>)}

            </ul>

        </aside>
    )
}

export default ChatList
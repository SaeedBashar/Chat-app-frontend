

const ChatList = ()=>{

    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <a className="nav-link " href="index.html">
                    <i className="bi bi-grid"></i>
                    <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="users-profile.html">
                    <i className="bi bi-person"></i>
                    <span>Profile</span>
                    </a>
                </li>

            </ul>

        </aside>
    )
}

export default ChatList
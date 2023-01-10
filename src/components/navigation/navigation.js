import { useEffect, useState } from "react";


const Navigation = ({user})=>{
    
    const toggleNotification = ()=>{
        document.querySelector('.notification-drop-btn').classList.toggle('show')

        let el = document.querySelector('.notification-drop-ctn');
        el.classList.toggle('show')
        if(el.classList.contains('show')){
            el.style.position = 'absolute';
            el.style.inset = '0px 0px auto auto';
            el.style.margin = '0px';
            el.style.transform = 'translate(-0.171875px, 48px)';
        }
    }

    const toggleProfile = ()=>{
        document.querySelector('.profile-drop-btn').classList.toggle('show')

        let el = document.querySelector('.profile-drop-ctn');
        el.classList.toggle('show')
        if(el.classList.contains('show')){
            el.style.position = 'absolute';
            el.style.inset = '0px 0px auto auto';
            el.style.margin = '0px';
            el.style.transform = 'translate(-16px, 54px)';
        }
        
    }

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
                <img src="assets/img/logo.png" alt=""/>
                <span className="d-none d-lg-block">WeChat</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn" 
                onClick={()=>document.querySelector('body').classList.toggle('toggle-sidebar')}></i>
            </div>

            <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">


                <li className="nav-item dropdown">

                <a className="nav-link nav-icon notification-drop-btn" href="#" onClick={toggleNotification} data-bs-toggle="dropdown">
                    <i className="bi bi-bell"></i>
                    <span className="badge bg-primary badge-number">4</span>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications notification-drop-ctn">
                    <li className="dropdown-header">
                    You have 4 new notifications
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>30 min. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    <li className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                    </li>

                </ul>

                </li>


                <li className="nav-item dropdown pe-3">

                <a className="nav-link nav-profile d-flex align-items-center pe-0 profile-drop-btn" href="#" onClick={toggleProfile} data-bs-toggle="dropdown">
                    {/* <img src="#" alt="Profile" className="rounded-circle"/> */}
                    <span className="d-none d-md-block dropdown-toggle ps-2">{user && user.username}</span>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile profile-drop-ctn">
                    <li className="dropdown-header">
                    <h6>{user && user.username}</h6>
                    <span>{user && user.email}</span>
                    </li>
                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </a>
                    </li>

                </ul>
                </li>

            </ul>
            </nav>

        </header>
    )
}

export default Navigation;
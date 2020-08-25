import React from 'react'
import './styles.scss'
import logo from '../../assests/logo.png'
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Navbar = (props) => {

    return (
        <>
            <div className="wrapper">
                <div className="top_navbar">
                    <div className="logo">
                        <img src={logo} alt="prography" />
                    </div>
                    <div className="top_menu">
                        <div className="nav_title">
                            <div>{props.title}</div>
                            <span>{props.subTitle}</span>
                        </div>
                        <ul>
                            <li>
                                <a href="#" >
                                    <NotificationsIcon />
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <PersonIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
import React from 'react'
import './styles.scss'
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import ViewCompactRoundedIcon from '@material-ui/icons/ViewCompactRounded';
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="wrapper">
            <div class="sidebar">
                <ul>
                    <li>
                        <NavLink
                            key="0"
                            activeClassName="active"
                            exact
                            to='/'>
                            <span class="icon"> <DashboardIcon /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            key="1"
                            activeClassName="active"
                            to='/campaign' >
                            <span class="icon"><SettingsSystemDaydreamIcon /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            key="2"
                            activeClassName="active"
                            to='/library'>
                            <span class="icon"><PhotoLibraryIcon /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            key="3"
                            activeClassName="active"
                            to='/templates'>
                            <span class="icon"><ViewCompactRoundedIcon /></span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Sidebar
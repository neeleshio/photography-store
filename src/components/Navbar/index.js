import React from 'react'
import './styles.scss'
import logo from '../../assests/logo.png'

const Navbar = () => {

    return (
        <>
            <div className="nav-container">

                <div className="nav-brand">
                    <img alt="logo" src={logo} />
                    <span> Analytics </span>
                </div>

                <div className="app-version">
                    <p> FrontRow -v2.0 </p>
                </div>

            </div>
        </>
    )
}

export default Navbar;
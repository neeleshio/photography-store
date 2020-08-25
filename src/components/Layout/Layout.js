import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './styles.scss'

const Layout = (props) => {
    return (
        <>
            <Navbar title={props.title} subTitle={props.subTitle} />
            <Sidebar />

            <div className="wrapper">
                <div class="main_container">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Layout
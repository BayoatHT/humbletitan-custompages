import React from 'react';
// import AdminSideContent from './AdminSideContent';
import {Link} from 'react-router-dom'


const AdminSideBar = ({children}) => {
    return (
        <>
            <div className="abcd_row">
                <div className="admin-sidebar  sidebar-icon-abcd ">
                    <Link to='/admin/custom-pages' className='abcd_row abcd_justify-center    mt-1_abcd'>
                        <i className="fas fa-code sidebar-icon-home"></i>
                        Custom Pages
                    </Link>
                    <Link to='#' className='abcd_row abcd_justify-center mt-2_abcd'>
                    <i className="fas fa-assistive-listening-systems sidebar-icon-home"></i>
                    Tickers
                    </Link>
                    <Link to='#' className='abcd_row abcd_justify-center mt-2_abcd'>
                        <i className="fas fa-users sidebar-icon-home"></i>
                        Roles
                    </Link>
                </div>
                {children}
                {/* <AdminSideContent /> */}
            </div>
        </>
    )
}

export default AdminSideBar

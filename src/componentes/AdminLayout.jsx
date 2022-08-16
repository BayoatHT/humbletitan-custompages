import React from 'react'; 
import AdminHeader from './AdminHeader';
import AdminSideBar from './AdminSideBar';

const AdminLayout = ({children}) => {
    return (
        <>
            <AdminHeader />
            <AdminSideBar children={children} /> 
            
        </>
    )
};

export default AdminLayout;

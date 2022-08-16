import React from 'react'; 
import CustomPageFiltersContet from '../componentes/admin/CustomPageFiltersContet';
// import CustomPagesList from '../components/admin/CustomPagesList';
import AdminLayout from '../componentes/AdminLayout';
// import AdminSideContent from '../components/AdminSideContent';

const CustomPageFilter = () => {
    return (
        <> 
        <AdminLayout>
            <CustomPageFiltersContet/>
        </AdminLayout>
        </>
    )
};

export default CustomPageFilter;

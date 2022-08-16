import React from 'react'
import CustomPagesList from '../componentes/admin/CustomPagesList'
import AdminLayout from '../componentes/AdminLayout'
// import AdminSideContent from '../components/AdminSideContent';

const CustomPages = () => {
  return (
    <>
      <AdminLayout>
        <CustomPagesList />
      </AdminLayout>
    </>
  )
}

export default CustomPages

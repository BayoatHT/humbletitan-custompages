import React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomePage() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center', color: '#023a51', backgroundColor: '#e0ecf0'}}>
      <h1>Welcome</h1>
      <Link to={"/admin/custom-pages"} style={{fontWeight: 'bold', textDecoration: 'underline'}} >Click here to go to actual Page</Link>
      </div>
  )
}

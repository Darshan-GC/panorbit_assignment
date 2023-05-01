import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Layout from '../layout'

function RouteProtection({ children }) {
    const userProfile = useSelector((state) => state.userDetails.userData)
  return (
    userProfile ? <Layout>
      {children}
     </Layout> : <Navigate to={'/'}/>
  )
}

export default RouteProtection
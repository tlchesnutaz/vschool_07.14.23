import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props){
    const { token, children } = props

    return token ? children : <Navigate to="/" />
}

/*
<ProtectedRoute>
    <Component /> // access through React.children, this allows us to pass component as props
</ProtectedRoute>
*/
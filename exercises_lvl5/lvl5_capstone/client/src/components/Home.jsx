import React from "react"
import { Link } from "react-router-dom"


export default function Home() {
    return(
         
        <div className="container-home">
            <h2 className="title"> Home: </h2>
            <p className="subtitle"> Let us help you 'tame' your pet care to-dos! </p> 
            <Link to="/addpetform"> Add A Pet </Link>
        </div>

    )
}
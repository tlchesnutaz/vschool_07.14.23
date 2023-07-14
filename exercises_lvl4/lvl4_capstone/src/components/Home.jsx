import React from "react"
import { Link } from "react-router-dom"


export default function Home() {
    return(
         
        <div className="container">
            <h2 className="title"> RECREATION: </h2> 
            <p className="subtitle"> what does it mean to you? </p>
            <p>our National Parks are just the beginning</p>
            <p>explore some of 'the other' recreation areas</p> 
            <p>and find your next favorite 'happy place'</p>
                {/* <div className="main"></div>
                <div className="second"></div>
                <div className="third"></div>
                <div className="fourth"></div> */}
            <Link to="/search">Search Recreation Areas</Link>
        </div>

    )
}
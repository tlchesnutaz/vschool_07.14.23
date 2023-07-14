import React from "react"
import felix from "./felix.png"
import phone from "./phone-icon.png"
import mail from "./mail-icon.png"

export default function Contact() {

    return (
        <div className="contact-card">
            <img src={felix} alt="felix" />
            <h3>Felix</h3>
            <div className="info-group">
                <img src={phone}/>
                <p>(212) 555-4567</p>
            </div>
            <div className="info-group">
                <img src={mail}/>
                <p>thecat@hotmail.com</p>
            </div>
        </div>
    )

}
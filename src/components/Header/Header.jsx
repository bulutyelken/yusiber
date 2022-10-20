import React from 'react'
import './header.scss'
import yusiber from "../../assets/yusibersb.png"

function Header() {
    return (
        <div className='header'>
            <img className='logo' src={yusiber} alt="logo" />
            <div className='buttons'>
                <button className='headerbtn'>Hakkımızda</button>
                <button className='headerbtn'>Blog</button>
                <button className='headerbtn'>İletişim</button>
            </div>
        </div>
    )   
}
export default Header;
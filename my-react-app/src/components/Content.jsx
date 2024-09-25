import React from "react";
import '../styles/Content.css'
import image1 from '../assets/logo-tutwurihandayani.jpg'
import image2 from '../assets/logo-merdekabelajar.png'

function Content() {
    return(
        <div className="content">
            <img src={image1} alt="" className="bagian1"/>
            <h3>layanan</h3>
            <ul>
            <li>A. Informasi Merdeka Belajar</li>
            <li>B. Akun Belajar</li>
            <li>C. Merdeka Belajar</li>
            <li>D. Raport Pendidikan</li>
            </ul>
            <img src={image2} alt="" className="bagian2"/>
            <h2>Portal Utama</h2>
            <h4>Hak Cipta Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. Republik Indonesia © 2024</h4>
        </div>
    )
}

export default Content
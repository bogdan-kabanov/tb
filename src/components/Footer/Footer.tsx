import { useState } from 'react';
import './Footer.scss'

function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer className="Footer">
            <span className='Footer_Copyright' >ТБ Сочи ©️ {currentYear}</span>
        </footer>
    )
}

export default Footer
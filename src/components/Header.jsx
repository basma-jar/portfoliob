import React from 'react';
import img from '../img/img.jpg';
const Header = () => {
    return (
        <section style={{ backgroundColor: '#eee8ff' }}>
            <header className="header">
                <img src={img} alt="profil picture" className="rounded-circle mt-3 me-3" style={{ width: 120, height: 150 }} />
                <h1>Basma Jarmouni</h1>
                <h2>ÉLÈVE INGÉNIEUR</h2>           
            </header>

<br/>
        </section>
    );
}

export default Header;
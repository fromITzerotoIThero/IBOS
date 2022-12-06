import React from 'react';

import './Header.css'; 

function Header() {

    return (
        <section className="header">
            <a href="#" className="navbar-entry">Welcome</a>
            <a href="#" className="navbar-entry">Domains</a>
            <hr className="header__separator"/>
        </section>
    )

}

export default Header;
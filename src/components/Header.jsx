import React from 'react';

function Header(props) {
    return (
        <header>
            <div className="welcome">
                <img className="logo" src="/img/logo.png" alt="Logo" />
                <h1>Menüplaner</h1>
            </div>
        </header>
    );
}

export default Header;
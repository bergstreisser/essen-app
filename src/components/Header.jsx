import React from 'react';

function Header(plan) {

    const onClickBurger = () => {
        alert('Hier wird der Wochenplan angezeigt...');
    }

    return (
        <header>
            <div className="welcome">
                <img onClick={onClickBurger} className="logo" src="/img/logo.png" alt="Logo" />
                <h1>Menü-planer</h1>
            </div>
        </header>
    );
}

export default Header;
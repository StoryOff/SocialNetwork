import React from 'react';
import c from './Header.module.css';

function Header() {
    return (
        <header className={c.header}>
            <img src='https://assets-eu-01.kc-usercontent.com/296d8d4d-1c46-01bf-48d9-7c150d2fc3b5/b58fde53-59b5-482b-9f11-431df1758e0c/logo_better.png' />
        </header>
    );
}

export default Header

import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">
                    <img src="piktogramLogo.png" alt="logo" />
                </a>
            </div>
            <div className="buttons">
                <h1>Piktogram App</h1>
                
            </div>
        </header >
    );
}

export default Header;
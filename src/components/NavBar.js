import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Mi Tienda</h1>
            </div>
            <div className="links">
                <a href="#home">Inicio</a>
                <a href="#products">Productos</a>
                <a href="#about">Nosotros</a>
            </div>
            <div className="cart">
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;

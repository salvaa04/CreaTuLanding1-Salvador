import React, { useEffect, useState } from 'react';
import productos from '../assets/json/productos.json';

const ItemListContainer = ({ welcomeMessage }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(productos);
    }, []);

    return (
        <div>
            <h2>{welcomeMessage}</h2>
            <div className="products">
                {items.map((item) => (
                    <div key={item.id} className="product">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;

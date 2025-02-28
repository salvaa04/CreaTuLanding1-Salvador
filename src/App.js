import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer welcomeMessage="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Carrito from './components/Carrito';
import Header from './components/Header';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [listaDeCompra, setListaDeCompra] = useState([]);
  const [carrito, setCarrito] = useState(0);

  const agregarAlCarrito = () => {
    if (!producto || !precio) return;
    setListaDeCompra([...listaDeCompra, `${producto} - $${precio}`]);
    setCarrito(carrito + parseFloat(precio));
    setProducto('');
    setPrecio('');
  };

  return (
    <div className="App">
      <Header nombre={nombre} />
      <input
        type="text"
        placeholder="Escribí tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <hr />
      <input
        type="text"
        placeholder="Nombre del producto"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <button onClick={agregarAlCarrito}>Agregar al carrito</button>

      <Carrito carrito={carrito} listaDeCompra={listaDeCompra} />
    </div>
  );
}

export default App;

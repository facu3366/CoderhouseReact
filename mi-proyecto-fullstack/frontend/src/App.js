import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Carrito from './components/Carrito';

function App() {
  const [nombre, setNombre] = useState('');
  const [carrito, setCarrito] = useState(1500);
  const [listaDeCompra, setListaDeCompra] = useState(["Yerba", "Fideos", "Helado"]);

  const manejarCambio = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div className="App">
      <Header nombre={nombre} />
      <input
        type="text"
        placeholder="Escribí tu nombre"
        value={nombre}
        onChange={manejarCambio}
      />
      <Carrito carrito={carrito} listaDeCompra={listaDeCompra} />
    </div>
  );
}

export default App;

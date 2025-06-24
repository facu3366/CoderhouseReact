import React from 'react';

function Header({ nombre }) {
  return (
    <header>
      <h1>Bienvenido, {nombre ? nombre : "invitado"} 👋</h1>
    </header>
  );
}

export default Header;

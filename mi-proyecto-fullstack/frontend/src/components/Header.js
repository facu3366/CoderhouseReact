function Header({ nombre }) {
  return (
    <header>
      <h1>Bienvenido, {nombre || "invitado"} 👋</h1>
    </header>
  );
}

export default Header;

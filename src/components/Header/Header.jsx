import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo_text" onClick={() => window.location.reload()}>
        CURON $
      </h1>
    </header>
  );
};

export default Header;

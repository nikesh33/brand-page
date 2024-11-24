function Navigation() {
  return (
    <div className="App">
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
            <ul>
              <li><a href="#">MENU</a></li>
              <li><a href="#">LOCATION</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
        <button>Login</button>
      </nav>
    </div>
  );
}

export default Navigation;

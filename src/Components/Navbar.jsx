const Navbar = () => {
  return (
    <>
      <nav className="navbar !bg-green-600">
        <h1>The Dojo Blog</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

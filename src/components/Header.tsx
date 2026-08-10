export const Header = () => {
  return (
    <header class="header">
      <div class="container header-nav">
        <a href="/" class="logo">AppLogo</a>
        <nav>
          <ul class="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/admin">Admin</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
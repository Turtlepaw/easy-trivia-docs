import '../scss/header.scss';
import NavDesktop from './NavDesktop';
import NavMobileToggle from './NavMobileToggle';

function Header() {
  return (
    <header>
      <h1>
        EasyTrivia
      </h1>

      <NavDesktop />
      <NavMobileToggle />
    </header>
  );
}

export default Header;
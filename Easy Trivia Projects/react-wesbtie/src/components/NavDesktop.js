import '../scss/navDesktop.scss';

function NavDesktop() {
  return (
    <nav id="nav-desktop">
      <ul>
        <li>
          <a href="#">
            <button>
              Install
            </button>
          </a>
        </li>

        <li>
          <a href="#">
            <button>
              Documentation
            </button>
          </a>
        </li>

        <li>
          <a href="#">
            <button>
              discord-trivia
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavDesktop;
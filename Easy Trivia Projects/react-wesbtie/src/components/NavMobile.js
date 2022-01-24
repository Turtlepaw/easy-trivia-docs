import $ from 'jquery';
import '../scss/navMobile.scss';

function NavMobile() {
  function closeNav() {
    $('#nav-mobile')
      .css('right', '-300px');
    $('#nav-mobile-wrapper')
      .css('display', 'none');
  }

  return (
    <>
      <div id="nav-mobile-wrapper" />
      <nav id="nav-mobile">
        <div id="nav-mobile-header">
          <h1>
            Navigation
          </h1>
          <button onClick={closeNav}>
            X
          </button>
        </div>

        <ul>
          <li>
            <button>
              <a href="#">
                Install
              </a>
            </button>
          </li>

          <li>
            <button>
              <a href="#">
                Documentation
              </a>
            </button>
          </li>

          <li>
            <button>
              <a href="#">
                discord-trivia
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavMobile;
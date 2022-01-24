import $ from 'jquery';
import '../scss/navMobileToggle.scss';
import { ReactComponent as NavMobileIcon } from '../assets/navMobileIcon.svg';

function NavMobileToggle() {
  function openNav() {
    $('#nav-mobile')
      .css('right', 0);
    $('#nav-mobile-wrapper')
      .css('display', 'flex');
  }

  return (
    <button 
      id="nav-mobile-toggle"
      onClick={openNav}>
      <NavMobileIcon />
    </button>
  );
}

export default NavMobileToggle;
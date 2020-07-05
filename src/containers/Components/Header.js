import React from "react";
import notification from '../../images/ic-notifications.svg';
import profilePic from '../../images/profile-pic.png';
import ArrowDown from '../../images/icn-arrow-drop-down.svg';
import burgerMenu from '../../images/open-menu.svg';
import user from '../../images/icons8-male-user-96.png';
const handleCloseMenu = (event) => {
  document.querySelector('.sidebar').classList.add('open');
  document.querySelector('.mainContainer').classList.add('open');
  document.querySelector('.App').classList.add('menuOpened');
  document.querySelector('.burgerIcon').classList.add('hide');
}
const Header = () => {
  return(
    <header>
      <div className="paageTtitle"> <span className="burgerIcon" onClick={handleCloseMenu}><img src={burgerMenu}/></span>News</div>
      <div className="headerRight">
        <a className="userMobile"><img src={user} /></a>
        <div className="notification">
          <img src={notification} />
          <span>2</span>
        </div>
        <div className="user">
        <img src={profilePic} />
        <span> <img src={ArrowDown} /></span>
        </div>
      </div>
    </header>
  );
};

export default Header;

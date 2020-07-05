import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import closeMenu from '../../images/ic-external-link.svg';
import userEmail from '../../images/toggleArrow.png';
import Menu1 from '../../images/ic-chrome-reader-mode.svg';
import Menu2 from '../../images/ic-collect-reviews-2.svg';
import Menu3 from '../../images/ic-manage-reviews.svg';
import Menu4 from '../../images/ic-show-reviews.svg';
import Menu5 from '../../images/ic-extension.svg';
import Menu6 from '../../images/ic-pie-chart.svg';
import Menu7 from '../../images/ic-freetime.svg';
import Menu8 from '../../images/ic-settings.svg';
import Menu9 from '../../images/ic-labs.svg';
import arrowRight from '../../images/ic-chevron-right.svg';
import Support from '../../images/ic-help-black.svg';
const Sidebar = () => {
  const handleMenuToggle = (event) => {
     event.preventDefault();
     document.querySelector('.sidebar').classList.remove('open');
     document.querySelector('.mainContainer').classList.remove('open');
     document.querySelector('.App').classList.remove('menuOpened');
     document.querySelector('.burgerIcon').classList.remove('hide');

  }
    return (
      <div className="sidebar">
          <div className="sidebatTop">
            <img className="logo" src={Logo} />
            <a className="closeMenu"  onClick={handleMenuToggle}><img src={closeMenu} /></a>
          </div>
          <div className="userEmail">
            <span>admin@usytech.com</span>
            <img src={userEmail} />
          </div>
         <ul>
          <li className="active"><Link to="/">News<img className="menuIcon" src={Menu1}/></Link></li>
          <li><a>Invitations <img className="menuIcon" src={Menu2}/>  <img className="arrowRight" src={arrowRight}/></a></li>
          <li><a>Reviews <img className="menuIcon" src={Menu3}/>  <img className="arrowRight" src={arrowRight}/></a></li>
          <li><a>Show reviews <img className="menuIcon" src={Menu4}/>  <img className="arrowRight" src={arrowRight}/></a></li>
          <li><a>Apps & Integrations <img className="menuIcon" src={Menu5}/>  <img className="arrowRight" src={arrowRight}/></a></li>
          <li><a>Analytics <img className="menuIcon" src={Menu6}/></a>  <img className="arrowRight" src={arrowRight}/></li>
          <li><a>Tips and Ideas <img className="menuIcon" src={Menu7}/></a></li>
          <li><a>Settings <img className="menuIcon" src={Menu8}/></a>  <img className="arrowRight" src={arrowRight}/></li>
          <li><a>Labs <img className="menuIcon" src={Menu9}/></a>  <img className="arrowRight" src={arrowRight}/></li>
          
      </ul>

      <div className="sidebarFooter">
        <span><img src={Support}/>Support</span>
        <a className="closeMenu" onClick={handleMenuToggle}><img src={closeMenu}/></a>
      </div>
      </div>
     
    )
};

export default Sidebar;
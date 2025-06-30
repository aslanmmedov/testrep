import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import icon from "../../assets/icon.avif"
import { useTranslation } from 'react-i18next';
function Navbar() {

  const { t, i18n } = useTranslation();
  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <div className='navbarr'>
      <h2>  POS(Point of Sales) v3.0</h2>
      <div className="navbar-right">
        <select onChange={(e)=>handleLanguage(e.target.value)}>
          <option value="az">az</option>
           <option value="en">en</option>
        </select>
        <span className='time'>11 : 13 : 31 AM</span>
        <span><IoIosNotifications /></span>
        <div className="user-info">
          <span className='user-name'>Admin</span>
     
            <img src={icon} alt="user avatar" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
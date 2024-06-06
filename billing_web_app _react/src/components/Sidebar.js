import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiShoppingBag } from 'react-icons/fi';
import { GoPencil } from 'react-icons/go';
import { BsTags } from 'react-icons/bs';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { LuUsers } from 'react-icons/lu';
import { TbPaperBag } from 'react-icons/tb';
import '../Styles/Sidebar.css';

const Sidebar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setIsSubmenuOpen(prevState => !prevState);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <div
          className="menu-item active"
          id="active"
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={faMoneyBill} className="money" />
          <span id="sales">Sales</span>
          <RiArrowDropDownLine className="dropdown" />
        </div>
        {isSubmenuOpen && (
          <div className="submenu">
            <div className="submenu-item">Product</div>
            <div className="submenu-item">Service</div>
          </div>
        )}
        <div className="menu-item"><FiShoppingBag />Purchase</div>
        <div className="menu-item"><GoPencil />Quotations</div>
        <div className="menu-item"><BsTags />Expenses</div>
        <div className="menu-item"><AiOutlineCloudUpload />Import Bank statement</div>
        <div className="menu-item"><FiUser />Customer</div>
        <div className="menu-item"><LuUsers />People</div>
        <div className="menu-item"><TbPaperBag />Product</div>
      </div>
      <div className="sidebar-promo">
        <p>More templates, more flexibility, and premium support!</p>
        <button className="promo-button">Upgrade Now 🚀</button>
      </div>
      <div className="sidebar-profile">
        <img src="https://via.placeholder.com/40" alt="Profile" className="profile-pic" />
        <div className="profile-details">
          <span className="profile-name">Olivia Rhye</span>
          <span className="profile-email">olivia@untitledui.com</span>
        </div>
        <button className="profile-dropdown"><RiArrowDropDownLine className="dropdown" /></button>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react'
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-logo" className="header-logo" />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
            <i className="fi fi-rr-marker absolute-center location-icon"></i>
            <div>Pune</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
          <i class="fi fi-rr-search absolute-center search-icon"></i>
          <input placeholder="Search for restaurant, cuisine or a dish" className="search-input" />
          </div>
        </div>
        <div className="profile-wrapper">
          <img src="data:image/png;base64,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"
          alt='profile' className="header-profile-image" /> 
          <span className='header-user-name'>Onkar</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Header;
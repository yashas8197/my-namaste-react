import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 * Footer
 *  - CopyRight
 *  - Links
 *  - Address
 *  - Contact
 *
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturentCard = ({ resName, cuisines, starRating }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg"
      />
      <h3>{resName}</h3>
      <h4>{cuisines}</h4>
      <h4>{starRating}</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="res-container">
        <ResturentCard
          resName="Meghana Foods"
          cuisines="Biriyani , North Indian , Asian"
          starRating="4.4"
        />
        <ResturentCard resName="KFC" cuisines="Burgers" starRating="4.3" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(<AppLayout />);

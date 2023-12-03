// Navbar.js
import React from "react";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  // Placeholder data for the user
  const user = {
    name: "Nabila A.",
    email: "nabila@example.com",
    image: "user.jpg", // Path to user image
  };

  // Function to handle search bar input
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    // Add your search functionality here
    console.log("Search term:", searchTerm);
  };

  // Placeholder function for handling mail icon click
  const handleMailClick = () => {
    // Add your mail icon click functionality here
    console.log("Mail icon clicked");
  };

  // Placeholder function for handling bell icon click
  const handleBellClick = () => {
    // Add your bell icon click functionality here
    console.log("Bell icon clicked");
  };

  // Placeholder function for handling setting icon click
  const handleSettingClick = () => {
    // Add your setting icon click functionality here
    console.log("Setting icon clicked");
  };

  return (
    <div className="navbar">
      <div className="title">Student Details</div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search here..."
          onChange={handleSearch}
        />
      </div>

      <div className="icons">
        <img
          className="icon"
          alt="Mail"
          src="mail.svg" // Replace with the path to your mail icon
          onClick={handleMailClick}
        />
        <img
          className="icon"
          alt="Bell"
          src="bell.svg" // Replace with the path to your bell icon
          onClick={handleBellClick}
        />
        <img
          className="icon"
          alt="Setting"
          src="setting.svg" // Replace with the path to your setting icon
          onClick={handleSettingClick}
        />
      </div>

      <div className="user">
        <div className="name">{user.name}</div>
        <img className="user-image" alt="User" src={user.image} />
      </div>
    </div>
  );
};

export default Navbar;

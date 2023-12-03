// Boxss.js

import React from "react";
import "./Boxss.css"; // Import your CSS file

const Boxss = () => {
  // Function to handle the "View More" button click
  const handleViewMoreClick = () => {
    // You can replace this with your desired functionality
    alert("View More button clicked!");
  };

  return (
    <div className="boxss">
      <div className="schedule">
        <div className="group">
          <div className="text-wrapper-a">Schedule Details</div>
          <p className="div-1">Thursday, 10th April , 2021</p>
        </div>
      </div>

      <div className="box-a">
        <div className="status-color" />
      </div>

      <div className="box-b">
        <div className="profile-picture" />
      </div>

      <div className="details">
        <div className="text-wrapper-b">Algorithm</div>
        <div className="div-2">Basic Algorithm</div>
        <div className="date">
          <img className="img-1" alt="Calendar" src="calendar.svg" />
          <div className="text-wrapper-c">March 20, 2021</div>
        </div>
        <div className="hours">
          <img className="img-1" alt="Clock" src="clock.svg" />
          <div className="text-wrapper-c">09.00 - 10.00 AM</div>
        </div>
      </div>
      <div className="box-a">
        <div className="status-color" />
      </div>

      <div className="box-b">
        <div className="profile-picture" />
      </div>

      <div className="details">
        <div className="text-wrapper-b">Algorithm</div>
        <div className="div-2">Basic Algorithm</div>
        <div className="date">
          <img className="img-1" alt="Calendar" src="calendar.svg" />
          <div className="text-wrapper-c">March 20, 2021</div>
        </div>
        <div className="hours">
          <img className="img-1" alt="Clock" src="clock.svg" />
          <div className="text-wrapper-c">09.00 - 10.00 AM</div>
        </div>
      </div>
      <div className="box-a">
        <div className="status-color" />
      </div>

      <div className="box-b">
        <div className="profile-picture" />
      </div>

      <div className="details">
        <div className="text-wrapper-b">Algorithm</div>
        <div className="div-2">Basic Algorithm</div>
        <div className="date">
          <img className="img-1" alt="Calendar" src="calendar.svg" />
          <div className="text-wrapper-c">March 20, 2021</div>
        </div>
        <div className="hours">
          <img className="img-1" alt="Clock" src="clock.svg" />
          <div className="text-wrapper-c">09.00 - 10.00 AM</div>
        </div>
      </div>
      <div className="box-a">
        <div className="status-color" />
      </div>

      <div className="box-b">
        <div className="profile-picture" />
      </div>

      <div className="details">
        <div className="text-wrapper-b">Algorithm</div>
        <div className="div-2">Basic Algorithm</div>
        <div className="date">
          <img className="img-1" alt="Calendar" src="calendar.svg" />
          <div className="text-wrapper-c">March 20, 2021</div>
        </div>
        <div className="hours">
          <img className="img-1" alt="Clock" src="clock.svg" />
          <div className="text-wrapper-c">09.00 - 10.00 AM</div>
        </div>
      </div>

      <button className="btn-viewmore" onClick={handleViewMoreClick}>
        <div className="overlap-group">
          <div className="background" />
          <div className="label">
            <div className="text-wrapper-d">View More</div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Boxss;

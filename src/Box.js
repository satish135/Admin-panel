// StudentDetailsContainer.js
import React from 'react';
import './Box.css'; // Import your CSS file for styling

const Box = () => {
  return (
    <div className="box">
      <div className="student-profile">
        <div className="overlap-group">
          <div className="overlap">
            <img className="dots" alt="Dots" src="dots.svg" />
            <div className="overlap">
              <div className="cover" />
              <div className="avatar" />
            </div>
          </div>
          <div className="title-1">Samanta William</div>
          <div className="text-wrapper">Student</div>
          <div className="contact">
            <div className="parent">
              <div className="email">
                <div className="div">
                  <div className="img-wrapper">
                    <img className="img" alt="User" src="user.svg" />
                  </div>
                  <div className="text-wrapper-2">Justin Hope</div>
                </div>
              </div>
              <div className="text-wrapper-3">Parents:</div>
            </div>
            <div className="address">
              <div className="location">
                <div className="img-wrapper">
                  <img className="img" alt="Location" src="location.svg" />
                </div>
                <div className="text-wrapper-2">Bangalore,India</div>
              </div>
              <div className="text-wrapper-3">Address:</div>
            </div>
            <div className="phone">
              <div className="phone-wrapper">
                <div className="div">
                  <div className="img-wrapper">
                    <img className="img" alt="Call" src="call.svg" />
                  </div>
                  <div className="text-wrapper-2">+12 345 6789 0</div>
                </div>
              </div>
              <div className="text-wrapper-3">Phone:</div>
            </div>
            <div className="email-2">
              <div className="mail-wrapper">
                <div className="div">
                  <div className="img-wrapper">
                    <img className="img" alt="Email" src="email.svg" />
                  </div>
                  <input className="hope-mail-com" id="input-1" placeholder="Hope@mail.com" type="email" />
                </div>
              </div>
              <label className="text-wrapper-3" htmlFor="input-1">
                Email:
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Box;
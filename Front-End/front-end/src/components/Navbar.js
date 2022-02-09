import React from 'react';

function Navbar(){
    return(
        <div className="header">
        <ul>
          <li>
            <img className="logo" src="logo.png" alt="" />
          </li>
          <li>
            <div className="nav-item">
              <div className="left-item">
                <span style={{fontStyle: 'italic', color: 'rgb(133, 138, 138)'}} className="style03">Handicrafted by</span>
                <span style={{color: 'rgb(92, 92, 92)'}} className="style03">Jim HLS</span>
              </div>
              <div className="right-item">
                <div className="avt">
                  <img className="avt-img" src="huyhoang.jpg" alt="" srcSet />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
)}

export default Navbar;
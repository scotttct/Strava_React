import React from 'react'
import {  NavLink, withRouter } from 'react-router-dom'

const handleLogout = () => {
  window.location = `POST https://www.strava.com/oauth/deauthorize`;
};

const Navbar = (props) => {
    return (
        <>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <NavLink class="navbar-brand" to="/yourdistance">ST-Activities</NavLink>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <NavLink class="nav-link active" aria-current="page" to="/yourdistance">Home</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink class="nav-link" to="#">graphs</NavLink>
                  </li>
                </ul>
                <ul class=' '>
                  <li class="nav-item d-flex text-white bg-primary shadow hover">
                  <button class="btn btn-secondary col-md-2 pr-5 "  onClick={handleLogout}>Connect with Strava</button>
                  </li>
                </ul> 
              </div>
            </div>
          </nav>
          </div>
        </>
    )
}

export default withRouter(Navbar) 
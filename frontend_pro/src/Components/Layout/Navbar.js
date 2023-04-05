import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="Services/Add/">ADD</NavLink>
        <NavLink className="nav-link active" to="Services/Show/">SHOW</NavLink>
        <NavLink className="nav-link active" to="#">UPDATE</NavLink>
        <NavLink className="nav-link active" to="#" tabindex="-1" aria-disabled="true">DELETE</NavLink>
      </div>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
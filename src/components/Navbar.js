import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
  let {val}=this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsLonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/International">International</Link>
        </li>       
        <li className="nav-item">
          <Link className="nav-link" to="/Sports">Sports</Link>
        </li>       
        <li className="nav-item">
          <Link className="nav-link" to="/Election">Election 2079</Link>
        </li>       
        <li className="nav-item">
          <Link className="nav-link" to="/Health">Health</Link>
        </li>       
        <li className="nav-item">
          <Link className="nav-link" to="/Business">Business</Link>
        </li>       
      </ul>
      <div className="d-flex" role="search">
        <input id='searching' className="form-control me-2" type="search" placeholder="Search News" aria-label="Search"/>
         <Link className="btn btnSearch btn-outline-success"  type="submit" to={`/${val}`}>Search</Link>
      </div>
    </div>

  </div>
</nav>
      </div>
    )
  }
}

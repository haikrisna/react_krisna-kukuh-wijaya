import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Pastikan untuk mengimpor file 
import NavImage from "../src/assets/navimage.png";
import CompanyImage from "../src/assets/company.png";

export default function WelcomeComponent() {
  return (
    <div>
      {/* Header */}
      <header className="bg-light">
        <nav className="navbar navbar-expand-lg navbar-light container">
          <a className="navbar-brand" href="#">
            <img src={NavImage} alt="Logo" className="img-fluid" style={{ height: '40px' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Welcome Section */}
      <div className="welcome-section text-center mt-5">
        <h1 className="display-4">Welcome to Our Company!</h1>
        <p className="lead">
          Discover amazing features that will enhance your experience.
        </p>
        <img
          src= {CompanyImage}
          alt="Welcome"
          className="img-fluid rounded mb-4"
          style={{ height: '400px' }}
        />
        <br/>
        <button className="btn btn-primary btn-lg">Get Started</button>
      </div>
    </div>
  );
}

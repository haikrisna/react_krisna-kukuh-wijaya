import React from 'react';
import AboutUs from "../src/assets/aboutus.png"
export default function AboutComponent() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mb-4">About Us</h2>
          
          <img 
            src= {AboutUs} 
            alt="About Us" 
            className="img-fluid rounded mb-4"
          />
          
          <p className="lead">
          We are a team dedicated to providing the best solutions for your technology needs. With years of experience in software development, we are ready to help you achieve your business goals with cutting-edge technology.
          </p>
          
          <p className="text-muted">
          Our team consists of individuals who are experts in their respective fields, from front-end and back-end development, to design and project management. We believe that good collaboration leads to great solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

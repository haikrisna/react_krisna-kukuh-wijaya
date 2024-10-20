import React from 'react';

export default function FooterComponent() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Section for Website Name */}
          <div className="col-md-4">
            <h5>Logitech</h5>
            <p>Connecting the World through Innovation</p>
          </div>

          {/* Section for Contact Information */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              <strong>Phone:</strong> +123 456 7890<br />
              <strong>Address:</strong> 123 Main Street, Cityville
            </p>
          </div>

          {/* Section for Social Media Links */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.linkedin.com/company/logitech" className="text-white">Facebook</a></li>
              <li><a href="https://x.com/Logitech" className="text-white">X</a></li>
              <li><a href="https://www.instagram.com/logitech" className="text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <p>&copy; 2024 Logitech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

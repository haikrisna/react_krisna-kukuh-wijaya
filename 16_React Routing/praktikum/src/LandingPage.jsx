import React from 'react'
import { Link } from 'react-router-dom';
import dots from '../src/assets/dots.png'
import logo from '../src/assets/logo.png'

export default function LandingPage() {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="../praktikum/style.css" />
        <title>Document</title>
        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">
              <p>Simple Header</p>
            </a>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section
          className="hero"
          style={{ backgroundColor: "#37517E", width: 1440, height: 740 }}
        >
          <div
            className="content"
            style={{
              color: "white",
              paddingTop: 100,
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {/* Bagian Teks */}
            <div className="text" style={{ paddingLeft: 94, flex: 1 }}>
              <h1
                style={{
                  paddingBottom: 0,
                  marginBottom: 0,
                  fontSize: 48,
                  fontWeight: "bold",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                Better Solutions For Your <br /> Business
              </h1>
              <p
                style={{
                  paddingTop: 0,
                  marginTop: 0,
                  fontSize: 23,
                  fontWeight: 500,
                  opacity: "0.6",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                We are team of talented designers making websites with
                <br /> Bootstrap
              </p>
              {/* Tombol */}
              <div style={{ marginTop: 57 }}>
                <Link to="/create-product">
                <button
                  style={{
                    fontFamily: "Jost, sans-serif",
                    padding: "10px 30px",
                    fontSize: 18,
                    backgroundColor: "#47B2E4",
                    color: "white",
                    border: "2px solid #37517E",
                    borderRadius: 50,
                    cursor: "pointer",
                  }}
                >
                  Create Product
                </button>
                </Link>
                <button
                  style={{
                    fontFamily: "Jost, sans-serif",
                    padding: "10px 30px",
                    fontSize: 18,
                    backgroundColor: "#37517E",
                    color: "white",
                    border: "none",
                    borderRadius: 50,
                    cursor: "pointer",
                    marginRight: 15,
                  }}
                >
                  Watch Video
                </button>
              </div>
            </div>
            {/* Bagian Gambar */}
            <div
              className="logo"
              style={{ flex: 1, paddingRight: 83, paddingLeft: 50 }}
            >
              <img
                src= {logo}
                alt="hero image"
                style={{ width: 636, height: 527 }}
              />
            </div>
          </div>
        </section>
        <div className="footer">
          <div
            className="footer-join"
            style={{ width: 1441, height: 239, backgroundColor: "#F3F5FA" }}
          >
            <div className="text" style={{ paddingTop: 40 }}>
              <h1
                style={{
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: 24,
                  alignItems: "center",
                  display: "flex",
                  color: "#37517E",
                }}
              >
                Join Our Newsletter
              </h1>
              <p
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: 16,
                  color: "#444444",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
            </div>
            <div
              className="subscribe"
              style={{
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: 24,
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                className="input-group mb-5 w-25"
                style={{
                  borderRadius: 50,
                  display: "flex",
                  overflow: "hidden",
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  style={{ borderRadius: 50, marginRight: 10 }}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  style={{
                    fontFamily: "Open Sans",
                    borderRadius: 50,
                    backgroundColor: "#47B2E4",
                    color: "white",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div
            className="footer-contact"
            style={{ width: 1440, height: 340, backgroundColor: "#ffffff" }}
          >
            <div
              className="isikontak"
              style={{
                paddingTop: 60,
                paddingLeft: 80,
                paddingRight: 82,
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                fontFamily: "Jost",
              }}
            >
              <div className="arsha">
                <h1
                  style={{ fontSize: 30, fontWeight: "bold", color: "#37517E" }}
                >
                  ARSHA
                </h1>
                <p style={{ color: "#777777" }}>A108 Adam Street </p>
                <p style={{ color: "#777777" }}> New York, NY 535022</p>
                <p style={{ color: "#777777" }}>United States</p>
                <p style={{ color: "#777777" }}>
                  <b>Phone:</b> +1 5589 55488 55
                </p>
                <p style={{ color: "#777777" }}>
                  <b>Email:</b> info@example.com
                </p>
              </div>
              <div className="useful-link">
                <h1
                  style={{ fontSize: 30, fontWeight: "bold", color: "#37517E" }}
                >
                  Useful Links
                </h1>
                <p style={{ color: "#777777" }}>Home</p>
                <p style={{ color: "#777777" }}> About us</p>
                <p style={{ color: "#777777" }}>Services</p>
                <p style={{ color: "#777777" }}>Terms of service</p>
                <p style={{ color: "#777777" }}>Privacy policy</p>
              </div>
              <div className="service">
                <h1
                  style={{ fontSize: 30, fontWeight: "bold", color: "#37517E" }}
                >
                  Our Services
                </h1>
                <p style={{ color: "#777777" }}>Web Design</p>
                <p style={{ color: "#777777" }}>Web Development</p>
                <p style={{ color: "#777777" }}>Product Management</p>
                <p style={{ color: "#777777" }}>Marketing</p>
                <p style={{ color: "#777777" }}>Graphic Design</p>
              </div>
              <div className="social-network">
                <h1
                  style={{ fontSize: 30, fontWeight: "bold", color: "#37517E" }}
                >
                  Our Social Networks
                </h1>
                <p style={{ color: "#777777" }}>
                  {" "}
                  Cras fermentum odio eu feugiat lide par <br /> naso tierra
                  videa magna derita valies
                </p>
                <img src= {dots} alt="" />
              </div>
            </div>
          </div>
          <div
            className="copyright"
            style={{
              width: 1440,
              height: 60,
              backgroundColor: "#37517E",
              paddingLeft: 90,
              paddingTop: 16,
              display: "flex",
            }}
          >
            <p
              style={{
                fontWeight: "lighter",
                color: "white",
                fontFamily: '"Open Sans", sans-serif',
              }}
            >
              © Copyright <b>Arsha</b>. All Rights Reserved
            </p>
            <p
              style={{
                fontWeight: "normal",
                color: "white",
                paddingRight: 80,
                marginLeft: "auto",
                fontFamily: '"Open Sans", sans-serif',
              }}
            >
              Designed by{" "}
              <span style={{ fontWeight: "lighter" }}>BootstrapMade</span>
            </p>
          </div>
        </div>
      </>
    </div>
  )
}

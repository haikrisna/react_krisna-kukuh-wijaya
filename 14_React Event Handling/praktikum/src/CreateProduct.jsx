import React, { useState } from "react";
import LogoBootstrap from "../src/assets/bs_image.png";

export default function CreateProduct() {
  const [randomNumber, setRandomNumber] = useState(null);

  const handleClick = () => {
    const random = Math.floor(Math.random() * 100);
    console.log("Random Number:", random);
    setRandomNumber(random);
  };

  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account",
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };

  const [productName, setProductName] = useState("");
  const [error, setError] = useState("");

  const handleProductNameChange = (e) => {
    const value = e.target.value;

    if (!value) {
      setError("Please enter a valid product name.");
    } else if (value.length > 25) {
      setError("Product Name must not exceed 25 characters.");
    } else if (value.length > 10) {
      setError("Product Name exceeds 10 characters.");
    } else {
      setError("");
    }

    setProductName(value);
  };

  const handleReload = (e) => {
    e.preventDefault();

    if (!productName) {
      setError("Please enter a valid product name.");
      return;
    }

    console.log("Product Name:", productName);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-white shadow-sm">
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

      <section className="form-section" style={{ paddingTop: 58 }}>
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="d-flex justify-content-center mb-4">
              <img
                src={LogoBootstrap}
                alt="Bootstrap Logo"
                className="img-fluid"
                style={{ maxWidth: 100 }}
              />
            </div>
            <div className="d-flex justify-content-center mb-4">
              <h1 className="text-center" style={{ fontSize: 30 }}>
                Create Product
              </h1>
            </div>
            <div className="d-flex justify-content-center mb-4">
              <p
                className="text-center"
                style={{ fontWeight: "lighter", fontSize: "medium" }}
              >
                {article.description.en}
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <form>
                <div className="mb-3">
                  <h1 className="detail-product" style={{ fontSize: 24 }}>
                    Detail Product
                  </h1>
                </div>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product name
                  </label>
                  <input
                    onChange={handleProductNameChange}
                    type="text"
                    className="form-control"
                    id="productName"
                    name="productName"
                    style={{ width: 282, height: 36 }}
                    required
                    minLength={6}
                    autoComplete="on"
                  />
                  {error && <div className="alert alert-danger">{error}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="productCategory" className="form-label">
                    Product category
                  </label>
                  <select
                    className="form-select"
                    id="productCategory"
                    name="productCategory"
                    style={{ width: 224, height: 36 }}
                    autoComplete="on"
                  >
                    <option value="" disabled selected>
                      Select category
                    </option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="productImage" className="form-label">
                    Image of product
                  </label>
                  <br />
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio1"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradio1"
                    >
                      Choose File
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio2"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradio2"
                    >
                      No file Choosen
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="productFreshness">Product Freshness</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Brand New
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Second Hand
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      Refurbished
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">
                    Product description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productDescription"
                    name="productDescription"
                    style={{ width: 603, height: 116 }}
                    required
                    minLength={6}
                    autoComplete="on"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Product Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productPrice"
                    name="productPrice"
                    placeholder=" $ 1"
                    style={{ width: 604, height: 36 }}
                    autoComplete="on"
                  />
                </div>

                {randomNumber !== null && (
                  <div className="alert alert-info mt-3">
                    Random Number: {randomNumber}
                  </div>
                )}

                <button
                  onClick={handleClick}
                  type="button"
                  className="btn btn-primary w-100"
                  style={{ marginTop: 122 }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

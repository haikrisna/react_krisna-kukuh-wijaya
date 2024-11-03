import React from "react";

export default function CreateProduct() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
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
                src=".//assets/bootstrap-logo.svg.png"
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
                Below is an example form built entirely with Bootstrap’s form
                controls. Each required form group has a <br /> validation state
                that can be triggered by attempting to submit the form without
                completing it.
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
                  <label htmlFor="name" className="form-label">
                    Product name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    style={{ width: 282, height: 36 }}
                    required=""
                    minLength={6}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Product cartegory
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    style={{ width: 224, height: 36 }}
                  >
                    <option selected="" />
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
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
                      defaultChecked=""
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
                  <label htmlFor="product-fresnesh">Product Fresnesh</label>
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
                      defaultChecked=""
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
                      id="flexRadioDefault2"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Refurbished
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    style={{ width: 603, height: 116 }}
                    required=""
                    minLength={6}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder=" $ 1"
                    style={{ width: 604, height: 36 }}
                  />
                </div>
                <button
                  type="submit"
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
    </>
  );
}

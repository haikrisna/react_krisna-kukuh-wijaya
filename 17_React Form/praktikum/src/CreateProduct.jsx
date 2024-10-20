import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function CreateProduct({ addProduct }) {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productFreshness, setProductFreshness] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [error, setError] = useState('');


  const validateProductName = (name) => /^[A-Za-z0-9 ]{3,50}$/.test(name);
  const validateProductCategory = (category) => /^[A-Za-z ]{3,50}$/.test(category);
  const validateProductFreshness = (freshness) => /^(Fresh|Used|Expired)$/.test(freshness);
  const validateProductPrice = (price) => /^[1-9]\d{0,8}$/.test(price); 
  const validateImage = (image) => image && ["image/jpeg", "image/png"].includes(image.type);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validateProductName(productName) &&
      validateProductCategory(productCategory) &&
      validateProductFreshness(productFreshness) &&
      validateProductPrice(productPrice) &&
      validateImage(productImage)
    ) {
      const newProduct = {
        name: productName,
        category: productCategory,
        freshness: productFreshness,
        price: productPrice,
        image: URL.createObjectURL(productImage),
      };
      addProduct(newProduct); // Memanggil fungsi dari App.jsx
      setError('');
    } else {
      setError('Please fill in valid details in all fields.');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Create Product</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4"> {/* Membuat form lebih kecil */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input
                type="text"
                id="productName"
                className={`form-control ${!validateProductName(productName) && 'is-invalid'}`}
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              {!validateProductName(productName) && <div className="invalid-feedback">Invalid product name (3-50 characters).</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="productCategory" className="form-label">Product Category</label>
              <input
                type="text"
                id="productCategory"
                className={`form-control ${!validateProductCategory(productCategory) && 'is-invalid'}`}
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
              />
              {!validateProductCategory(productCategory) && <div className="invalid-feedback">Invalid product category (3-50 characters).</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="productFreshness" className="form-label">Product Freshness</label>
              <select
                id="productFreshness"
                className={`form-select ${!validateProductFreshness(productFreshness) && 'is-invalid'}`}
                value={productFreshness}
                onChange={(e) => setProductFreshness(e.target.value)}
                required
              >
                <option value="">Select freshness</option>
                <option value="Fresh">Fresh</option>
                <option value="Used">Used</option>
                <option value="Expired">Expired</option>
              </select>
              {!validateProductFreshness(productFreshness) && <div className="invalid-feedback">Invalid product freshness.</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">Product Price</label>
              <input
                type="number"
                id="productPrice"
                className={`form-control ${!validateProductPrice(productPrice) && 'is-invalid'}`}
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
              {!validateProductPrice(productPrice) && <div className="invalid-feedback">Invalid product price (must be a positive number).</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">Product Image</label>
              <input
                type="file"
                id="productImage"
                className={`form-control ${!validateImage(productImage) && 'is-invalid'}`}
                onChange={(e) => setProductImage(e.target.files[0])}
                required
              />
              {!validateImage(productImage) && <div className="invalid-feedback">Invalid image (only JPG or PNG allowed).</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">Add Product</button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

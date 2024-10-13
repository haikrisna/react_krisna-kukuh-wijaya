import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AccountProduct() {
  const [productList, setProductList] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editProductData, setEditProductData] = useState({
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
  });

  const handleAddProduct = (newProduct) => {
    setProductList([...productList, newProduct]);
  };

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setProductList(productList.filter((product) => product.id !== selectedProduct.id));
    setShowDeleteModal(false);
    setSelectedProduct(null);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditProductData({
      productName: product.productName,
      productCategory: product.productCategory,
      productFreshness: product.productFreshness,
      productPrice: product.productPrice,
    });
    setShowEditModal(true);
  };

  const saveEdit = () => {
    setProductList(
      productList.map((product) =>
        product.id === selectedProduct.id
          ? { ...product, ...editProductData }
          : product
      )
    );
    setShowEditModal(false);
    setSelectedProduct(null);
  };

  function CreateAccount() {
    useEffect(() => {
      alert("Welcome");
    }, []);

    return (
      <div className="mb-4 text-center">
        <h1>Create Account Page</h1>
      </div>
    );
  }

  function CreateProduct({ onAddProduct }) {
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productFreshness, setProductFreshness] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      const newProduct = {
        id: uuidv4(),
        productName,
        productCategory,
        productFreshness,
        productPrice,
      };
      onAddProduct(newProduct);

      setProductName("");
      setProductCategory("");
      setProductFreshness("");
      setProductPrice("");
    };

    return (
      <div className="mb-4">
        <h3>Create Product Page</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Product Name</label>
              <input
                type="text"
                className="form-control"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Product Category</label>
              <input
                type="text"
                className="form-control"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Product Freshness</label>
              <select
                className="form-select"
                value={productFreshness}
                onChange={(e) => setProductFreshness(e.target.value)}
                required
              >
                <option value="">Select Freshness</option>
                <option value="Brand New">Brand New</option>
                <option value="Second Hand">Second Hand</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label>Product Price</label>
              <input
                type="number"
                className="form-control"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Add Product
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <CreateAccount />
      <CreateProduct onAddProduct={handleAddProduct} />
      <h2>List Product</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productPrice}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDeleteModal && (
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Confirmation</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this product?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Product</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label>Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editProductData.productName}
                      onChange={(e) =>
                        setEditProductData({
                          ...editProductData,
                          productName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label>Product Category</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editProductData.productCategory}
                      onChange={(e) =>
                        setEditProductData({
                          ...editProductData,
                          productCategory: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label>Product Freshness</label>
                    <select
                      className="form-select"
                      value={editProductData.productFreshness}
                      onChange={(e) =>
                        setEditProductData({
                          ...editProductData,
                          productFreshness: e.target.value,
                        })
                      }
                      required
                    >
                      <option value="Brand New">Brand New</option>
                      <option value="Second Hand">Second Hand</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label>Product Price</label>
                    <input
                      type="number"
                      className="form-control"
                      value={editProductData.productPrice}
                      onChange={(e) =>
                        setEditProductData({
                          ...editProductData,
                          productPrice: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={saveEdit}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

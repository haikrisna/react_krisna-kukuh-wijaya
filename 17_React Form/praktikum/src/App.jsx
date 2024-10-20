import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateProduct from './CreateProduct';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Management</h1>

      {/* Form Create Product */}
      <div className="mb-5">
        <CreateProduct addProduct={addProduct} />
      </div>

      {/* Product List Table */}
      <h2 className="text-center mb-4">Product List</h2>
      {products.length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Category</th>
              <th>Freshness</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.freshness}</td>
                <td>{product.price}</td>
                <td>
                  <img src={product.image} alt={product.name} width="100" className="img-fluid" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No products available. Please add some products!</p>
      )}
    </div>
  );
}

export default App;

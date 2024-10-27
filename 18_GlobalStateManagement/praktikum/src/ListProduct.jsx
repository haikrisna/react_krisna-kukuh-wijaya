import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "./redux/productSlice";

export default function ListProduct() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <h2>List Product</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.productName}</span>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            {/* Tambahkan tombol Edit di sini jika diperlukan */}
          </li>
        ))}
      </ul>
    </div>
  );
}

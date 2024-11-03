import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [user, setUser] = useState([]);
  const [inputUser, setInputUser] = useState({ Product: '', price: '', ProductType: '' });
  const [dataEdit, setDataEdit] = useState({ id: '', Product: '', price: '', ProductType: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const respond = await axios.get("https://6718a7e37fc4c5ff8f4a6ad0.mockapi.io/product");
      setUser(respond.data);
    } catch (error) {
      console.error("error dari exios", error);
    }
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://6718a7e37fc4c5ff8f4a6ad0.mockapi.io/product", inputUser);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setInputUser({ ...inputUser, [e.target.name]: e.target.value });
  };

  const handleDelete = async (idDariUser) => {
    try {
      await axios.delete(`https://6718a7e37fc4c5ff8f4a6ad0.mockapi.io/product/${idDariUser}`);
      fetchData();
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleChangeEdit = (e) => {
    setDataEdit({ ...dataEdit, [e.target.name]: e.target.value });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://6718a7e37fc4c5ff8f4a6ad0.mockapi.io/product/${dataEdit.id}`, {
        Product: dataEdit.Product,
        price: dataEdit.price,
        ProductType: dataEdit.ProductType,
      });
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-left mb-4">Create Product</h1>
      <form onSubmit={postData} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input name="Product" onChange={handleChange} type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Price</label>
          <input onChange={handleChange} name="price" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Type</label>
          <input onChange={handleChange} name="ProductType" type="text" className="form-control" required />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>

      <form onSubmit={handleEdit} className="mb-4">
        <h2>Edit Product</h2>
        <div className="mb-3">
          <label className="form-label">Product ID</label>
          <input onChange={handleChangeEdit} name="id" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Edit Name</label>
          <input onChange={handleChangeEdit} name="Product" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Price Edit Name</label>
          <input onChange={handleChangeEdit} name="price" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Type Edit</label>
          <input onChange={handleChangeEdit} name="ProductType" type="text" className="form-control" required />
        </div>
        <button className="btn btn-success">Submit Edit Data</button>
      </form>

      <div>
        <h2 className="text-left">Product List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Produk</th>
              <th>Harga USD</th>
              <th>Jenis Produk</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.Product}</td>
                <td>{data.price}</td>
                <td>{data.ProductType}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(data.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

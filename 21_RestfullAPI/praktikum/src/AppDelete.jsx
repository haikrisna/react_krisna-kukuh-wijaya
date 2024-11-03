import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  const [inputUser, setInputUser] = useState({
    Product: '',
    price: '',
  })
  useEffect(() => {
    console.log("use effect");
    fetchData()
  }, []);

  const fetchData = async () => {
    console.log("fetch data with arrow func");
    // axios di pasang pada function
    try {
      // berjalan diawal dan ketika berhasil akan diakhiri
      const respond = await axios.get("https://6718a7e37fc4c5ff8f4a6ad0.mockapi.io/product");
      console.log("respond dari try", respond.data);
      setUser(respond.data);
    } catch (error) {
      // akan berjalan jika try mengalami error
      console.error("error dari exios", error);
    }
  };
  const postData = async (e) => {
    e.preventDefault();
    console.log("data yang dikirimkan", inputUser);
    try {
      const response = await axios.post("https://6718a7e37fc4c5ff8f4a6ad0.mockapi.io/product", inputUser);
      // tambah logikan untuk menambah data ke useState
      console.log("response post ", response);
      fetchData();
      // window.location.reload()
    } catch (error) {
      console.error(error);
    }
  }
  const handleChange = (e) => {
    console.log("tamkap data", e.target.value);
    setInputUser(
      {
        ...inputUser,
        [e.target.name]: e.target.value,
      }
    );
  }
  console.log("inputUser", inputUser);
  const handleDelete = async (idDariUser) => {
    let id = idDariUser;
    console.log("id", id);
    try {
      const response = await axios.delete(`https://6718a7e37fc4c5ff8f4a6ad0.mockapi.io/product/${id}`)
      fetchData();
    } catch (error) {
      console.error("error", error)
    }
  }
  return (
    <>
      <h1>Axios</h1>
      <form onSubmit={postData}>
        <div>
          <label>Product Name</label>
          <input name="Product" onChange={handleChange} type="text" required></input>
        </div>
        <div>
          <label>Price Name</label>
          <input onChange={handleChange} name="price" type="text" required></input>
        </div>

        <button onClick={postData}>Post Data</button>
      </form>
      <p>{user.map((data, index) => (
        <>
          <p key={index}>{index} - {data.Product}</p>
          <p>{data.price}</p>
          <button style={{ backgroundColor: "red" }} onClick={() => handleDelete(data.id)}>Delete</button>
          <hr></hr>
        </>
      ))}</p>
    </>
  )
}

export default App

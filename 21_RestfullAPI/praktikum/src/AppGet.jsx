import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  useEffect(() => {
    console.log("use effect");
    fetchData()
  }, []);

  const fetchData = async () => {
    console.log("fetch data with arrow func");
    // axios di pasang pada function
    try {
      // berjalan diawal dan ketika berhasil akan diakhiri
      const respond = await axios.get("https://631d6133789612cd07a9ce1d.mockapi.io/product");
      console.log("respond dari try", respond.data);
      setUser(respond.data);
    } catch (error) {
      // akan berjalan jika try mengalami error
      console.error("error dari exios", error);
    }
  };
  return (
    <>
      <h1>Axios</h1>
      <p>{user.map((data, index) => (
        <>
          <p key={index}>{index} - {data.Product}</p>
          <p>{data.price}</p>
          <hr></hr>
        </>
      ))}</p >
    </>
  )
}

export default App

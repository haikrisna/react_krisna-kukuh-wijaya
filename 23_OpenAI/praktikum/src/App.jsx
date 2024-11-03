// 1. buat struktur kodenya / UI
// 2. integrasikan sehingga inputan use akan masuk ke state
// 3. pasang google/open ai setting
// 4. masukkan data dari state ke dalam setting open ai
import { useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai"
import { data } from './dataHarga'; // Sesuaikan path jika perlu

function App() {
  const [inputUser, setInputUser] = useState("");
  const [response, setResponse] = useState("defult response");
  const [dataState, setDataState] = useState(data);
  const [history, setHistory] = useState([
    {
      role: "user",
      parts: [{ text: "aku biasa dipanggil krisna" }],
    },
    {
      role: "model",
      parts: [{ text: "saya adalah AI penjual komponen IoT" }],
    },
  ]);
  function handleChange(e) {
    console.log("handle change");
    setInputUser(e.target.value);
  }

  // kita coba setting atau masukkan google ai 
  const apiKey = "AIzaSyD-9Cqzq98NscZxeJGM4f0-gP3tCvvP1Ew"

  //inisialisasi google generativ AI dengan API key
  const genAI = new GoogleGenerativeAI(apiKey);

  // dapatkan model yang akan digunakan (gemini)
  const model = genAI.getGenerativeModel({
    // model: "gemini-1.5-flash-latest",
    model: "gemini-1.5-flash-latest",
  });

  // konfigurasi opsi pemrosesan AI
  const generationConfig = {
    maxOutputTokens: 1000,
    temperature: 1,// kreatifitas dari AI
  }

  // functio untuk menembak ke AI Gemini
  async function handlePromptSubmit() {
    // ambil inputan dari user
    console.log("input user = ", inputUser);
    try {
      const chatSession = model.startChat(
        {
          generationConfig,
          history: history,
        }
      )
      let promptDefault = `Kamu harus menjawab dengan sopan. Berikut adalah data harga yang ada: ${JSON.stringify(dataState, null, 2)}. 
Tidak boleh menjawab di luar dari data dan history yang diberikan. bahwa saya adalah muchson.dengan history percakapan${JSON.stringify(history, null, 2)}. Berikut inputan pengguna: ${inputUser}`;
      // const dataAPI = await axios.get("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY", data)
      const result = await chatSession.sendMessage(inputUser);
      console.log(result.response.text());
      setResponse(result.response.text());

      //ada logic untuk menambahkan pada history state
      setHistory((prevData) => [
        ...prevData,
        { role: "user", parts: [{ text: inputUser }], },
        { role: "model", parts: [{ text: result.response.text() }] },
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Gemini AI</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handlePromptSubmit} type="button">Submit</button>
      <p>{response}</p>
      <ul>
        {history.map((data, index) => (
          <div key={index}>
            <strong>{data.role === "user" ? "User" : "AI"}</strong> {data.parts[0].text}
          </div>
        ))}
      </ul>
    </>
  )
}

export default App

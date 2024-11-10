import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { data } from './dataMakanan'; 
import './App.css';

function App() {
  const [inputUser, setInputUser] = useState("");
  const [response, setResponse] = useState("default response");
  const [dataState, setDataState] = useState(data);
  const [history, setHistory] = useState([
    {
      role: "user",
      parts: [{ text: "aku biasa dipanggil krisna" }],
    },
    {
      role: "model",
      parts: [{ text: "saya adalah AI untuk memandu kegiatan manajemen makanan dan mengatasi FoodWaste, saya ahli dalam bidang meal plan mengenai informasi makanan yang ada" }],
    },
  ]);

  function handleChange(e) {
    setInputUser(e.target.value);
  }

  const apiKey = "AIzaSyBvSV3xSoQn0FuPZSLFFiJQ6RkZlfJE5zo";

  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
  });

  const generationConfig = {
    maxOutputTokens: 1000,
    temperature: 1,
  };

  async function handlePromptSubmit() {
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: history,
      });
      
      let promptDefault = `Kamu harus menjawab dengan baik ketika aku menanyakan hal terkait manajemen makanan, setiap menjawab pertanyaan gunakan kalimat "Selamat Datang di Archiwaste....". Berikut adalah data makanan yang disediakan: ${JSON.stringify(dataState, null, 2)}.
      Tidak boleh menjawab di luar dari data dan history yang diberikan. Bahwa saya adalah krisna, seseorang yang sedang ingin mengatasi FoodWaste. Dengan history percakapan ${JSON.stringify(history, null, 2)}. Berikut inputan yang diberikan: ${inputUser}`;
      
      const result = await chatSession.sendMessage(inputUser);
      setResponse(result.response.text());

      setHistory((prevData) => [
        ...prevData,
        { role: "user", parts: [{ text: inputUser }] },
        { role: "model", parts: [{ text: result.response.text() }] },
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="app-container">
      <h1 className="app-title">ArchiWaste AI</h1>
      <div className="chat-container">
        <div className="history">
          {history.map((data, index) => (
            <div key={index} className={`message ${data.role}`}>
              <strong>{data.role === "user" ? "User" : "AI"}</strong>: {data.parts[0].text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            className="chat-input"
            onChange={handleChange}
            placeholder="Type your message..."
          />
          <button onClick={handlePromptSubmit} className="submit-button">Submit</button>
        </div>
        <p className="response">{response}</p>
      </div>
    </div>
  );
}

export default App;

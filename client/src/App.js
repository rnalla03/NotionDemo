import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [extraInfo, setExtraInfo] = useState("");

  function submitFormToNotion() {
    console.log("Submitting:", { name, phoneNumber, extraInfo });
    fetch("http://localhost:4000/submitFormToNotion", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, phoneNumber, extraInfo })
    }).then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      }).catch(error => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="App">
      <div className="form-container">
        <h1>Interested in learning more? Put your info in below!</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="extraInfo">Anything else?</label>
          <textarea id="extraInfo" onChange={(e) => setExtraInfo(e.target.value)} rows={10} />
        </div>
        <button className="submit-button" onClick={submitFormToNotion}>
          Submit to Notion
        </button>
      </div>
    </div>
  );
}

export default App;

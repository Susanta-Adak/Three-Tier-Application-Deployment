import { useState } from "react";

const API_URL = process.env.BACKEND_PORT;
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    });

    setName("");
    setAge("");
    alert("Data submitted!");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Age: </label>
          <input
            type="number"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

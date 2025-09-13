import { useState, useEffect } from "react";
import axios from "axios";

// Use environment variable for backend URL
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

function App() {
  const [enteredValue, setEnteredValue] = useState("");
  const [fruitList, setFruitList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleInput = (e) => setEnteredValue(e.target.value);

  // Fetch fruit list
  useEffect(() => {
    const fetchFruits = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BACKEND_URL}/fruitlist`);
        setFruitList(response.data);
        setError("");
      } catch (err) {
        console.error("Error fetching fruit list:", err);
        setError("Failed to load fruit list.");
      }
      setLoading(false);
    };

    fetchFruits();
  }, []);

  // Add new fruit
  const handleAdd = async () => {
    if (!enteredValue.trim()) return;

    try {
      await axios.post(`${BACKEND_URL}/addfruits`, { newfruit: enteredValue });
      const response = await axios.get(`${BACKEND_URL}/fruitlist`);
      setFruitList(response.data);
      setEnteredValue("");
      setError("");
    } catch (err) {
      console.error("Error adding fruit:", err);
      setError("Failed to add fruit.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial" }}>
      <h1>Fruit List</h1>
      <input
        type="text"
        value={enteredValue}
        onChange={handleInput}
        placeholder="Enter fruit name"
        style={{ padding: "8px", width: "70%", marginRight: "10px" }}
      />
      <button onClick={handleAdd} style={{ padding: "8px 12px" }}>
        Add
      </button>

      {loading && <p>Loading fruits...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {fruitList.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

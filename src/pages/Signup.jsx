import { useState } from "react";
import axios from "../utils/axiosConfig";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [load, setLoad] = useState(false);

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoad(true);

    try {
      const res = await axios.post("/api/auth/signup", formData);

      localStorage.setItem("token", res.data.token);
      setLoad(false);
      setMsg("Signup successful ✅");
    } catch (err) {
      setMsg(err.response?.data?.msg || "Signup failed ❌");
    }
  };

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Signup</h2>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <button style={{ width: "100%", padding: "10px" }}>
            {load ? "Signing up..." : "Signup"}
        </button>
      </form>

      <p>{msg}</p>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/apiAuth";
import { useApi } from "../ApiContext";

function Signup() {
  const [email, setEmail] = useState("petrmichal0@gmail.com");
  const [password, setPassword] = useState("123456789");
  const [passwordConfirm, setPasswordConfirm] = useState("123456789");
  const [name, setName] = useState("TEST");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (password !== passwordConfirm) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const response = await signup({ name, email, password, passwordConfirm });
      setUser(response);
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-h-screen ">
      <h2 className="text-2xl font-bold mb-6 text-white">Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-transparent p-6  w-full max-w-md  border-gray-300 border-t-0"
      >
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Full Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="h-10 w-full rounded-full pl-6 mb-5 bg-slate-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-10 w-full rounded-full pl-6 mb-5 bg-slate-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="h-10 w-full rounded-full pl-6 mb-5 bg-slate-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Confirm Password:
          </label>
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
            className="h-10 w-full rounded-full pl-6 mb-5 bg-slate-300"
          />
        </div>
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;

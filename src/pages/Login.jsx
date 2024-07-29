import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/apiAuth";

function Login() {
  const [email, setEmail] = useState("petrmichal0@gmail.com");
  const [password, setPassword] = useState("12345678910");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/");
    } catch (error) {
      setError("Incorrect email or password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-white">Log In</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-transparent p-6 w-full max-w-md border-gray-300 border-t-0"
      >
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
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Log In
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-white">
          Did you forget password?&nbsp;
          <Link to="/forgotpassword" className="text-blue-500 underline">
            Forgot Password
          </Link>
        </p>
        <p className="text-white">
          Dont have an account?&nbsp;
          <Link to="/signup" className="text-blue-500 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

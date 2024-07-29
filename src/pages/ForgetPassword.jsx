import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/apiAuth";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword({ email });
      navigate("/resetpage");
    } catch (error) {
      console.log("Reset password failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-white">Reset Password</h2>
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Reset Password
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-white">
          or&nbsp;
          <Link to="/login" className="text-blue-500 underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgetPassword;

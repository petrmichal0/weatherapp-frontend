import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPasswordConfirm } from "../services/apiAuth";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { token } = useParams(); // Získání tokenu z URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    try {
      await resetPasswordConfirm({
        token,
        password,
        passwordConfirm: confirmPassword,
      });
      navigate("/login"); // Přesměrování na přihlašovací stránku po úspěšném resetování hesla
    } catch (error) {
      console.log("Reset password failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-white">Set New Password</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-transparent p-6 w-full max-w-md border-gray-300 border-t-0"
      >
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            New Password:
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
    </div>
  );
}

export default ResetPassword;

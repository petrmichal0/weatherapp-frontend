import { useEffect } from "react";
import { logout } from "../services/apiAuth";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useApi } from "../ApiContext";

function Logout() {
  const navigate = useNavigate();
  const { setUser } = useApi();

  useEffect(() => {
    const performLogout = async () => {
      await logout();
      setUser(null);
    };

    performLogout();
  }, [navigate, setUser]);

  return (
    <div className="flex flex-col items-center justify-center max-h-screen w-full uppercase ">
      <div className="bg-zinc-500 p-6 rounded-lg shadow-md text-center w-[500px]">
        <h2 className="text-base font-bold mb-6 text-white">
          You’ve successfully logged out of Weather App. <br />
          Come back soon!
        </h2>

        <FaCheckCircle className="text-green-500 text-6xl mb-4 inline-block" />
      </div>
    </div>
  );
}

export default Logout;

import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useApi } from "../ApiContext";
import { getData } from "../ui/AsyncStorage";
import { logout } from "../services/apiAuth";

function Header() {
  const { user, setUser } = useApi();
  const navigate = useNavigate();
  const { city } = useParams();
  const location = useLocation(); // Get current location

  const handleLogoClick = async () => {
    let targetCity = city;
    if (!targetCity) {
      const storedCity = await getData("city");
      targetCity = storedCity || "Prague";
    }
    navigate(`/${targetCity}`);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      navigate("/logout");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="flex justify-between items-center w-full py-4 bg-transparent">
      <span
        className="flex items-center cursor-pointer"
        onClick={handleLogoClick}
      >
        <span className="text-2xl">
          <span className="text-zinc-400 font-bold">Lo</span>
          <span className="text-white">Go</span>
        </span>
      </span>
      <div className="flex space-x-4">
        {user ? (
          <>
            {location.pathname === "/favorite" ? (
              <button
                onClick={handleLogoClick}
                className="p-2 text-white rounded-lg"
              >
                Home
              </button>
            ) : (
              <Link to="/favorite" className="p-2 text-white rounded-lg">
                Favorite
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="p-2 bg-red-600 text-white rounded-lg"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="p-2 text-white rounded-lg">
              Log in
            </Link>
            <Link
              to="/signup"
              className="p-2 bg-blue-500 text-white rounded-lg"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

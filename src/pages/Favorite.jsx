import { useApi } from "../ApiContext";
import { Navigate, useNavigate } from "react-router-dom";
import { removeFavoriteCity } from "../services/apiAuth";
import { useState } from "react";

const Favorites = () => {
  const { user, setUser } = useApi();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" />;
  }

  // Seřazení oblíbených měst podle názvu města
  const sortedFavorites = [...user.favorites].sort((a, b) =>
    a.cityName.localeCompare(b.cityName)
  );

  const handleRemove = async (cityName, country) => {
    try {
      await removeFavoriteCity({ cityName, country });
      const updatedUser = {
        ...user,
        favorites: user.favorites.filter(
          (fav) => fav.cityName !== cityName || fav.country !== country
        ),
      };
      setUser(updatedUser);
    } catch (error) {
      console.error("Error removing favorite city:", error);
    }
  };

  const handleNavigate = (cityName) => {
    console.log("Navigating to home with city:", cityName);
    navigate(`/${cityName}`);
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Favorite Cities</h2>
      <div className="w-full max-w-lg">
        {sortedFavorites.map((fav, index) => (
          <div
            key={index}
            className={`w-full py-3 border-b border-gray-300 flex justify-between items-center cursor-pointer ${
              hoveredIndex === index ? "bg-gray-700" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleNavigate(fav.cityName)}
          >
            <div className="text-left">
              <span className="text-lg font-semibold text-white">
                {fav.cityName}
              </span>
              <span className="text-lg font-semibold text-gray-300">
                , {fav.country}
              </span>
            </div>
            {hoveredIndex === index && (
              <button
                className="w-6 h-6 bg-red-600 text-white rounded-lg flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation(); // Zabrání přechodu na stránku Home při kliknutí na křížek
                  handleRemove(fav.cityName, fav.country);
                }}
              >
                &times;
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

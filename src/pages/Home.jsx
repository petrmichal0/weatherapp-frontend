/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { useApi } from "../ApiContext";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchLocations, fetchWeatherForecast } from "../services/apiWeather";
import { weatherImages } from "../consts";
import { getData, storeData } from "../ui/AsyncStorage";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaWind,
  FaTint,
  FaSun,
  FaMoon,
  FaHeart,
} from "react-icons/fa";
import { addFavoriteCity, removeFavoriteCity } from "../services/apiAuth";

const backendUrl = "https://my-weatherapp-backend-1a24a5724dcc.herokuapp.com/";

const Home = () => {
  const { user, setUser } = useApi();
  const { city } = useParams();
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (user) {
      setFavorites(user.favorites); // Nastavíme celé objekty místo pouze názvů měst
    }
  }, [user]);

  useEffect(() => {
    fetchMyWeatherData();
    if (city) {
      storeData("city", city);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  const handleSearch = async (search) => {
    if (search.length > 2) {
      const data = await fetchLocations({ cityName: search });
      setLocations(data);
    } else {
      setLocations([]);
    }
  };

  const handleLocation = async (loc) => {
    setLoading(true);
    setLocations([]);
    const data = await fetchWeatherForecast({ cityName: loc.name, days: "3" });
    setLoading(false);
    setWeather(data);
    storeData("city", loc.name);
    setSearchQuery("");
    navigate(`/${loc.name}`);
  };

  const fetchMyWeatherData = async () => {
    const storedCity = await getData("city");
    const cityName = city || storedCity || "Prague";
    const data = await fetchWeatherForecast({ cityName, days: "3" });
    setWeather(data);
    setLoading(false);
    if (!city && storedCity) {
      navigate(`/${storedCity}`, { replace: true });
    }
  };

  const toggleFavorite = async () => {
    try {
      const city = weather.location.name;
      const country = weather.location.country;

      // Kontrola, zda město již není ve favorites
      const isFavorite = favorites.find(
        (fav) => fav.cityName === city && fav.country === country
      );

      if (isFavorite) {
        await removeFavoriteCity({ cityName: city, country });
        setFavorites(
          favorites.filter(
            (fav) => fav.cityName !== city || fav.country !== country
          )
        );
      } else {
        await addFavoriteCity({ cityName: city, country });
        setFavorites([...favorites, { cityName: city, country }]);
      }

      // Aktualizujeme uživatele v kontextu, aby odrážel změny v oblíbených městech
      const response = await axios.get(
        `${backendUrl}/api/v1/user/currentUser`,
        {
          withCredentials: true,
        }
      );
      if (response.data.status === "success") {
        setUser(response.data.data.user);
      }
    } catch (error) {
      console.error(
        "Error toggling favorite city:",
        error.response || error.message
      );
    }
  };

  const { location, current } = weather;

  return (
    <div
      className="relative flex flex-col items-center bg-cover"
      style={{ backgroundImage: `url('/assets/images/bg.png')` }}
    >
      {loading ? (
        <div className="flex flex-1 justify-center items-center">
          <span>Loading...</span>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center w-full p-4">
          <div className="relative w-full max-w-lg mb-4">
            <div className="flex items-center p-2 rounded-full bg-opacity-20 bg-white">
              <input
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearch(e.target.value);
                }}
                placeholder="Search city"
                className="flex-1 p-2 text-white bg-transparent outline-none"
                value={searchQuery}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSearch(searchQuery)
                }
              />
            </div>
            {locations.length > 0 && (
              <div className="absolute w-full bg-gray-300 rounded-3xl top-16">
                {locations.map((loc, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 mb-1 ${
                      index + 1 !== locations.length
                        ? "border-b-2 border-gray-400"
                        : ""
                    }`}
                    onClick={() => handleLocation(loc)}
                  >
                    <FaMapMarkerAlt className="w-5 h-5 text-gray-600" />
                    <span className="ml-2 text-lg text-black">
                      {loc?.name}, {loc?.country}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col items-center w-full space-y-4 mb-10">
            <h2 className="text-2xl font-bold text-white">
              {location?.name},{" "}
              <span className="text-lg font-semibold text-gray-300">
                {location?.country}
              </span>
            </h2>
            {user && (
              <div onClick={toggleFavorite} className="cursor-pointer">
                <FaHeart
                  className={`w-8 h-8 ${
                    favorites.find(
                      (fav) =>
                        fav.cityName === location?.name &&
                        fav.country === location?.country
                    )
                      ? "text-red-500"
                      : "text-white"
                  }`}
                />
              </div>
            )}
            <div className="relative flex justify-center -z-10">
              <img
                src={weatherImages[current?.condition?.text || "other"]}
                alt="weather icon"
                className="w-52 h-52"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-6xl font-bold text-white">
                {current?.temp_c}&#176;
              </h1>
              <p className="text-xl tracking-widest text-white">
                {current?.condition?.text}
              </p>
            </div>
            <div className="flex justify-between w-[500px] max-w-lg mb-8">
              <div className="flex items-center space-x-2">
                <FaWind className="w-6 h-6 text-white" />
                <span className="text-base font-semibold text-white">
                  {current?.wind_kph}km
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaTint className="w-6 h-6 text-white" />
                <span className="text-base font-semibold text-white">
                  {current?.humidity}%
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaSun className="w-6 h-6 text-white" />
                <span className="text-base font-semibold text-white">
                  {weather?.forecast?.forecastday[0]?.astro?.sunrise}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMoon className="w-6 h-6 text-white" />
                <span className="text-base font-semibold text-white">
                  {weather?.forecast?.forecastday[0]?.astro?.moonset}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3 w-[500px] overflow-x-hidden">
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="w-5 h-5 text-white" />
              <span className="text-base text-white">Daily forecast</span>
            </div>
            <div className="flex overflow-x-scroll space-x-4">
              {weather?.forecast?.forecastday?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-24 p-3 space-y-1 rounded-3xl bg-opacity-15 bg-white shrink-0"
                >
                  <img
                    src={weatherImages[item?.day?.condition?.text || "other"]}
                    alt="forecast"
                    className="w-11 h-11"
                  />
                  <span className="text-white">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      weekday: "long",
                    })}
                  </span>
                  <span className="text-xl font-semibold text-white">
                    {item?.day?.avgtemp_c}&#176;
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

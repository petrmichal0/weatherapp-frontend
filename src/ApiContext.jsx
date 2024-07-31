/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ApiContext = createContext();
const backendUrl = "https://my-weatherapp-backend-1a24a5724dcc.herokuapp.com";

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/v1/user/currentUser`,
          { withCredentials: true }
        );
        if (response.data.status === "success") {
          setUser(response.data.data.user);
          console.log("User data set:", response.data.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.response?.data);
        setUser(null);
      }
    };

    getUserData();
  }, [location.pathname]); // Sledujeme změny v URL

  return (
    <ApiContext.Provider value={{ user, setUser }}>
      {children}
    </ApiContext.Provider>
  );
};

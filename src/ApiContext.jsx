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
    console.log("Current user value:", user); // Přidejte tento log
  }, [user]);

  useEffect(() => {
    const getUserData = async () => {
      console.log("Document Cookies:", document.cookie);

      try {
        const response = await axios.get(
          `${backendUrl}/api/v1/user/currentUser`
        );
        if (response.data.status === "success") {
          setUser(response.data.data.user);
          console.log("User data set:", response.data.data.user);
        } else {
          setUser(null);
          console.log("API Response Status:", response.data.status);
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

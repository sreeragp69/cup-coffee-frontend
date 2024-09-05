import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState("");
  const [ServiceData, setServiceData] = useState([]);
  const authorizationToken =`Bearer ${token}`

  //* URL 
  const API = import.meta.env.VITE_APP_URI_API
  

  //* STORE TOKENS
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);
  };

  //* LOGOUT USER
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  let isLoggedIn = !!token;

  //* JWT AUTHENTICATION - TO GET CORRENTLY LOGGEIN USER DATA

  const userAuthentication = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
        setIsLoading(false)
      }else{
        setIsLoading(false)
        console.log("ERROR fetching user Data");
        
      }
    } catch (error) {
      console.log("Error fetching user Data");
    }
  };

  //* FETCH SERVICES DATA

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service",{
        method:"GET"
      });


      if (response.ok) {
        const ServiceData = await response.json();
        setServiceData(ServiceData.services);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{API, isLoading,authorizationToken,fetchData, ServiceData, isLoggedIn, storeTokenInLS, LogoutUser, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider.");
  }

  return authContextValue;
};

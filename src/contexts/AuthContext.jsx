import { createContext, useEffect, useState } from "react";
import { account, ID } from "../lib/appwrite";

const AuthContext = createContext();

const defaultUser = {
  name: "guest",
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function getUser() {
    try {
      const status = await account.get();
      setUser(status);
      setIsLoggedIn(true);
      console.log("getuser : ", status);
    } catch (error) {
      console.error("User is not logged in : ", error.message);
      setIsLoggedIn(false);
      setUser(defaultUser);
    }
  }

  async function login(email, password) {
    await account.createEmailPasswordSession(email, password);
    getUser();
  }

  async function register(email, password, name) {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  }

  async function logout() {
    await account.deleteSession("current");
    setIsLoggedIn(false);
    setUser(defaultUser);
    console.log("Deleted");
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        getUser,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

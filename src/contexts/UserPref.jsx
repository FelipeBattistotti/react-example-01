import React, { createContext, useContext, useState } from "react";

// CONTEXT
export const UserPrefContext = createContext(null)

// PROVIDER
export const UserPrefProvider = ({ children }) => {
  /**
   * Dark Mode
   */
  const [darkMode, setDarkMode] = useState(false)
  /**
   * STATES
   */
  const states = {
    darkMode,
    setDarkMode
  }
  return (
    <UserPrefContext.Provider value={{ ...states }}>
      {children}
    </UserPrefContext.Provider>
  )
}

// HOOK
export const useUserPref = () => {
  const context = useContext(UserPrefContext)
  const {
    darkMode,
    setDarkMode
  } = context;
  return {
    darkMode,
    setDarkMode
  }
}
import React from "react";
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export const GlobalContext = React.createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  let userName: any;
  if (typeof window !== 'undefined') {
    userName = localStorage.getItem("username");
  }

  const [user, setUser] = React.useState(userName);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

export default MyApp

import React, { createContext, useState } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  let user: any;

  if (typeof window !== "undefined") {
      user = localStorage.getItem("username");
  } 

  const [userName, setUserName] = useState(user);

  return (
    <GlobalContext.Provider value={{ userName, setUserName }}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'

type MyObj = {
  name: string;
};

type NewObj = {
  name: string;
};

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

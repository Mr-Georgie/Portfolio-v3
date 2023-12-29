import { Inter } from "next/font/google";
import Head from "next/head";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className}`}>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;

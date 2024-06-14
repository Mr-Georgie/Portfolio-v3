import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className={`${inter.className}`}>
        <Head>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <main>
          <Component {...pageProps} />
          <Analytics />
          <SpeedInsights />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

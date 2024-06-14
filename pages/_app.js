import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "George Isiguzo | Software Developer",
  description:
    "A software developer with 3+ years of professional experience in software development. Java and JavaScript Expert. Currently focused on simplifying payments at Flutterwave",
};

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

import { Intro } from "@/components/Intro/Intro";
import { Navbar } from "@/components/Navbar/Navbar";
import { SelectedWork } from "@/components/SelectedWork/SelectedWork";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>George Isiguzo | Portfolio</title>
      </Head>
      <div className="min-h-screen w-full py-4 px-6 sm:px-14">
        <Navbar />
        <Intro />
        <SelectedWork />
      </div>
    </>
  );
}

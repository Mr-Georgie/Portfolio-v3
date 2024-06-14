import { Navbar } from "@/components/Navbar/Navbar";
// import { Filter } from "@/components/Section/Section";
import Head from "next/head";

export default function Toolbox() {
  return (
    <div>
      <Head>
        <title>My Toolbox</title>
      </Head>
      <div className="min-h-screen w-full py-4 px-6 sm:px-14">
        <Navbar />
        <div className="flex flex-col items-center py-10">
          <span className="font-light text-5xl py-4">My Resume</span>
          <span className="font-extralight">
            We are just a few clicks away from building something awesome
            together!
          </span>
        </div>
        <div className="flex justify-center py-8">
          <div>
            <a
              href="https://drive.google.com/file/d/17yV-lmzUH3dR_7vmyghzNHBcMPSBCnNj/view?usp=sharing"
              className="rounded-3xl px-8 py-4 bg-gray-200 hover:bg-gray-300 
              dark:bg-[#366571] dark:hover:bg-[#274952] cursor-pointer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Navbar } from "@/components/Navbar/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>My Works</title>
      </Head>
      <div className="min-h-screen w-full py-10 px-14">
        <Navbar />
        <div className="flex flex-col items-center py-10">
          <span className="font-light text-5xl py-4">Portfolio v2</span>
          <span className="font-extralight">
            Built with ReactJS & TailwindCSS
          </span>
        </div>
        <div className="py-6 lg:px-60">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-6 font-semibold pb-10 md:py-0">
                <a
                  href="https://github.com/Mr-Georgie/Portfolio"
                  className="rounded-3xl py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer w-72 md:w-44 text-center"
                >
                  Github Repo
                </a>
                <a
                  href="https://georgeisiguzo.netlify.app/"
                  className="rounded-3xl py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer w-72 md:w-44 text-center"
                >
                  Live Site
                </a>
              </div>
            </div>
            <div className="">
              <p className="font-light text-sm">
                This was the second version of my web portfolio <br /> <br />
                Built with ReactJS, TailwindCSS and Headless UI
                <br /> <br />
                Currently migrating projects from there to this current version
                <br /> <br />
                You can find some useful details about me over there
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 lg:px-60">
          <div className="flex justify-center border rounded-lg">
            <Image
              src={"/../../static/images/port.png"}
              alt="apps context image"
              className="w-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

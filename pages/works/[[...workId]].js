import { Navbar } from "@/components/Navbar/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function WorkPage() {
  return (
    <div>
      <Head>
        <title>My Works</title>
      </Head>
      <div className="min-h-screen w-full py-10 px-14">
        <Navbar />
        <div className="flex flex-col items-center py-10">
          <span className="font-light text-5xl py-4">Mechmarket</span>
          <span className="font-extralight">
            Built with ReactJS, TailwindCSS & NextJS
          </span>
        </div>
        <div className="py-6 lg:px-60">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-6 font-semibold pb-10 md:py-0">
                <span className="rounded-3xl py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer w-72 md:w-44 text-center">
                  Github Repo
                </span>
                <span className="rounded-3xl py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer w-72 md:w-44 text-center">
                  Live Site
                </span>
              </div>
            </div>
            <div className="">
              <p className="font-light text-sm">
                The design of Mechmarket, an international shopping app for
                keyboard enthusiasts alike. <br /> <br /> In this project, I
                took a goal-directed design approach. I found qualitative
                research methods to be the most useful, consisting of literature
                reviews, competitive analysis, stakeholder interviews, and
                archetype construction. <br /> <br /> I lead the end-to-end UX
                of this studio project throughout the entire 3 week duration.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 lg:px-60">
          <div className="flex justify-center border rounded-lg">
            <Image
              src={"/../../cofolios.png"}
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

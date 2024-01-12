import { Navbar } from "@/components/Navbar/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function IdeaBuddy() {
  return (
    <div>
      <Head>
        <title>My Works</title>
      </Head>
      <div className="min-h-screen w-full py-10 px-14">
        <Navbar />
        <div className="flex flex-col items-center py-10">
          <span className="font-light text-5xl py-4">Idea Buddy</span>
          <span className="font-extralight">
            Built with NextJS, TailwindCSS & OpenAI API
          </span>
        </div>
        <div className="py-6 lg:px-60">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-6 font-semibold pb-10 md:py-0">
                <a
                  href="https://github.com/Mr-Georgie/IdeaBuddy"
                  className="rounded-3xl py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer w-72 md:w-44 text-center"
                >
                  Github Repo
                </a>
                <a
                  href="https://idea-buddy-ai.vercel.app/"
                  className="rounded-3xl py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer w-72 md:w-44 text-center"
                >
                  Live Site
                </a>
              </div>
            </div>
            <div className="">
              <p className="font-light text-sm">
                Idea Buddy is an intelligent and quick-thinking personal
                brainstorming partner designed to provide critical evaluation
                and feedback on ideas. <br /> <br /> In this project, I explored
                the OpenAI documentation which opened my eyes to the
                possibilities of AI powered apps. I found out how the ChatGPT
                app uses token to communicate with OpenAI models
                <br /> <br />I also leverage system prompts to customize the
                model to fit the purpose of the app
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 lg:px-60">
          <div className="flex justify-center border rounded-lg">
            <Image
              src={
                "https://github.com/Mr-Georgie/Portfolio-v3/blob/main/public/static/images/ideabuddy.png?raw=true"
              }
              alt="idea buddy screenshot"
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

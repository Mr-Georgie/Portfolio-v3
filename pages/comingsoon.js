import { Navbar } from "@/components/Navbar/Navbar";
import Head from "next/head";

export default function ComingSoon() {
  return (
    <div>
      <Head>
        <title>George Isiguzo | Coming Soon</title>
      </Head>
      <div className="min-h-screen w-full py-10 px-14">
        <Navbar />
        <div className="flex flex-col items-center py-10">
          <span className="font-light text-5xl py-4">Coming Soon</span>
          <span className="font-extralight">
            All my frontend and backend projects
          </span>
        </div>
        <div className="py-6 lg:px-60">
          <div className="flex flex-col items-center">
            <div className="">
              <p className="font-light text-sm">
                My Projects, the Tools/Tech Stacks I used. Populating them from{" "}
                <a
                  href="https://github.com/mr-georgie"
                  className="underline text-indigo-600"
                >
                  Github Repo
                </a>
              </p>
            </div>
            <div className="mt-20">
              <p className="text-xs">Stay tuned!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

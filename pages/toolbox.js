import { Navbar } from "@/components/Navbar/Navbar";
import Head from "next/head";
import Link from "next/link";

export default function Toolbox() {
  return (
    <div>
      <Head>
        <title>My Toolbox</title>
      </Head>
      <div className="min-h-screen w-full py-4 px-14">
        <Navbar />
        <div className="flex flex-col items-center py-10">
          <span className="font-light text-5xl py-4">My Toolbox</span>
          <span className="font-extralight">
            Tools are the artisans of possibility, crafting the foundation for
            digital dreams.
          </span>
        </div>
        <div className="flex justify-between items-center py-8">
          <div className="flex items-center gap-6 font-semibold text-sm">
            <span className="rounded-3xl px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer">
              Frontend
            </span>
            <span className="hover:opacity-50 cursor-pointer">Backend</span>
            <span>Design</span>
            <span>Project Management</span>
            <span>Cloud</span>
            <span>Other Skills</span>
            <span>DevOps</span>
            <span>Version Control</span>
            <span>Testing</span>
            <span>Streaming</span>
          </div>
          <Link
            href="/contact"
            className="font-light flex gap-2 hover:opacity-50"
          >
            <div className="">let's collaborate</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-blue-500 p-28 rounded-md relative">
            <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-60 w-full rounded-b-md">
              <div className="flex justify-between items-center text-white py-4 px-3">
                <span className="">AGILE</span>
                {/* <span className="text-xs">Click to see more</span> */}
              </div>
            </div>
          </div>

          <div class="bg-green-500 p-28 rounded-md relative">
            <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-50 w-full rounded-b-md"></div>
          </div>

          <div class="bg-orange-500 p-28 rounded-md relative">
            <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-50 w-full rounded-b-md"></div>
          </div>

          <div class="bg-yellow-500 p-28 rounded-md relative">
            <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-50 w-full rounded-b-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

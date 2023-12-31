import { Filter } from "@/components/Filter/Filter";
import { Navbar } from "@/components/Navbar/Navbar";
import workList from "@/Data/workList";
import Head from "next/head";
import Link from "next/link";

export default function Work() {
  return (
    <div>
      <Head>
        <title>My Works</title>
      </Head>
      <div className="min-h-screen w-full py-4 px-14">
        <Navbar />
        <div className="flex flex-col items-center py-10">
          <span className="font-light text-5xl py-4">Work Experiences</span>
          <span className="font-extralight">
            Experiences are what defines who we are.
          </span>
        </div>
        <div className="flex justify-between items-center py-8 gap-14">
          <Filter filterList={workList} />
          <Link
            href="/toolbox"
            className="font-light flex gap-2 hover:opacity-50"
          >
            <div className="">
              <span className="hidden md:block">my</span> tools
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="md:w-3 md:h-3 w-6 h-6"
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-500 p-28 rounded-md relative">
            <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-60 w-full rounded-b-md">
              <div className="flex justify-between items-center text-white py-4 px-3">
                <span className="">AGILE</span>
                {/* <span className="text-xs">Click to see more</span> */}
              </div>
            </div>
          </div>

          <div className="bg-green-500 p-28 rounded-md relative">
            <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-50 w-full rounded-b-md"></div>
          </div>

          <div className="bg-orange-500 p-28 rounded-md relative">
            <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-50 w-full rounded-b-md"></div>
          </div>

          <div className="bg-yellow-500 p-28 rounded-md relative">
            <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-50 w-full rounded-b-md"></div>
          </div>

          <div className="bg-blue-500 p-28 rounded-md relative">
            <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-60 w-full rounded-b-md">
              <div className="flex justify-between items-center text-white py-4 px-3">
                <span className="">AGILE</span>
              </div>
            </div>
          </div>

          <div className="bg-green-500 p-28 rounded-md relative">
            <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-50 w-full rounded-b-md"></div>
          </div>

          <div className="bg-orange-500 p-28 rounded-md relative">
            <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-50 w-full rounded-b-md"></div>
          </div>

          <div className="bg-yellow-500 p-28 rounded-md relative">
            <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-50 w-full rounded-b-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

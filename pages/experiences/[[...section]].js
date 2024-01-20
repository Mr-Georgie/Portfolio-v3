import { Navbar } from "@/components/Navbar/Navbar";
import { Section } from "@/components/Section/Section";
import projects from "@/Data/projects";
import {
  librariesAndFrameworks,
  programmingLanguages,
  toolsAndPlatforms,
} from "@/Data/tools";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Experiences({ section }) {
  return (
    <div>
      <Head>
        <title>My Works</title>
      </Head>
      <div className="min-h-screen w-full py-4 px-6 sm:px-14">
        <Navbar />
        <div className="flex flex-col sm:items-center py-10">
          <span className="font-light text-5xl py-4">Work Experiences</span>
          <span className="font-extralight">
            Experiences are what defines who we are.
          </span>
        </div>
        <div className="flex justify-center py-8 gap-14">
          <Section section={section} />
        </div>

        {/* main */}
        {section === "projects" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="border-2 rounded-md relative cursor-pointer hover:opacity-90 h-[180px] w-full"
              >
                <Image
                  src={project.imageSource}
                  alt={`${project.title} screenshot`}
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                />
                <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-80 w-full rounded-b-md">
                  <div className="flex text-white py-4 px-3">
                    <span className="">{project.title}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {section === "list" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-[70px] lg:mx-36">
            <div className=" hidden md:flex md:items-center">
              <div className="">
                <h3 className="font-semibold text-2xl my-2">
                  Backend Engineer @{" "}
                  <Link
                    href="https://en.wikipedia.org/wiki/Flutterwave"
                    className="text-indigo-400 cursor-pointer"
                  >
                    Flutterwave
                  </Link>
                </h3>
                <h6 className="font-mono font-extralight text-xs">
                  August 2022 - Present (Fulltime)
                </h6>
              </div>
            </div>
            <div className="my-8">
              <div className="md:hidden">
                <h3 className="font-semibold text-lg my-2">
                  Backend Engineer @{" "}
                  <Link
                    href="https://en.wikipedia.org/wiki/Flutterwave"
                    className="text-indigo-400 cursor-pointer"
                  >
                    Flutterwave
                  </Link>
                </h3>
                <h6 className="font-mono font-extralight text-xs">
                  August 2022 - Present (Fulltime)
                </h6>
              </div>
              <div className="mt-6 px-6">
                <h4 className="text-custom-blue font-bold sm:text-lg">
                  What I do
                </h4>
                <p className="dark:text-white text-sm sm:text-base">
                  I build card and wallet payment processing microservices for
                  borderless funds transfer. My focus is on:
                </p>
                <div className="dark:text-white py-3 text-xs sm:text-sm flex flex-col gap-2">
                  <div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">best coding practices</p>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">data security</p>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">user-friendly error handling</p>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">
                      seamless RESTful API interactions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className=" hidden md:flex md:items-center">
              <div className="">
                <h3 className="font-semibold text-2xl my-2">
                  Frontend Developer @{" "}
                  <Link
                    href="https://badagryanaesthesia.edu.ng/"
                    className="text-indigo-400 cursor-pointer"
                  >
                    School of <br /> Anaesthetic Studies, Badagry
                  </Link>
                </h3>
                <h6 className="font-mono font-extralight text-xs">
                  January 2022 - July 2022 (Contract)
                </h6>
              </div>
            </div>
            <div className="my-8">
              <div className="md:hidden">
                <h3 className="font-semibold text-lg my-2">
                  Frontend Developer @{" "}
                  <Link
                    href="https://badagryanaesthesia.edu.ng/"
                    className="text-indigo-400 cursor-pointer"
                  >
                    School of <br /> Anaesthetic Studies, Badagry
                  </Link>
                </h3>
                <h6 className="font-mono font-extralight text-xs">
                  January 2022 - July 2022 (Contract)
                </h6>
              </div>
              <div className="mt-6 px-6">
                <h4 className="text-custom-blue font-bold sm:text-lg">
                  What I did
                </h4>
                <p className="dark:text-white text-sm sm:text-base">
                  Translated the{" client's "}Figma design into an intuitive{" "}
                  <Link
                    href="/projects/badagryanaesthesia"
                    className="underline"
                  >
                    user Interface
                  </Link>{" "}
                  My focus was on:
                </p>
                <div className="dark:text-white py-3 text-xs sm:text-sm flex flex-col gap-2">
                  <div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">mobile responsiveness</p>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">seo</p>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">good user experience</p>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">maintainability</p>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className=" hidden md:flex md:items-center">
              <div className="">
                <h3 className="font-semibold text-2xl my-2">
                  Backend Developer @ <br />
                  <Link
                    href="https://www.crunchbase.com/organization/zuri-team"
                    className="text-indigo-400 cursor-pointer"
                  >
                    Zuri Team Inc.
                  </Link>
                </h3>
                <h6 className="font-mono font-extralight text-xs">
                  March 2021 - August 2021 (Internship)
                </h6>
              </div>
            </div>
            <div className="my-8">
              <div className="md:hidden">
                <h3 className="font-semibold text-lg my-2">
                  Backend Developer @{" "}
                  <Link
                    href="https://www.crunchbase.com/organization/zuri-team"
                    className="text-indigo-400 cursor-pointer"
                  >
                    Zuri Team Inc.
                  </Link>
                </h3>
                <h6 className="font-mono font-extralight text-xs">
                  March 2021 - August 2021 (Internship)
                </h6>
              </div>
              <div className="mt-6 px-6">
                <h4 className="text-custom-blue font-bold sm:text-lg">
                  What I did
                </h4>
                <p className="dark:text-white text-sm sm:text-base">
                  Developed a robust{" "}
                  <Link href="/projects/rentme" className="underline">
                    REST API
                  </Link>{" "}
                  using Django REST Framework for my final project. My focus was
                  on:
                </p>
                <div className="dark:text-white py-3 text-xs sm:text-sm flex flex-col gap-2">
                  <div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">
                      understanding RESTful principles
                    </p>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">
                      API documentation with Swagger UI
                    </p>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">user-friendly error handling</p>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">industry best practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {section === "tools" && (
          <>
            <div className="my-4">
              <div>
                <h3 className="my-3 text-xs">Programming Languages: </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {programmingLanguages.map((language, index) => (
                  <div
                    key={index}
                    className="border bg-blue-300 w-full rounded-md text-white p-4"
                  >
                    <span className="font-bold uppercase">{language}</span>
                  </div>
                ))}
              </div>
            </div>
            {/*  */}
            <div className="my-4">
              <div>
                <h3 className="my-3 text-xs">Libraries{" & "}Frameworks : </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {librariesAndFrameworks.map((language, index) => (
                  <div
                    key={index}
                    className="border bg-green-300 w-full rounded-md text-white p-4"
                  >
                    <span className="font-bold uppercase">{language}</span>
                  </div>
                ))}
              </div>
            </div>
            {/*  */}
            <div className="my-4">
              <div>
                <h3 className="my-3 text-xs">Tools{" & "}Platforms : </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {toolsAndPlatforms.map((language, index) => (
                  <div
                    key={index}
                    className="border bg-orange-300 w-full rounded-md text-white p-4"
                  >
                    <span className="font-bold uppercase">{language}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const section = ctx.params?.section?.[0] || null;

  if (!section) {
    // If there's no section
    return {
      props: {
        section: "projects",
      },
    };
  }

  return {
    props: {
      section,
    },
  };
};

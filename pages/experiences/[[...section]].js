import { Navbar } from "@/components/Navbar/Navbar";
import { Section } from "@/components/Section/Section";
import projects from "@/Data/projects";
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

        {section === "tools" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-500 p-28 rounded-md relative">
              <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-60 w-full rounded-b-md">
                <div className="flex justify-between items-center text-white py-4 px-3">
                  <span className="">AGILE</span>
                  {/* <span className="text-xs">Click to see more</span> */}
                </div>
              </div>
            </div>
          </div>
        )}

        {section === "list" && <div>list</div>}
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

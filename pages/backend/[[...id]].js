import backend from "@/Data/backend";
import { Navbar } from "@/components/Navbar/Navbar";
import Head from "next/head";

export default function ProjectPage({ id }) {
  const project = backend.find((p) => p.id === id);

  if (!project) {
    // Handle the case where the project with the specified title is not found
    return <div>Project not found: {id}</div>;
  }

  return (
    <div>
      <Head>
        <title>{project.title}</title>
      </Head>
      <div className="min-h-screen w-full py-10 px-6 sm:px-14">
        <Navbar />
        <div className="flex flex-col items-center py-10">
          <span className="font-light text-5xl py-4">
            {project.projectName}
          </span>
          <span className="font-extralight">{project.builtWith}</span>
        </div>
        <div className="py-6 lg:px-60">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-6 font-semibold pb-10 md:py-0">
                <a
                  href={project.githubRepoLink}
                  className="rounded-3xl py-2 bg-gray-200 hover:bg-gray-300 dark:bg-[#366571] dark:hover:bg-[#274952] cursor-pointer w-72 md:w-44 text-center"
                >
                  Github Repo
                </a>
                <a
                  href={project.liveSiteLink}
                  className="rounded-3xl py-2 bg-gray-200 hover:bg-gray-300 dark:bg-[#366571] dark:hover:bg-[#274952] cursor-pointer w-72 md:w-44 text-center"
                >
                  Live Site
                </a>
              </div>
            </div>
            <div className="">
              <p
                className="font-light text-sm"
                dangerouslySetInnerHTML={{
                  __html: project.projectDescription.replace(
                    /\n/g,
                    "<br /> <br />"
                  ),
                }}
              />
            </div>
          </div>
        </div>
        <div className="py-6 lg:px-60">
          {/* <div className="flex justify-center border rounded-lg">
            <Image
              src={project.imageSource}
              alt={`${project.projectName} screen`}
              className="w-full"
              width={400}
              height={400}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const id = ctx.params?.id?.[0] || null;

  if (!id) {
    // If there's no id
    return {
      props: {
        id: null,
      },
    };
  }

  return {
    props: {
      id,
    },
  };
};

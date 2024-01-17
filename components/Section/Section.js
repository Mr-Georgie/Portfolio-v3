import Link from "next/link";

export const Section = ({ section }) => {
  return (
    <div className="flex items-center gap-6 font-semibold text-sm overflow-x-scroll">
      <Link
        href="/experiences/projects"
        className={`${
          section === "projects" ? "bg-gray-200" : ""
        } flex gap-2 rounded-3xl px-4 py-2 hover:bg-gray-300 cursor-pointer`}
      >
        <span className="rounded-3xl px-2 py-1 bg-orange-200 text-xs">10+</span>
        Projects
      </Link>
      <Link
        href="/experiences/list"
        className={`${
          section === "list" ? "bg-gray-200" : ""
        } flex gap-2 rounded-3xl px-4 py-2 hover:bg-gray-300 cursor-pointer`}
      >
        <span className="rounded-3xl px-2 py-1 bg-orange-200 text-xs">3</span>
        Experiences
      </Link>
      {/* <Link
        href="/experiences/tools"
        className={`${
          section === "tools" ? "bg-gray-200" : ""
        } flex gap-2 rounded-3xl px-4 py-2 hover:bg-gray-300 cursor-pointer`}
      >
        <span className="rounded-3xl px-2 py-1 bg-orange-200 text-xs">20+</span>
        Tools
      </Link> */}
    </div>
  );
};

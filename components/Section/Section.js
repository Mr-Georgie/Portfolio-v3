import Link from "next/link";
import styles from "./section.module.css";

export const Section = ({ section }) => {
  return (
    <div
      className={`flex items-center gap-6 font-semibold text-sm overflow-x-scroll scrollbar-hidden ${styles["hide-scrollbar"]}`}
    >
      <Link
        href="/experiences/backend"
        className={`${
          section === "backend" ? "bg-gray-200 dark:bg-[#366571] " : ""
        } flex gap-2 rounded-3xl px-4 py-2 hover:bg-gray-300 dark:hover:bg-[#274952] cursor-pointer`}
      >
        Backend
      </Link>
      <Link
        href="/experiences/frontend"
        className={`${
          section === "frontend" ? "bg-gray-200 dark:bg-[#366571] " : ""
        } flex gap-2 rounded-3xl px-4 py-2 hover:bg-gray-300 dark:hover:bg-[#274952] cursor-pointer`}
      >
        Frontend
      </Link>
      {/* <Link
        href="/experiences/personal"
        className={`${
          section === "personal" ? "bg-gray-200 dark:bg-[#366571] " : ""
        } flex gap-2 rounded-3xl px-4 py-2 hover:bg-gray-300 dark:hover:bg-[#274952] cursor-pointer`}
      >
        Personal
      </Link> */}
      <Link
        href="/experiences/list"
        className={`${
          section === "list" ? "bg-gray-200 dark:bg-[#366571] " : ""
        } flex gap-2 rounded-3xl px-4 py-2 hover:bg-gray-300 dark:hover:bg-[#274952] cursor-pointer`}
      >
        Experiences
      </Link>
    </div>
  );
};

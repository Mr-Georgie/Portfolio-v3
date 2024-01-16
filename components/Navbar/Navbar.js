import Link from "next/link";

export const Navbar = () => {
  const onDarkMode = false;

  return (
    <div className="flex sm:justify-between py-8">
      <div></div>
      {/* <div
        className={`${
          onDarkMode
            ? "border-white transition-all duration-300"
            : "border-slate-800 transition-all duration-300"
        } border rounded-full py-1 px-2 flex gap-4`}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              onDarkMode
                ? "transition-colors bg-transparent duration-300"
                : "transition-colors bg-black/[.5] duration-300"
            } h-6 w-6 cursor-pointer rounded-full p-1 text-white`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            // onClick={() => themeToggler(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              onDarkMode
                ? "transition-colors bg-white duration-300"
                : "transition-colors duration-300"
            } h-6 w-6 cursor-pointer rounded-full p-1`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            // onClick={() => themeToggler(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </div> */}
      <div className="flex gap-4">
        <Link href="/" className="hover:opacity-50">
          Home
        </Link>
        <Link href="/experiences" className="hover:opacity-50">
          Portfolio
        </Link>
        <Link href="/contact" className="hover:opacity-50">
          Contact
        </Link>
        <a
          href="https://drive.google.com/file/d/1wxFzT08agpOzXccxUOasb6JdMRmAEWeK/view?usp=sharing"
          className="hover:opacity-50"
        >
          See Resume
        </a>
      </div>
    </div>
  );
};

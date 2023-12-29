import Image from "next/image";
import Link from "next/link";

export const SelectedWork = () => {
  return (
    <>
      <div className="py-3 flex justify-between">
        <div className="sm:text-2xl font-light">Selected Work</div>
        <Link
          href="/work"
          className="font-light flex gap-2 items-center hover:opacity-50"
        >
          <div className="text-xs sm:text-base">show more</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 sm:w-6 sm:h-6"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-2 rounded-md relative">
          <Image
            src={"/../../cofolios.png"}
            alt="apps context image"
            className="w-full"
            width={400}
            height={400}
          />
          <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-80 w-full rounded-b-md">
            <div className="flex text-white py-4 px-3">
              <span className="">COFOLIOS</span>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-md relative">
          <Image
            src={"/../../cofolios.png"}
            alt="apps context image"
            className="w-full"
            width={400}
            height={400}
          />
          <div className="absolute left-0 bottom-0 h-16 bg-slate-900 opacity-80 w-full rounded-b-md">
            <div className="flex text-white py-4 px-3">
              <span className="">COFOLIOS</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

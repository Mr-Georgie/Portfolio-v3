export const Intro = () => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:gap-0 sm:grid-cols-5 py-10">
      <div className="col-span-2">
        <div className="flex flex-col gap-8">
          <div className="text-5xl font-light">
            Hello, {" I'm"} <br /> George Isiguzo
          </div>
          <div className="hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-span-3 font-extralight">
        A software developer with a strong foundation in frontend web
        development and professional expertise as a backend developer.
        <br className="sm:hidden" /> <br className="sm:hidden" />I craft
        intuitive user interfaces for businesses, complemented by robust web
        APIs and microservices that ultimately meet the needs of customers.
      </div>
    </div>
  );
};

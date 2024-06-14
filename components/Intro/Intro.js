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
        Fueled by my passion for software development, I have built a strong
        foundation in frontend technologies and honed my skills as a backend
        developer.
        <br className="sm:hidden" /> <br className="sm:hidden" />I love creating
        intuitive, responsive, and high-performance user interfaces, paired with
        robust web APIs and microservices.
        <br className="sm:hidden" /> <br className="sm:hidden" />
        My projects reflect my dedication to crafting solutions that meet
        diverse user needs and showcase my continuous growth in the field.
      </div>
    </div>
  );
};

import { Navbar } from "@/components/Navbar/Navbar";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact George Isiguzo</title>
      </Head>
      <div className="min-h-screen w-full py-4 px-14">
        <Navbar />
        <div className="flex flex-col items-center py-10">
          <span className="font-light text-5xl py-4">Contact Me</span>
          <span className="font-extralight">Let's collaborate.</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
          <div>
            <div className="py-3">Download Resume</div>
            <div className="flex gap-4 font-extralight text-xs">
              <Link href="">Click on link</Link>
            </div>
          </div>

          <div>
            <div className="py-3">Find me</div>
            <div className="flex gap-4 font-extralight text-xs">
              <Link href="">LINKEDIN</Link>
              <Link href="">GITHUB</Link>
              <Link href="">TWITTER</Link>
            </div>
          </div>

          <div>
            <div className="py-3">Lagos, Nigeria</div>
            <div className="flex gap-4 font-extralight text-xs">
              <span>+234 (0) 8144149628</span>
              <span>george.isiguzo@yahoo.com</span>
            </div>
          </div>

          <div>
            <div className="py-3">Read My Blogs</div>
            <div className="flex gap-4 font-extralight text-xs">
              <Link href="">The React Newbie</Link>
              <Link href="">My Programming Footprints</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center pt-28">
          <span className="font-extralight text-xs">
            Built with ❤️ by{" "}
            <span className="font-semibold">George Isiguzo</span>
          </span>
          <span>{" | "}</span>
          <span className="font-extralight text-xs">
            With inspo from{" "}
            <Link href="https://joshglucas.com/" className="font-semibold">
              Josh Lucas
            </Link>
            {", "}
            <Link
              href="https://dribbble.com/raflymizalfi"
              className="font-semibold"
            >
              Rafly Mizalfi
            </Link>{" "}
            &{" "}
            <Link
              href="https://dribbble.com/search/personal-website-portfolio"
              className="font-semibold"
            >
              Dribble.com
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

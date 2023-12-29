import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-end gap-4 py-8">
      <Link href="/" className="hover:opacity-50">
        Home
      </Link>
      <Link href="/work" className="hover:opacity-50">
        Work
      </Link>
      <Link href="/toolbox" className="hover:opacity-50">
        Toolbox
      </Link>
      <Link href="/contact" className="hover:opacity-50">
        Contact
      </Link>
      <Link href="/contact" className="hover:opacity-50">
        Resume
      </Link>
    </div>
  );
};

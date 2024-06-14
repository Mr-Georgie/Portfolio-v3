import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Switch } from "../ui/switch";

export const Navbar = () => {
  const { onDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between py-8">
      <div className="flex items-center space-x-2">
        <Label htmlFor="light-mode">☀️</Label>
        <Switch
          id="dark-mode"
          checked={onDarkMode}
          onCheckedChange={toggleTheme}
        />
        <Label htmlFor="dark-mode">🌙</Label>
      </div>
      <div className="gap-4 hidden md:flex">
        <Link href="/" className="hover:opacity-50">
          Home
        </Link>
        <Link href="/experiences" className="hover:opacity-50">
          Experiences
        </Link>
        <Link href="/contact" className="hover:opacity-50">
          Contact
        </Link>
        <Link href="/resume" className="hover:opacity-50">
          Resume
        </Link>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="gap-4 flex flex-col">
              <Link href="/" className="hover:opacity-50">
                Home
              </Link>
              <Link href="/experiences" className="hover:opacity-50">
                Experiences
              </Link>
              <Link href="/contact" className="hover:opacity-50">
                Contact
              </Link>
              <Link href="/resume" className="hover:opacity-50">
                Resume
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

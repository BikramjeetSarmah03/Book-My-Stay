import Link from "next/link";
import { BlindsIcon, GithubIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-blue-900 p-4 text-white text-lg flex items-center justify-between">
      <div>
        <Link
          href={"https://github.com/BikramjeetSarmah03/Book-My-Stay/tree/new"}>
          <GithubIcon />
        </Link>
      </div>

      <Link href={"/"} className="flex items-center gap-2">
        <span className="font-serif text-xl hidden md:block">Book My Stay</span>
        <BlindsIcon />
      </Link>
    </div>
  );
}

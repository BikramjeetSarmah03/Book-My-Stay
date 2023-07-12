import Link from "next/link";
import { HiOutlinePaperAirplane } from "react-icons/hi";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center space-x-2 text-rose-500">
      <HiOutlinePaperAirplane className="w-6 h-6" />
      <span className="hidden text-lg font-bold sm:block">Book My Stay</span>
    </Link>
  );
}

import Link from "next/link";
import { BlindsIcon, CircleUserRoundIcon, MenuIcon } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <div className="p-4 bg-blue-900 text-white flex items-center justify-between">
      <Link href={"/"} className="flex items-center gap-2">
        <BlindsIcon />
        <span className="font-serif text-xl hidden md:block">Book My Stay</span>
      </Link>

      <div className="flex items-center">
        <Link
          href={"/sign-up"}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "hover:bg-gray-100/10 hover:text-white"
          )}>
          <CircleUserRoundIcon />
        </Link>

        <Button
          variant={"ghost"}
          className="hover:bg-gray-100/10 hover:text-white">
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
}

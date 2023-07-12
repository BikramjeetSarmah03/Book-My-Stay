"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../common/Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100"
          onClick={() => {}}>
          Airbnb your home
        </div>

        <div
          className="flex flex-row items-center gap-3 p-4 transition border rounded-full cursor-pointer md:py-1 md:px-2 border-neutral-200 hover:shadow-sm"
          onClick={() => toogleOpen()}>
          <AiOutlineMenu />

          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sign up" />
            </>
          </div>
        </div>
      ) : null}
    </div>
  );
}

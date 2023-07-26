"use client";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../common/Avatar";
import MenuItem from "./MenuItem";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

export default function UserMenu({ currentUser }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const toogleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100"
          onClick={() => {}}>
          BMS your home
        </div>

        <div
          className="flex flex-row items-center gap-3 p-4 transition border rounded-full cursor-pointer md:py-1 md:px-2 border-neutral-200 hover:shadow-sm"
          onClick={() => toogleOpen()}>
          <AiOutlineMenu />

          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My Trips" />
                <MenuItem onClick={() => {}} label="My Favorites" />
                <MenuItem onClick={() => {}} label="My Reservations" />
                <MenuItem onClick={() => {}} label="My Properties" />
                <MenuItem onClick={() => {}} label="BMS my Home" />
                <hr />
                <MenuItem
                  onClick={() => {
                    signOut();
                    toast.success("Logout Successfully");
                  }}
                  label="Logout"
                />
              </>
            ) : (
              <>
                <MenuItem onClick={() => loginModal.onOpen()} label="Login" />
                <MenuItem
                  onClick={() => registerModal.onOpen()}
                  label="Sign up"
                />
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

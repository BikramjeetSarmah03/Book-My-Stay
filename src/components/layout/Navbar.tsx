"use client";

import { SafeUser } from "@/types";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

export default function Navbar({ currentUser }: NavbarProps) {
  return (
    <header className="fixed z-10 w-full bg-white shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </header>
  );
}

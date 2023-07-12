"use client";

import Container from "../common/Container";
import Logo from "../common/Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <header className="fixed z-10 w-full bg-white shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </header>
  );
}

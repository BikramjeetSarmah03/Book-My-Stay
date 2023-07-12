import Link from "next/link";
import Container from "../common/Container";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="shadow-[0_-1px_2px_rgba(0,0,0,0.1)]  mt-4">
      <Container>
        <div className="flex items-center justify-between w-full py-4 ">
          <div>
            ©2023 <span className="font-bold text-rose-500">Book My Stay</span>,
            Inc
          </div>
          <div className="flex items-center space-x-4 font-bold">
            <h1>English (IN)</h1>
            <h2>₹ INR</h2>

            <Link
              href={"https://github.com/bikramjeetSarmah03/khati/"}
              target="_blank"
              className="-mt-1">
              <AiFillGithub size={24} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

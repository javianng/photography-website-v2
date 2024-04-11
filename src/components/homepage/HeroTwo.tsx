import { Link } from "lucide-react";
import Container from "../common/Container";

export default function HeroTwo() {
  return (
    <div className="bg-neutral-100 shadow">
      <Container>
        <div className="flex flex-col items-center gap-6 py-14 md:flex-row">
          <div className="max-w mockup-window w-full border bg-base-300 md:w-1/3">
            <iframe
              src={"https://portfolio-website-pearl-tau.vercel.app/"}
              className="h-[70vh] max-h-[35rem] w-full"
            />
          </div>
          <div>
            <h1 className="text-5xl font-light text-brand-300 sm:text-6xl xl:text-7xl">
              I also love{" "}
              <span className="font-mono font-semibold text-red-400">
                Coding
              </span>
              .
            </h1>
            <h2 className="text-3xl font-extralight text-brand-200 sm:text-4xl xl:text-5xl">
              Check out my other website!
            </h2>
            <a href="https://portfolio-website-pearl-tau.vercel.app/">
              <Link className="mt-4 h-12 w-12 transition duration-150 hover:text-neutral-500" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

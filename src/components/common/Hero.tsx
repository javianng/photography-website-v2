import Container from "./Container";
import Image from "next/image";
import myself from "public/myself.jpg";

export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4 py-14 md:flex-row">
        <div>
          <h1 className="text-5xl font-light text-brand-300 sm:text-6xl xl:text-7xl">
            Hi there! I am <span className="font-semibold">Javian</span>.
          </h1>
          <h2 className="text-3xl font-extralight text-brand-200 sm:text-4xl xl:text-5xl">
            I am a hobbyist street photographer who loves to capture the beauty
            of the world.
          </h2>
        </div>
        <Image
          src={myself}
          alt={"myself"}
          className="h-fit max-w-xs rounded-lg shadow-2xl sm:max-w-sm"
        />
      </div>
    </Container>
  );
}

import Container from "~/components/common/Container";
import PageLayout from "~/components/common/PageLayout";
import Image from "next/image";
import myself from "public/myself.jpg";
import { Building, CalendarCheck2, Trees, Users } from "lucide-react";

type Props = {
  href: string;
  type: string;
};

const SOCIAL_MEDIA_DETAILS = [
  {
    href: "https://www.instagram.com/shotbyj.av/",
    type: "Instagram",
  },
  {
    href: "https://t.me/javianng",
    type: "Telegram",
  },
  {
    href: "https://www.linkedin.com/in/javianngzh/",
    type: "LinkedIn",
  },
  {
    href: "https://flickr.com/people/shotbyjav/",
    type: "Flickr",
  },
  {
    href: "mailto:shotbyj.av@gmail.com",
    type: "Email",
  },
];

export default function AboutMe() {
  return (
    <PageLayout>
      <main>
        <div className="h-16 bg-brand-300" />
        <Container>
          <div className="flex flex-col items-center gap-4 py-14 md:flex-row">
            <div>
              <h1 className="text-5xl font-light text-brand-300 sm:text-6xl xl:text-7xl">
                Hi there! I am <span className="font-semibold">Javian</span>.
              </h1>
              <h2 className="text-3xl font-extralight text-neutral-800 sm:text-4xl xl:text-5xl">
                I am a hobbyist street photographer who loves to capture the
                beauty of the world.
              </h2>
            </div>
            <Image
              src={myself}
              alt={"myself"}
              className="h-fit max-w-xs rounded-lg shadow-2xl sm:max-w-sm"
            />
          </div>

          <hr className="border-neutral-800" />

          <div className="flex flex-col items-center gap-4 py-14 md:flex-row">
            <div>
              <h2 className="text-3xl font-extralight text-neutral-800 sm:text-4xl xl:text-5xl">
                I mainly dabble in 4 types of photography: street, landscape,
                events and casual portraits of my partner in crime.
              </h2>
              <div className="grid grid-cols-2 gap-4 py-24 sm:grid-cols-4">
                <div className="flex flex-col items-center transition duration-300 hover:translate-y-4">
                  <Building className="h-full w-full max-w-[5rem]" />
                  <h3 className="text-xl font-thin sm:text-2xl xl:text-3xl">
                    street
                  </h3>
                </div>
                <div className="flex flex-col items-center transition duration-300 hover:translate-y-4">
                  <Trees className="h-full w-full max-w-[5rem]" />
                  <h3 className="text-xl font-thin sm:text-2xl xl:text-3xl">
                    landscape
                  </h3>
                </div>
                <div className="flex flex-col items-center transition duration-300 hover:translate-y-4">
                  <CalendarCheck2 className="h-full w-full max-w-[5rem]" />
                  <h3 className="text-xl font-thin sm:text-2xl xl:text-3xl">
                    event
                  </h3>
                </div>
                <div className="flex flex-col items-center transition duration-300 hover:translate-y-4">
                  <Users className="h-full w-full max-w-[5rem]" />
                  <h3 className="text-xl font-thin sm:text-2xl xl:text-3xl">
                    portrait
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-neutral-800" />

          <div className="py-14">
            <h1 className="text-5xl font-light text-brand-300 sm:text-6xl xl:text-7xl">
              You can <span className="font-semibold">Reach Me at</span>:
            </h1>
            <div className="flex flex-col gap-4 pt-4">
              {SOCIAL_MEDIA_DETAILS.map(({ href, type }: Props, i) => (
                <a
                  href={href}
                  key={i}
                  className="w-fit text-3xl font-extralight text-neutral-800 transition duration-300 
                                        hover:translate-x-4 hover:text-brand-200 sm:text-4xl xl:text-5xl"
                >
                  {type}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </main>
    </PageLayout>
  );
}

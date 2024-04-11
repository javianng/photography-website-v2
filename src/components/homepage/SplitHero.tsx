import Image from "next/image";
import type { StaticImageData } from "next/image";

// Images

import StreetCover from "/public/CityScape/CityScape1.jpg";
import EventCover from "public/NOCCareerLaunchpad/NOCCareerLaunchpad12.jpg";

type OptionProps = {
  image: string | StaticImageData;
  header: string;
  href: string;
};

const OPTION_DETAILS = [
  {
    image: StreetCover,
    header: "street",
    href: "/StreetAndLandscape",
  },
  {
    image: EventCover,
    header: "events",
    href: "/Events",
  },
];

export default function SplitHero() {
  return (
    <div>
      <div className="flex flex-col pt-9 sm:flex-row">
        {OPTION_DETAILS.map(({ image, header, href }: OptionProps, i) => (
          <a href={href} key={i}>
            <div
              key={i}
              className="relative h-full w-full grayscale transition duration-300 hover:grayscale-0"
            >
              <Image
                src={image}
                alt={header}
                className="z-0 flex h-full w-full object-cover object-center"
              />
              <h1
                className="absolute bottom-[13%] left-[8%] z-50 
                                text-5xl font-extralight uppercase text-white sm:text-6xl xl:text-7xl"
              >
                {header}
              </h1>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

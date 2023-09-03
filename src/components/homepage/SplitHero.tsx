import Image from "next/image"
import type { StaticImageData } from "next/image";

// Images

import StreetCover from "/public/CityScape/CityScape1.jpg"
import EventCover from "public/NOCCareerLaunchpad/NOCCareerLaunchpad12.jpg"

type OptionProps = {
    image: string | StaticImageData;
    header: string;
    href: string;
}

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
]

export default function SplitHero() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row pt-9">
                {OPTION_DETAILS.map(({ image, header, href }: OptionProps, i) => (
                    <a href={href} key={i}>
                        <div key={i} className="relative h-full w-full grayscale hover:grayscale-0 transition duration-300">
                            <Image src={image} alt={header} className="flex object-cover object-center z-0 w-full h-full" />
                            <h1 className="absolute bottom-[13%] left-[8%] z-50 
                                text-5xl sm:text-6xl xl:text-7xl font-extralight text-white uppercase">
                                {header}
                            </h1>
                        </div>
                    </a>
                ))}
            </div >
        </div>
    )
}
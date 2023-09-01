import Image from "next/image"
import type { StaticImageData } from "next/image";

// Images

import myself from "public/myself.jpg"

type OptionProps = {
    image: string | StaticImageData;
    header: string;
    href: string;
}

const OPTION_DETAILS = [
    {
        image: myself,
        header: "street",
        href: "/",
    },
    {
        image: myself,
        header: "event",
        href: "/",
    },

]

export default function SplitHero() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row h-fit pt-9">
                {OPTION_DETAILS.map(({ image, header, href }: OptionProps, i) => (
                    <a href={href} key={i}>
                        <div key={i} className="flex grayscale hover:grayscale-0 transition duration-300">
                            <Image src={image} alt={header} className="flex object-cover object-center" />
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
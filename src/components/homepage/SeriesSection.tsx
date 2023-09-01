import Container from "../common/Container";
import Image from "next/image"
import type { StaticImageData } from "next/image";

// Images

import myself from "public/myself.jpg"

type OptionProps = {
    image: string | StaticImageData;
    title: string;
    subtitle: string;
    href: string;
}

const OPTION_DETAILS = [
    {
        image: myself,
        title: "asdas",
        subtitle: "sasdans",
        href: "/",
    },
    {
        image: myself,
        title: "asdas",
        subtitle: "sasdans",
        href: "/",
    },
    {
        image: myself,
        title: "asdas",
        subtitle: "sasdans",
        href: "/",
    },
    {
        image: myself,
        title: "asdas",
        subtitle: "sasdans",
        href: "/",
    },
    {
        image: myself,
        title: "asdas",
        subtitle: "sasdans",
        href: "/",
    },
    {
        image: myself,
        title: "asdas",
        subtitle: "sasdans",
        href: "/",
    },
]

export default function SeriesSection() {
    return (
        <Container>
            <div className="py-14">
                <h1 className="text-xl text-brand-300 font-extralight text-center">
                    Featured
                </h1>
                <h2 className="text-xl sm:text-3xl xl:text-5xl text-brand-300 font-light text-center">
                    Series Posts
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 pt-14">
                    {OPTION_DETAILS.map(({ image, title, subtitle, href }: OptionProps, i) => (
                        <a href={href}>
                            <div className="relative">
                                <div key={i} className="flex aspect-square">
                                    <Image src={image} alt={title} className="flex object-cover object-center" />
                                </div>
                                <h1 className="absolute z-50 bottom-24 w-full
                                    text-2xl font-extralight text-white text-center">
                                    {title}
                                </h1>
                                <h1 className="absolute z-50 bottom-12 w-full
                                    text-2xl font-extralight text-white text-center">
                                    {title}
                                </h1>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </Container>
    )
}
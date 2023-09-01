import Image from "next/image"
import type { StaticImageData } from "next/image";

// Images

import myself from "public/myself.jpg"

type OptionProps = {
    image: string | StaticImageData;
    href: string;
}

const OPTION_DETAILS = [
    {
        image: myself,
        href: "/",
    },
    {
        image: myself,
        href: "/",
    },
    {
        image: myself,
        href: "/",
    },
    {
        image: myself,
        href: "/",
    },
    {
        image: myself,
        href: "/",
    },
    {
        image: myself,
        href: "/",
    },
    {
        image: myself,
        href: "/",
    },
    {
        image: myself,
        href: "/",
    },
]

export default function InstagramSection() {
    return (
        <div className="py-14">
            <h1 className="text-xl text-brand-300 font-extralight text-center">Follow me on Instagram</h1>
            <div className="flex justify-center">
                <div className="flex flex-row gap-3 pt-14 px-4 overflow-scroll">
                    {OPTION_DETAILS.map(({ image, href }: OptionProps, i) => (
                        <a href={href} key={i}>
                            <div className="flex aspect-square w-[90vw] max-w-sm">
                                <Image
                                    src={image}
                                    alt="ig post"
                                    className="object-cover object-center shadow hover:brightness-110 hover:contrast-75 transition duration-300"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
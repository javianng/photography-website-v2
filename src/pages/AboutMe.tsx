
import Container from "~/components/common/Container";
import PageLayout from "~/components/common/PageLayout";
import Image from "next/image"
import myself from "public/myself.jpg"
import { Building, CalendarCheck2, Trees, Users } from "lucide-react";

type Props = {
    href: string;
    type: string;
}

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
]

export default function AboutMe() {
    return (
        <PageLayout>
            <main>
                <div className="h-16 bg-brand-300" />
                <Container>
                    <div className="flex flex-col md:flex-row items-center py-14 gap-4">
                        <div>
                            <h1 className="text-5xl sm:text-6xl xl:text-7xl text-brand-300 font-light">
                                Hi there! I am <span className="font-semibold">Javian</span>.
                            </h1>
                            <h2 className="text-3xl sm:text-4xl xl:text-5xl text-neutral-800 font-extralight">
                                I am a hobbyist street photographer who loves to capture the beauty of the world.
                            </h2>
                        </div>
                        <Image src={myself} alt={"myself"} className="h-fit max-w-xs sm:max-w-sm rounded-lg shadow-2xl" />
                    </div>

                    <hr className="border-neutral-800" />

                    <div className="flex flex-col md:flex-row items-center py-14 gap-4">
                        <div>
                            <h2 className="text-3xl sm:text-4xl xl:text-5xl text-neutral-800 font-extralight">
                                I mainly dabble in 4 types of photography: street, landscape, events and casual portraits of my partner in crime.
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-24">
                                <div className="flex flex-col items-center hover:translate-y-4 transition duration-300">
                                    <Building className="w-full h-full max-w-[5rem]" />
                                    <h3 className="text-xl sm:text-2xl xl:text-3xl font-thin">
                                        street
                                    </h3>
                                </div>
                                <div className="flex flex-col items-center hover:translate-y-4 transition duration-300">
                                    <Trees className="w-full h-full max-w-[5rem]" />
                                    <h3 className="text-xl sm:text-2xl xl:text-3xl font-thin">
                                        landscape
                                    </h3>
                                </div>
                                <div className="flex flex-col items-center hover:translate-y-4 transition duration-300">
                                    <CalendarCheck2 className="w-full h-full max-w-[5rem]" />
                                    <h3 className="text-xl sm:text-2xl xl:text-3xl font-thin">
                                        event
                                    </h3>
                                </div>
                                <div className="flex flex-col items-center hover:translate-y-4 transition duration-300">
                                    <Users className="w-full h-full max-w-[5rem]" />
                                    <h3 className="text-xl sm:text-2xl xl:text-3xl font-thin">
                                        portrait
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="border-neutral-800" />

                    <div className="py-14">
                        <h1 className="text-5xl sm:text-6xl xl:text-7xl text-brand-300 font-light">
                            You can <span className="font-semibold">Reach Me at</span>:
                        </h1>
                        <div className="flex flex-col gap-4 pt-4">
                            {SOCIAL_MEDIA_DETAILS
                                .map(({ href, type }: Props, i) => (
                                    <a href={href} className="text-3xl sm:text-4xl xl:text-5xl text-neutral-800 font-extralight w-fit 
                                        hover:translate-x-4 transition duration-300 hover:text-brand-200">
                                        {type}
                                    </a>
                                ))}
                        </div>
                    </div>

                </Container>
            </main>
        </PageLayout>
    )
}
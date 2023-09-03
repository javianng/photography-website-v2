import Image from "next/image"
import type { StaticImageData } from "next/image"
import { SERIES_DETAILS } from "~/components/ImageDetails";
import Container from "~/components/common/Container";
import PageLayout from "~/components/common/PageLayout";

type SeriesProps = {
    image: string | StaticImageData;
    title: string;
    subtitle: string;
    href: string;
}

export default function Series() {
    return (
        <PageLayout>
            <main>
                <div className="h-16 bg-brand-300" />
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-9 py-14">
                        {SERIES_DETAILS.map(({ image, title, subtitle, href }: SeriesProps, i) => (
                            <a href={href} key={i}>
                                <div className="relative hover:scale-105 transition duration-300 shadow">
                                    <div key={i} className="flex aspect-square">
                                        <Image src={image} alt={title} width={800} height={800} className="flex w-full h-full object-cover object-center" />
                                    </div>
                                    <h1 className="absolute z-50 bottom-20 w-full
                                    text-xl font-thin text-white text-center">
                                        {title}
                                    </h1>
                                    <h1 className="absolute z-50 bottom-12 w-full
                                    text-2xl font-extralight text-white text-center line-clamp-1">
                                        {subtitle}
                                    </h1>
                                </div>
                            </a>
                        ))}
                    </div>
                </Container>
            </main>
        </PageLayout>
    )
}
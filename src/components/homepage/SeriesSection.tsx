import Container from "../common/Container";
import Image from "next/image"
import type { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { SERIES_DETAILS } from "../ImageDetails";
import Link from "next/link";

type SeriesProps = {
    image: string | StaticImageData;
    title: string;
    subtitle: string;
    href: string;
}

export default function SeriesSection() {
    const [cardsPerPage, setCardsPerPage] = useState(3);
    useEffect(() => {
        const updateCardsPerPage = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) {
                setCardsPerPage(3);
            } else if (screenWidth < 768) {
                setCardsPerPage(4);
            } else {
                setCardsPerPage(6);
            }
        };
        updateCardsPerPage();
        window.addEventListener('resize', updateCardsPerPage);
        return () => {
            window.removeEventListener('resize', updateCardsPerPage);
        };
    }, []);
    return (
        <div className="shadow">
            <Container>
                <div className="py-14">
                    <h1 className="text-xl text-brand-300 font-extralight text-center">
                        Featured
                    </h1>
                    <h2 className="text-xl sm:text-3xl xl:text-5xl text-brand-300 font-light text-center">
                        Series Posts
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-9 py-14">
                        {SERIES_DETAILS.slice(0, cardsPerPage).map(({ image, title, subtitle, href }: SeriesProps, i) => (
                            <a href={href} key={i}>
                                <div className="relative hover:scale-105 transition duration-300 shadow">
                                    <div key={i} className="flex aspect-square">
                                        <Image src={image} alt={title} width={800} height={800} className="flex object-cover object-center" />
                                    </div>
                                    <h1 className="absolute z-50 bottom-20 w-full
                                    text-xl font-thin text-white text-center">
                                        {title}
                                    </h1>
                                    <h1 className="absolute z-50 bottom-12 w-full
                                    text-2xl font-extralight text-white text-center">
                                        {subtitle}
                                    </h1>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="w-full">
                        <Link href="/Series" className="flex justify-center">
                            <div className="btn">
                                View All Series
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
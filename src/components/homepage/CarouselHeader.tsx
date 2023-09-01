import Container from "../common/Container";
import Image from "next/image";
import { Autoplay, Pagination } from 'swiper/modules';
import { IMAGE_DETAILS } from "../ImageDetails";
import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react';
import { MoveRight, MoveLeft } from 'lucide-react';
import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

type ImageProps = {
    image: string | StaticImageData;
    alt: string;
    tag: string[];
}

function NavigationArrow() {
    const swiper = useSwiper();
    return (
        <div className="absolute bottom-8 z-50 w-screen">
            <Container>
                <div className="flex flex-row justify-center">
                    <button onClick={() => swiper.slidePrev()}>
                        <MoveLeft className="text-white hover:text-neutral-200 hover:scale-110 transition duration-200" />
                    </button>
                    <div className="px-16" />
                    <button onClick={() => swiper.slideNext()}>
                        <MoveRight className="text-white hover:text-neutral-200 hover:scale-110 transition duration-100" />
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default function CarouselHeader() {
    return (
        <Swiper
            loop={true}
            slidesPerView={1}
            navigation={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                dynamicBullets: true,
            }}
            style={{
                "--swiper-pagination-color": "#ffffff",
                "--swiper-navigation-color": "#ffffff",
                "--swiper-pagination-bottom": "2.4rem",
                "--swiper-pagination-bullet-inactive-color": "#fff"
            } as CSSProperties}
        >
            {IMAGE_DETAILS.map(({ image, alt, tag }: ImageProps, i) => (
                <SwiperSlide key={i}>
                    <div className="flex w-screen h-screen">
                        <Image src={image} alt={alt} layout="fill" objectFit="cover"
                        />
                    </div>
                </SwiperSlide>
            ))}
            <hr className="absolute bottom-24 w-full z-50 justify-center" />
            <NavigationArrow />
        </Swiper>
    )
}
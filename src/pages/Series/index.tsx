import Image from "next/image";
import type { StaticImageData } from "next/image";
import { SERIES_DETAILS } from "~/components/ImageDetails";
import Container from "~/components/common/Container";
import PageLayout from "~/components/common/PageLayout";

type SeriesProps = {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  href: string;
};

export default function Series() {
  return (
    <PageLayout>
      <main>
        <div className="h-16 bg-brand-300" />
        <Container>
          <div className="grid grid-cols-1 gap-4 py-14 sm:grid-cols-2 sm:gap-9 md:grid-cols-3">
            {SERIES_DETAILS.map(
              ({ image, title, subtitle, href }: SeriesProps, i) => (
                <a href={href} key={i}>
                  <div className="relative shadow transition duration-300 hover:scale-105">
                    <div key={i} className="flex aspect-square">
                      <Image
                        src={image}
                        alt={title}
                        width={800}
                        height={800}
                        className="flex h-full w-full object-cover object-center"
                      />
                    </div>
                    <h1
                      className="absolute bottom-20 z-50 w-full
                                    text-center text-xl font-thin text-white"
                    >
                      {title}
                    </h1>
                    <h1
                      className="absolute bottom-12 z-50 line-clamp-1
                                    w-full text-center text-2xl font-extralight text-white"
                    >
                      {subtitle}
                    </h1>
                  </div>
                </a>
              ),
            )}
          </div>
        </Container>
      </main>
    </PageLayout>
  );
}

import type { NextPage } from "next";
import PageLayout from "~/components/common/PageLayout";

import CarouselHeader from "~/components/homepage/CarouselHeader";
import Hero from "~/components/homepage/Hero";
import SplitHero from "~/components/homepage/SplitHero";
import SeriesSection from "~/components/homepage/SeriesSection";
import InstagramSection from "~/components/homepage/InstagramSection";

const Home: NextPage = () => {
    return (
        <PageLayout>
            <main>
                <CarouselHeader />
                <Hero />
                <SplitHero />
                <SeriesSection />
                <InstagramSection />
            </main>
        </PageLayout>
    );
};

export default Home;
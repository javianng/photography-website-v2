import type { NextPage } from "next";
import PageLayout from "~/components/common/PageLayout";
import CarouselHeader from "~/components/homepage/CarouselHeader";
import Hero from "~/components/homepage/Hero";
import SplitHero from "~/components/homepage/SplitHero";

const Home: NextPage = () => {
    return (
        <PageLayout>
            <main>
                <CarouselHeader />
                <Hero />
                <SplitHero />
            </main>
        </PageLayout>
    );
};

export default Home;
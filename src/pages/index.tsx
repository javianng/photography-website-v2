import type { NextPage } from "next";
import PageLayout from "~/components/common/PageLayout";

import CarouselHeader from "~/components/homepage/CarouselHeader";
import Hero from "~/components/common/Hero";
import SplitHero from "~/components/homepage/SplitHero";
import SeriesSection from "~/components/homepage/SeriesSection";
import InstagramSection from "~/components/homepage/InstagramSection";
import HeroTwo from "~/components/homepage/HeroTwo";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <main>
        <CarouselHeader />
        <Hero />
        <SplitHero />
        <SeriesSection />
        <HeroTwo />
        <InstagramSection />
      </main>
    </PageLayout>
  );
};

export default Home;

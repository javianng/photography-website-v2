import Image from "next/image";
import Container from "~/components/common/Container";
import Gallery from "~/components/common/Gallery";
import PageLayout from "~/components/common/PageLayout";
import coverImage from "/public/NOCCareerLaunchpad/NOCCareerLaunchpad4.jpg"

export default function NOCCareerLaunchpad() {
    return (
        <PageLayout>
            <main>
                <div className="h-16 bg-brand-300" />
                <Container>
                    <div className="flex pt-4 pb-16">
                        <Image src={coverImage} className=" object-cover" alt={"street cover image"} />
                    </div>
                    <div className="py-16">
                        <h1 className="text-5xl sm:text-6xl xl:text-7xl text-brand-300 font-semibold">
                            NOC x Career Launchpad
                        </h1>
                        <h2 className="text-3xl sm:text-4xl xl:text-5xl text-brand-200 font-extralight">
                            Launching Your Dream Career
                        </h2>
                    </div>
                    <Gallery filterString="NOCCareerLaunchpad" />
                </Container>
            </main>
        </PageLayout>
    )
} 
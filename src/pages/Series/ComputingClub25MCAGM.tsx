import Image from "next/image";
import Container from "~/components/common/Container";
import Gallery from "~/components/common/Gallery";
import PageLayout from "~/components/common/PageLayout";
import coverImage from "/public/ComputingClub25MCAGM/ComputingClub25MCAGM16.jpg"

export default function ComputingClub25MCAGM() {
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
                            Computing Club 25th MC Annual General Meeting
                        </h1>
                        <h2 className="text-3xl sm:text-4xl xl:text-5xl text-brand-200 font-extralight">
                            Code, Connect, Celebrate
                        </h2>
                    </div>
                    <Gallery filterString="ComputingClub25MCAGM" />
                </Container>
            </main>
        </PageLayout>
    )
} 
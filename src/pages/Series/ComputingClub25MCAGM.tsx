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
                    <Gallery filterString="ComputingClub25MCAGM" />
                </Container>
            </main>
        </PageLayout>
    )
} 
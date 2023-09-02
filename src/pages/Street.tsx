import Container from "~/components/common/Container";
import Gallery from "~/components/common/Gallery";
import PageLayout from "~/components/common/PageLayout";

import coverImage from "/public/CityScape/CityScape8.jpg"
import Image from "next/image";

export default function Street() {
    return (
        <PageLayout>
            <main>
                <div className="h-16 bg-brand-300" />
                <Container>
                    <div className="flex pt-4 pb-16">
                        <Image src={coverImage} className=" object-cover" alt={"street cover image"} />
                    </div>
                    <Gallery filterString="street" />
                </Container>
            </main>
        </PageLayout>
    )
}
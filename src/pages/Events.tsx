import Container from "~/components/common/Container";
import Gallery from "~/components/common/Gallery";
import PageLayout from "~/components/common/PageLayout";

import coverImage from "/public/NOCCareerLaunchpad/NOCCareerLaunchpad16.jpg";
import Image from "next/image";

export default function Events() {
  return (
    <PageLayout>
      <main>
        <div className="h-16 bg-brand-300" />
        <Container>
          <div className="flex pb-16 pt-4">
            <Image
              src={coverImage}
              className=" object-cover"
              alt={"events cover image"}
            />
          </div>
          <Gallery filterString="event" />
        </Container>
      </main>
    </PageLayout>
  );
}

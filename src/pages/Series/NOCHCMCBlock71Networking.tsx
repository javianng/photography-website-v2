import Image from "next/image";
import Container from "~/components/common/Container";
import Gallery from "~/components/common/Gallery";
import PageLayout from "~/components/common/PageLayout";
import coverImage from "/public/NOCHCMCBlock71Networking/NOCHCMCBlock71Networking9.jpg";

export default function NOCHCMCBlock71Networking() {
  return (
    <PageLayout>
      <main>
        <div className="h-16 bg-brand-300" />
        <Container>
          <div className="flex pb-16 pt-4">
            <Image
              src={coverImage}
              className=" object-cover"
              alt={"street cover image"}
            />
          </div>
          <div className="py-16">
            <h1 className="text-5xl font-semibold text-brand-300 sm:text-6xl xl:text-7xl">
              NOC HCMC Block71 Networking
            </h1>
            <h2 className="text-3xl font-extralight text-brand-200 sm:text-4xl xl:text-5xl">
              Building Connections
            </h2>
          </div>
          <Gallery filterString="NOCHCMCBlock71Networking" />
        </Container>
      </main>
    </PageLayout>
  );
}

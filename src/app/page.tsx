"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import LoadingPage from "~/components/ui/LoadingPage";
import { LayoutGrid } from "lucide-react";

interface Photoset {
  id: string;
  server: string;
  primary: string;
  secret: string;
  title: {
    _content: string;
  };
}

interface Photo {
  id: string;
  server: string;
  secret: string;
  title: string;
}

export default function Home() {
  const [photosets, setPhotosets] = useState<Photoset[]>([]);
  const [carouselPhotos, setCarouselPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPhotosets = async () => {
      try {
        // Fetch the photosets (albums)
        const response = await axios.get<{
          photosets: { photoset: Photoset[] };
        }>(
          "https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=521e8b255af8876e8e360b43bc80f910&user_id=185878362@N05&format=json&nojsoncallback=1",
        );
        setPhotosets(response.data.photosets.photoset);

        // Fetch the images for the carousel from the first album
        const firstAlbumId = response.data.photosets.photoset?.[0]?.id;
        if (!firstAlbumId) {
          throw new Error("No photosets found");
        }
        const photoResponse = await axios.get<{
          photoset: { photo: Photo[] };
        }>(
          `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=521e8b255af8876e8e360b43bc80f910&user_id=185878362@N05&photoset_id=${firstAlbumId}&format=json&nojsoncallback=1`,
        );
        setCarouselPhotos(photoResponse.data.photoset.photo);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photosets or carousel photos:", error);
      }
    };

    void fetchPhotosets();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <main className="container flex flex-col items-center py-10">
      <section className="flex w-2/3 flex-col items-center gap-3 py-6">
        <h1 className="text-xl">Street Landscape Photographer</h1>
        <p className="text-justify text-sm font-thin">
          Wandering through the streets and capturing moments that often go
          unnoticed. Every corner holds a story, and every horizon whispers of
          distant lands waiting to be explored.
        </p>
        <LayoutGrid
          className="mt-10 fill-neutral-500 stroke-neutral-500"
          width={20}
          height={20}
        />
      </section>
      <section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {photosets.map((set) => (
            <Button
              key={set.id}
              variant="none"
              size="none"
              onClick={() => router.push(`/photoset/${set.id}`)}
              className="group"
            >
              <div className="relative">
                <Image
                  src={`https://live.staticflickr.com/${set.server}/${set.primary}_${set.secret}_c.jpg`}
                  alt={set.title._content}
                  width={300}
                  height={300}
                  className="aspect-square object-cover object-center"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-70">
                  <h2 className="pt-4 font-thin text-white">
                    {set.title._content}
                  </h2>
                  <small className="font-thin text-white">view album</small>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </section>
    </main>
  );
}

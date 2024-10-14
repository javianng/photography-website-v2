"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import LoadingPage from "~/components/ui/LoadingPage";

interface Photo {
  id: string;
  server: string;
  secret: string;
  title: string;
}

interface Params {
  id: string;
}

const Photoset = ({ params }: { params: Params }) => {
  const { id } = params;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get<{ photoset: { photo: Photo[] } }>(
          `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=521e8b255af8876e8e360b43bc80f910&user_id=185878362@N05&photoset_id=${id}&format=json&nojsoncallback=1`,
        );
        setPhotos(response.data.photoset.photo);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    void fetchPhotos();
  }, [id]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="p-4">
      <Button
        variant="secondary"
        onClick={() => router.back()}
        className="mb-4"
      >
        Back to Albums
      </Button>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {photos.map((photo) => (
          <div key={photo.id}>
            <Image
              src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`}
              alt={photo.title}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photoset;

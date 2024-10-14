"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

interface Photoset {
  id: string;
  server: string;
  primary: string;
  secret: string;
  title: {
    _content: string;
  };
}

export default function Home() {
  const [photosets, setPhotosets] = useState<Photoset[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPhotosets = async () => {
      try {
        const response = await axios.get<{
          photosets: { photoset: Photoset[] };
        }>(
          "https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=521e8b255af8876e8e360b43bc80f910&user_id=185878362@N05&format=json&nojsoncallback=1",
        );
        setPhotosets(response.data.photosets.photoset);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photosets:", error);
      }
    };

    void fetchPhotosets();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Photo Albums</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {photosets.map((set) => (
          <div key={set.id} className="text-center">
            <Image
              src={`https://live.staticflickr.com/${set.server}/${set.primary}_${set.secret}_c.jpg`}
              alt={set.title._content}
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h2 className="mt-2 text-lg font-medium">{set.title._content}</h2>
            <Button
              onClick={() => router.push(`/photoset/${set.id}`)}
              className="mt-2"
            >
              View Album
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

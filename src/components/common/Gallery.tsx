import Image from "next/image";
import { IMAGE_DETAILS } from "../ImageDetails";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

type GalleryProps = {
  filterString?: string;
};

type ImageProps = {
  image: string;
  alt: string;
};

export default function Gallery({ filterString }: GalleryProps) {
  if (filterString != null) {
    return (
      <PhotoProvider>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {IMAGE_DETAILS.filter(({ tag }) => tag.includes(filterString)).map(
            ({ image, alt }: ImageProps, i) => (
              <PhotoView key={i} src={image}>
                <div
                  key={i}
                  className="flex aspect-square max-w-sm cursor-pointer bg-neutral-100 shadow"
                >
                  <Image
                    src={image}
                    alt={alt}
                    height={300}
                    width={300}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              </PhotoView>
            ),
          )}
        </div>
      </PhotoProvider>
    );
  } else {
    return (
      <PhotoProvider>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {IMAGE_DETAILS.map(({ image, alt }: ImageProps, i) => (
            <PhotoView key={i} src={image}>
              <div
                key={i}
                className="flex aspect-square max-w-sm bg-neutral-100"
              >
                <Image
                  src={image}
                  alt={alt}
                  height={300}
                  width={300}
                  className="h-full w-full object-cover"
                />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    );
  }
}

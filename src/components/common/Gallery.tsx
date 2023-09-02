import { IMAGE_DETAILS } from "../ImageDetails";
import Image, { StaticImageData } from "next/image"

type GalleryProps = {
    filterString?: string;
}

type ImageProps = {
    image: string | StaticImageData;
    alt: string;
}

export default function Gallery({ filterString }: GalleryProps) {
    if (filterString != null) {
        return (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGE_DETAILS
                .filter(({ tag }) => tag.includes(filterString))
                .map(({ image, alt }: ImageProps, i) => (
                    <div key={i} className="flex max-w-sm aspect-square bg-neutral-100">
                        <Image src={image} alt={alt} height={300} width={300} className="h-full w-full object-cover" />
                    </div>
                ))}
        </div>)
    } else {
        return (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGE_DETAILS
                .map(({ image, alt }: ImageProps, i) => (
                    <div key={i} className="flex max-w-sm aspect-square bg-neutral-100">
                        <Image src={image} alt={alt} height={300} width={300} className="h-full w-full object-cover" />
                    </div>
                ))}
        </div>
        )
    }
}
import { InstagramEmbed } from "react-social-media-embed";
import { INSTAGRAM_IMAGE_DETAILS } from "../ImageDetails";

export default function InstagramSection() {
  return (
    <div className="py-14">
      <h1 className="text-center text-xl font-extralight text-brand-300">
        Follow me on Instagram
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-row gap-5 overflow-scroll px-4 pt-14">
          {INSTAGRAM_IMAGE_DETAILS.map((href, i) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              key={i}
            >
              <InstagramEmbed url={href} width="100%" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

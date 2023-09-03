import { InstagramEmbed } from "react-social-media-embed";
import { INSTAGRAM_IMAGE_DETAILS } from "../ImageDetails";

export default function InstagramSection() {
    return (
        <div className="py-14">
            <h1 className="text-xl text-brand-300 font-extralight text-center">Follow me on Instagram</h1>
            <div className="flex justify-center">
                <div className="flex flex-row gap-5 pt-14 px-4 overflow-scroll">
                    {INSTAGRAM_IMAGE_DETAILS.map((href, i) => (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                            key={i}
                        >
                            <InstagramEmbed
                                url={href}
                                width="100%"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
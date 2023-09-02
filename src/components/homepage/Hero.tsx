import Container from "../common/Container"
import Image from "next/image"
import myself from "public/myself.jpg"

export default function Hero() {
    return (
        <Container>
            <div className="flex flex-col md:flex-row items-center py-14 gap-4">
                <div>
                    <h1 className="text-5xl sm:text-6xl xl:text-7xl text-brand-300 font-light">
                        Hi there! I am <span className="font-semibold">Javian</span>.
                    </h1>
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl text-brand-200 font-extralight">
                        I am a hobbyist street photographer who loves to capture the beauty of the world.
                    </h2>
                </div>
                <Image src={myself} alt={"myself"} className="h-fit max-w-xs sm:max-w-sm rounded-lg shadow-2xl" />
            </div>
        </Container >
    )
}
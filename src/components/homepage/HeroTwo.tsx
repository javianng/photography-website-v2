import Container from "../common/Container"

export default function HeroTwo() {
    return (
        <div className="bg-neutral-100 shadow">
            <Container>
                <div className="flex flex-col md:flex-row items-center py-14 gap-6">
                    <div className="mockup-window border bg-base-300 w-full md:w-1/3 max-w">
                        <iframe
                            src={"https://portfolio-website-pearl-tau.vercel.app/"}
                            className="w-full h-[70vh] max-h-[35rem]"
                        />
                    </div>
                    <div>
                        <h1 className="text-5xl sm:text-6xl xl:text-7xl text-brand-300 font-light">
                            I also love <span className="font-semibold text-red-400 font-mono">Coding</span>.
                        </h1>
                        <h2 className="text-3xl sm:text-4xl xl:text-5xl text-brand-200 font-extralight">
                            Check out my other website!
                        </h2>
                    </div>
                </div>
            </Container >
        </div>
    )
}
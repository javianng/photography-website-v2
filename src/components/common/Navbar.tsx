import Link from "next/link";

const NAVBAR_COMPONENT_DETAILS = [
    {
        name: "About Me",
        href: "/AboutMe",
    },
    {
        name: "Street And Landscape",
        href: "/StreetAndLandscape",
    },
    {
        name: "Events",
        href: "/Events",
    },
    {
        name: "Series",
        href: "/Series",
    },
];

type NavbarProps = {
    name: string;
    href: string;
};

export default function Navbar() {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar absolute z-50 text-white">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 font-extralight">
                        <Link href="/" className="btn w-36 justify-center bg-transparent border-0
                            lowercase font-extralight text-white
                            hover:bg-neutral-200 hover:bg-opacity-10 hover:text-neutral-500">
                            shotbyj.av
                        </Link>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <li><Link href="/AboutMe" className="flex w-36 justify-center font-extralight hover:bg-neutral-200 hover:bg-opacity-10 hover:text-neutral-500">About Me</Link></li>
                            <li>
                                <details>
                                    <summary className="font-extralight">Portfolio</summary>
                                    <ul className="p-2">
                                        <li><Link href="/StreetAndLandscape" className="font-extralight text-black">Street And Landscape</Link></li>
                                        <li><Link href="/Events" className="font-extralight text-black">Events</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link href="/Series" className="flex w-36 justify-center font-extralight hover:bg-neutral-200 hover:bg-opacity-10 hover:text-neutral-500">Series</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-neutral-300 text-black">
                    {
                        NAVBAR_COMPONENT_DETAILS.map(({ name, href }: NavbarProps, i) => (
                            <li key={i}>
                                <Link
                                    href={href}
                                    className="flex w-36 justify-start cap font-extralight"
                                >
                                    {name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
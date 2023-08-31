const NAVBAR_COMPONENT_DETAILS = [
    {
        name: "About Me",
        href: "#AboutMe",
    },
    {
        name: "Expertise",
        href: "#Expertise",
    },
    {
        name: "Work",
        href: "#Work",
    },
];

type NavbarProps = {
    name: string;
    href: string;
};

export default function Navbar() {
    return (
        <div className="drawer absolute bottom-11 left-11">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn drawer-button">
                    See More
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {
                        NAVBAR_COMPONENT_DETAILS.map(({ name, href }: NavbarProps, i) => (
                            <li key={i}>
                                <a
                                    href={href}
                                    className="flex w-36 justify-start uppercase"
                                >
                                    {name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div >
    )
}
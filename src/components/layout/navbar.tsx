import Link from "next/link";
import { ModeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";
import { SITE_CONFIG } from "~/lib/constants";

export function Navbar() {
  return (
    <nav className="container flex w-full flex-row items-center justify-between border border-none bg-white py-4 dark:bg-transparent">
      <Button variant="none" size="none">
        <Link className="font-thin" href="/">
          {SITE_CONFIG.name}
        </Link>
      </Button>
      <div className="space-x-2">
        {SITE_CONFIG.navLinks.map((link) => (
          <Button key={link.href} variant="link" size="none">
            <Link className="font-thin" href={link.href}>
              {link.label}
            </Link>
          </Button>
        ))}
        <ModeToggle />
      </div>
    </nav>
  );
}

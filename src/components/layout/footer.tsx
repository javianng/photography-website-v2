import { SITE_CONFIG } from "~/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center py-4 font-thin lowercase text-neutral-500">
      <small>
        copyright &copy; {SITE_CONFIG.author} {currentYear}
      </small>
    </footer>
  );
}

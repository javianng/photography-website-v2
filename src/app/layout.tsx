import "~/styles/globals.css";

import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Button } from "~/components/ui/button";

export const metadata: Metadata = {
  title: "shotbyj.av",
  description: "photographer, coder, entrepreneur",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col items-center justify-center">
        {/* Navigation Bar */}
        <nav className="container flex flex-row items-center justify-between bg-white py-4 shadow-sm">
          <h1 className="font-thin">shotbyj.av</h1>
          <div className="space-x-2">
            <Button variant="link" size="none">
              <a className="font-thin" href="#work">
                work
              </a>
            </Button>
            <Button variant="link" size="none">
              <a className="font-thin" href="#contact">
                contact
              </a>
            </Button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex flex-grow items-center justify-center">
          {children}
        </main>

        {/* Footer */}
        <footer className="flex items-center justify-center py-4 font-thin lowercase text-neutral-500">
          <small>copyright &copy; Javian Ng {currentYear}</small>
        </footer>
      </body>
    </html>
  );
}

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";
import { ModeToggle } from "~/components/mode-toggle";
import { ThemeProvider } from "~/components/theme-provider";
import { Button } from "~/components/ui/button";
import "~/styles/globals.css";

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
    <html
      lang="en"
      className={`${GeistSans.variable} flex justify-center px-2 sm:px-10`}
    >
      <body className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-center">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navigation Bar */}
          <nav className="container flex w-full flex-row items-center justify-between border border-none bg-white py-4 dark:bg-transparent">
            <Button variant="none" size="none">
              <Link className="font-thin" href="/">
                shotbyj.av
              </Link>
            </Button>
            <div className="space-x-2">
              <Button variant="link" size="none">
                <Link className="font-thin" href="/">
                  work
                </Link>
              </Button>
              <Button variant="link" size="none">
                <Link className="font-thin" href="/about-me">
                  about me
                </Link>
              </Button>
              <ModeToggle />
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex w-full flex-grow items-center justify-center">
            {children}
          </main>

          {/* Footer */}
          <footer className="flex items-center justify-center py-4 font-thin lowercase text-neutral-500">
            <small>copyright &copy; Javian Ng {currentYear}</small>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

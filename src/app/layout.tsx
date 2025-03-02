import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Footer } from "~/components/layout/footer";
import { Navbar } from "~/components/layout/navbar";
import { ThemeProvider } from "~/components/theme-provider";
import { METADATA } from "~/lib/constants";
import "~/styles/globals.css";

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
          <Navbar />
          <main className="flex w-full flex-grow items-center justify-center">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

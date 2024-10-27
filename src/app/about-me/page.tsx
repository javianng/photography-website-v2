"use client";

import { Camera, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Page() {
  return (
    <main className="container flex h-full w-full flex-col">
      <section className="flex w-full flex-col items-center gap-4 py-6 sm:flex-row">
        <Image
          src="/myself.jpg"
          alt="Javian"
          width={300}
          height={300}
          className="rounded-sm object-cover shadow-xl"
        />
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-semibold lowercase">
            Hi there! I am Javian
          </h1>
          <p className="text-neutral-00 mt-2 text-center font-thin lowercase md:text-left">
            Hobbyist street photographer capturing the beauty of the world
          </p>
        </div>
      </section>

      <hr className="my-10 h-[1px] w-full bg-neutral-200" />

      <section className="space-y-6 text-center md:text-left">
        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-4">
          <Camera size={24} className="text-neutral-700" />
          <div>
            <h2 className="text-xl">Street Photography</h2>
            <p className="text-sm font-thin">
              Capturing fleeting moments and hidden stories.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-4">
          <Code size={24} className="text-neutral-700" />
          <div>
            <h2 className="text-xl">Coding Enthusiast</h2>
            <p className="text-sm font-thin">
              When I&apos;m not behind the lens, you&apos;ll find me coding.
            </p>
            <Link href="https://www.javianng.com">
              <Button variant="link" size="none">
                www.javianng.com
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

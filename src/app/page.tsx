import Link from "next/link";
import React from "react";
import { TechIUse } from "@/app/components/tech-i-use";
import { languages } from '@/app/data/languages';
import { libraries } from '@/app/data/libraries';
import { tools } from '@/app/data/tools';


export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Hey I&apos;m Shaun</h1>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <p className="prose prose-neutral dark:prose-invert">
        This is my new portfolio.
      </p>
      <p className="p-4 ">i dont have much of a intro but you can check out my{' '}
        <a href="/misc">misc</a> to know more about me and some random stuff.
      </p>
      <p>
          On a mission to build products developers{' '}
          <Link href="/blog/developer-experience">love</Link>, and along the
          way, teach the next generation of developers. Heres a summary of my
          work so far.
        </p>
      <h2 className="pt-6">Tech Stack that i use:</h2>
      <h3 className="pt-6">Languages</h3>
      <TechIUse tech={languages} />
      <h3 className="pt-6">Frameworks / Libraries</h3>
      <TechIUse tech={libraries} />
      <h3 className="pt-6">Tools</h3>
      <TechIUse tech={tools} />
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
    </section>
  );
}

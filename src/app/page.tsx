import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Hey I&apos;m Shaun</h1>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <p className="prose prose-neutral dark:prose-invert">
        This is your new portfolio.
      </p>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Shaunfurtado"
          >
            <p className="ml-2 h-7">Github</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <p className="ml-2 h-7">Twitter</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <p className="ml-2 h-7">Linkedin</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
          </a>
        </li>
      </ul>
    </section>
  );
}

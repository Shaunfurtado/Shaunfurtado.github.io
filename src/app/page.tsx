import Link from "next/link";
import React from "react";
import { TechIUse } from "@/app/components/tech-i-use";
import { languages } from '@/app/data/languages';
import { libraries } from '@/app/data/libraries';
import { tools } from '@/app/data/tools';
import { socialMediaLinks } from '@/app/data/socialMediaLinks';
import SocialLinks from './components/socialLinks'; 
import { ProfileImage } from "./components/progileImage";

export default function Page() {
  return (
    <section className="flex flex-col ">
      <div className="flex flex-row items-center">
        <ProfileImage />
        <div className="ml-4">
          <h1 className="font-medium text-3xl mb-4 tracking-tighter">Hey I&apos;m</h1>
          <h1 className="font-medium text-4xl mb-4 tracking-tighter">Shaun Furtado</h1>
        </div>
      </div>
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
        <h2 className="font-medium text-2xl mb-2 tracking-tighter pt-6">Tech Stack that i use:</h2>
        <h3 className="pt-4 ">Languages :</h3>
        <TechIUse tech={languages} />
        <h3 className="pt-4">Frameworks / Libraries :</h3>
        <TechIUse tech={libraries} />
        <h3 className="pt-4">Tools :</h3>
        <TechIUse tech={tools} />
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Achievements :</h2>
        <ul className="list-disc pl-6 p-4">
          <li>
            Runner up in the 2021 Hackathon at my college.
          </li>
          <li>
            Runner up in the 2023 Hackathon at my college.
          </li>
          <li>
            secured internship at snh in Karpine limited.
          </li>
        </ul>
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Certifications :</h2>
        <ul className="list-disc pl-6 p-4">
          <li>
            Google data analytics professional certificate(coursera)
          </li>
          <li>
            Salesforce Administrator Certication
          </li>
          <li>
          html, css js certification from coursera
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <SocialLinks links={socialMediaLinks} />
    </section>
  );
}

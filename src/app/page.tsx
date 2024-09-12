"use client";
import Link from "next/link";
import React from "react";
import { TechIUse } from "@/app/components/techCard";
import { languages } from '@/app/data/languages';
import { libraries } from '@/app/data/libraries';
import { tools } from '@/app/data/tools';
import { socialMediaLinks } from '@/app/data/socialMediaLinks';
import SocialLinks from './components/socialLinks'; 
import { ProfileImage } from "./components/profileImage";
import { useEffect } from "react";
import config from "@/app/config.json";

export default function Page() {
  useEffect(() => {
    console.info(
      `${config.ascii}\n`,
      `Taking a peek huh? Check out the source code: ${config.repo}\n\n`
    );
  }, []);
  return (
    <section className="flex flex-col max-w-screen-xl mx-auto">
      <div className="flex flex-row items-center">
        <ProfileImage />
        <div className="ml-4">
          <h1 className="font-medium text-3xl mb-4 tracking-tighter">Hey I&apos;m</h1>
          <h1 className="font-medium text-4xl mb-4 tracking-tighter">Shaun Furtado</h1>
          <div className="flex justify-end">
            <div className="h-12 mr-4 md:h-10 flex flex-col items-center justify-center space-y-2 font-semibold border-[1px] border-none bg-white/5 p-4 text-sm md:text-base rounded-md shadow-md hover:shadow-rose-500/40 active:translate-y-[2px] transition-all duration-300 ease-out">
              <a href="https://shaunfurtado.is-a.dev/Resume/resume.pdf" target="blank" className="whitespace-nowrap">Resume</a>
            </div>
            <Link href='/contact'>
                <div className="h-12 md:h-10 flex flex-col items-center justify-center space-y-2 font-semibold border-[1px] border-none bg-white/5 p-4 text-sm md:text-base rounded-md shadow-md hover:shadow-rose-500/40 active:translate-y-[2px] transition-all duration-300 ease-out">
                  <span className="whitespace-nowrap">Contact Me</span>
                </div>
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <p className="p-4 prose prose-neutral dark:prose-invert">
          I&apos;m currently pursuing my B.E in Computer Science Engineering at <b><a href="https://sjec.ac.in/">SJEC</a></b>{' '} 
          in India with a keen focus on Web Applications and Backend APIs. While my main gig revolves around diving 
          deep into coding and crafting digital solutions, I&apos;m also passionate about exploring the 
          artistic side of things.
        </p>
        <p className="p-4 ">
          I&apos;m always open to hearing about exciting new projects and connecting with fellow 
          enthusiasts. So, if you want to chat about anything from web development to the latest tunes, 
          feel free to drop me a line. <b><Link href='/contact'>Let&apos;s connect!</Link></b>
          </p>
        <p className="p-4 ">
          You can also check out my{' '}
          <i><b><a href="/misc">misc</a></b></i> to know more about me and some random stuff.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      
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
            <b>2022 SJEC Premiere Hackathon:</b> Achieved runner-up position in the medical category, demonstrating my ability to apply tech solutions in healthcare.
          </li>
          <li>
            <b>HacktoFuture by EGDK and SJEC, 2023:</b> Secured the runner-up spot under the finance category, showcasing my skills in financial technology solutions.
          </li>
          <li>
            <b>Smart Nitte Hackathon:</b> Earned an internship opportunity at Karpine Limited, a renowned blockchain company, by demonstrating my proficiency in blockchain technology.
          </li>
        </ul>
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Certifications :</h2>
        <ul className="list-disc pl-6 p-4">
          <li>
            <b>Google Data Analytics Professional Certificate:</b> Acquired a comprehensive understanding of data analytics via Coursera.
          </li>
          <li>
            <b>Salesforce Administrator Certification:</b> Demonstrated expertise in Salesforce administration, enhancing my skills in CRM platforms.
          </li>
          <li>
            <b>Data Structures, University of California San Diego:</b> Gained a solid foundation in data structures through a course on Coursera, strengthening my problem-solving skills.
          </li>
          <li>
            <b>HTML, CSS, and Javascript for Web Developers, Johns Hopkins University:</b> Developed a strong grasp of web development fundamentals through this Coursera course.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <div className="flex flex-row justify-between items-center mt-0">
          <SocialLinks links={socialMediaLinks} />
          <div className="flex justify-end">
          <Link href='/contact'>
              <div className="h-12 md:h-10 flex flex-col items-center justify-center space-y-2 font-semibold border-[1px] border-none bg-white/5 p-4 text-sm md:text-base rounded-md shadow-md hover:shadow-rose-500/40 active:translate-y-[2px] transition-all duration-300 ease-out">
                <span className="whitespace-nowrap">Contact Me</span>
              </div>
          </Link>
          </div>
        </div>
    </section>
  );
}

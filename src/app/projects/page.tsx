import React from "react";
import Link from 'next/link';
import { socialMediaLinks } from '@/app/data/socialMediaLinks';
import SocialLinks from '../components/socialLinks'; 

export default function Page() {
    return (
      <section>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Projects</h1>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <div className="prose prose-neutral dark:prose-invert">
        <ul className="list-disc pl-6 p-4">
          <li>Twitter crypto bot</li>
          <li>This personal portfolio</li>
          <li>Code blogs for code snippets and notes management</li>
          <li>Personal blogging site with hugo</li>
          <li>Flowchain blockchain supply chain management</li>
          <li>hotel management system</li>
          <li>Kickstartup: Crowdfunding With blogs</li>
          <li>Java GUI text editor</li>
        </ul>
        <p>Other projects :</p>
        <ul>
          <li>arduino fingerprint door unlock system</li>
          <li>nodemcu based water tank level monitoring system</li>
        </ul>
        </div>
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
  
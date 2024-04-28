import type { Metadata } from 'next';
import React from "react";
import Link from 'next/link';
import SocialLinks from '../components/socialLinks'; 
import { socialMediaLinks } from '@/app/data/socialMediaLinks';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Heres My Setup
      </h1>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <div className="prose prose-neutral dark:prose-invert">
        <h3 className="pt-4">Computer :</h3>
        <ul>
          <li>14&quot; Asus Vivobook Pro 14 Oled (2021)</li>
          <li>Logitech Mouse</li>
          <li>Evofox Fireblade TKL 65% Keyboard</li>
          <li>KZ ZSN pro X</li>
          <li>Windows 11 & Manjaro (by the way)</li>
        </ul>
        <br />
        <h3 className="pt-4">Coding :</h3>
        <ul>
          <li>
            Editor: VSCode, Sublime Text 4 
          </li>
          <li>Theme: Tokyo Night</li>
          <li>Terminal: Charm</li>
        </ul>
        <br />
        <h3 className="pt-4">Software :</h3>
        <ul>
          <li>Arc Browser</li>
          <li>Spotify</li>
          <li>CapCut</li>
          <li>Localsend</li>
          <li>Ollama</li>
          <li>OBS studio</li>
          <li>Figma</li>
          <li>Cloudfare Warp</li>
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

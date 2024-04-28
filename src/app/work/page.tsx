import React from "react";
import Link from 'next/link';
import { socialMediaLinks } from '@/app/data/socialMediaLinks';
import SocialLinks from '../components/socialLinks'; 


export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Experience</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build products people love, and along the
          way, learn continuously with the changing world. Heres a summary of my
          work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Karpine Limited</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
  Blockchain Intern at Karpine, Jan 2024 — Mar 2024 (Remote)
</p>
<p className="text-neutral-600 dark:text-neutral-400 text-sm">
  <b>Technologies used:</b> Node.js, C#, Blazor, Nethereum, Git
</p>
<p className="p-2">
  I joined Karpine early to work on a Twitter Crypto Bot for Ethereum and the presale page for the crypto token launch. I worked on the backend systems and ensured smooth operation.
</p>
<ul className="list-disc pl-6 p-4">
  <li>
    In Jan 2024, I started working on the Twitter crypto bot. I used Node.js and Etherscan explorer API to interact with the Ethereum blockchain and Twitter API. This bot was able to monitor transactions and tweet about significant events.
  </li>
  <li>
    In Feb 2024, I was tasked with creating the presale page for the crypto token launch. I used C# and Blazor to build a robust and secure backend system that could handle high traffic and ensure a smooth token presale process.
  </li>
  <li>
    Throughout my internship, I used Git for version control and collaborated with other team members to ensure the successful completion of the projects.
  </li>
</ul>
<p>
  My contributions to Karpine during my internship helped in increasing the efficiency of monitoring Token transactions.
</p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Motion Cut</h2>
<p className="text-neutral-600 dark:text-neutral-400 text-sm">
  Web Developer Intern, Oct 2023 — Nov 2023 (Remote)
</p>
<p className="text-neutral-600 dark:text-neutral-400 text-sm">
  <b>Technologies used:</b> React.js, HTML, CSS, Javascript, Figma, Git
</p>
<p className="p-2">
  I joined Motioncut, a company well known for its motion graphics and video editing elements. During my internship, I was tasked with four major projects, each with a different focus and set of challenges.
</p>
<ul className="list-disc pl-6 p-4">
  <li>
    In the first week, I developed a professional website for business. This involved creating a clean and intuitive UI/UX design, implementing responsive layouts, and ensuring optimal performance.
  </li>
  <li>
    In the second week, I worked on an e-commerce website. I focused on responsiveness to ensure a seamless shopping experience across different devices. I also integrated a secure payment gateway for transactions.
  </li>
  <li>
    In the third week, I focused on security measures, particularly form validation. I implemented various validation checks to prevent malicious attacks, ensuring the safety and integrity of user data.
  </li>
  <li>
    In the final week, I created an interactive to-do list application. This involved creating a user-friendly interface, implementing CRUD operations, and integrating a database for persistent storage.
  </li>
</ul>
<p>
  My contributions to Motioncut during my internship helped improve their web presence and security, and provided valuable tools for task management.
</p>

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

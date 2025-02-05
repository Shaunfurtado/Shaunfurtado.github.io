import React from "react";
import Link from 'next/link';
import { socialMediaLinks } from '@/app/data/socialMediaLinks';
import SocialLinks from '../components/socialLinks'; 


export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Experience</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Karpine Limited</h2>
        <p className="font-normal text-sm">
  Blockchain Intern at Karpine, Jan 2024 — Mar 2024 (Remote)
</p>
<p className="font-normal text-sm">
  <b className="font-normal text-sm">Technologies used:</b> Node.js, React.js, Express.js, Moralis, Git
</p>
<p className="p-2">
At Karpine, I contributed to cutting-edge blockchain projects:</p>
<ul className="list-disc pl-6 p-4">
  <li>
  Developed a real-time transaction monitoring bot using Node.js and the Etherscan explorer API. The bot tracked Ethereum transactions and provided timely updates on significant events.
  </li>
  <li>
  Designed and implemented a secure Token Swap Dapp for crypto token launches. Leveraged MERN stack (MongoDB, Express.js, React.js, Node.js) and Moralis APIs for seamless user experience.  </li>
</ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Motion Cut</h2>
<p className="font-normal text-sm">
  Web Developer Intern, Oct 2023 — Nov 2023 (Remote)
</p>
<p className="font-normal text-sm">
  <b className="font-normal text-sm">Technologies used:</b> React.js, HTML, CSS, Javascript, Figma, Git
</p>
<p className="p-2">
At Motioncut, I worked on diverse web projects:
</p>
<ul className="list-disc pl-6 p-4">
  <li>
    Developed a professional website for business. This involved creating a clean and intuitive UI/UX design, implementing responsive layouts, and ensuring optimal performance.
  </li>
  <li>
    Worked on an e-commerce website. I focused on responsiveness to ensure a seamless shopping experience across different devices. I also integrated a secure payment gateway for transactions.
  </li>
  <li>
    Focused on security measures, particularly form validation. I implemented various validation checks to prevent malicious attacks, ensuring the safety and integrity of user data.
  </li>
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

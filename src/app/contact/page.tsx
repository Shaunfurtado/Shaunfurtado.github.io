"use client"
import React, { useState } from 'react';
import { TechIUse } from "@/app/components/techCard";
import { contacts } from '@/app/data/contacts';
import { LuSendHorizonal } from "react-icons/lu";

export default function Page() {
  return (
    <section>
      <div className="prose prose-neutral dark:prose-invert">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Say Hello! </h1>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col mt-0 mb-8">
          <input type="hidden" name="access_key" value="5e9fda71-e062-4515-9f5b-95f2d24f7f27" className="p-4 mb-2 border-b border-gray-300 transition ease-in-out duration-500 focus:outline-none focus:border-black focus:shadow-none" placeholder="Your Input" />
          <input type="text" name="name" required className="p-4 mb-2 border-b border-gray-300 transition ease-in-out duration-500 focus:outline-none focus:border-black focus:shadow-none" placeholder="Your Name" />
          <input type="email" name="email" required className="p-4 mb-2 border-b border-gray-300 transition ease-in-out duration-500 focus:outline-none focus:border-black focus:shadow-none" placeholder="Your E-mail" />
          <textarea name="message" required  className="p-4 mb-2 border-b border-gray-300 transition ease-in-out duration-500 focus:outline-none focus:border-black focus:shadow-none" placeholder="Your Message"></textarea>
          <input type="hidden" name="redirect" value="https://shaunfurtado.is-a.dev/thanks" />
          <button type="submit" className="h-22 md:h-20 px-4 py-2 flex flex-col items-center justify-center space-y-2 font-semibold border-[1px] border-none bg-white/5 p-4 text-sm rounded-md shadow-md hover:shadow-rose-500/40 active:translate-y-[2px] transition-all duration-300 ease-out">
            <LuSendHorizonal className="mr-2" />
            Submit Message
          </button>
        </form>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Also Follow me on : </h1>
        <TechIUse tech={contacts} />
        
      </div>
    </section>
  );
}
"use client"
import React, { useState } from 'react';
import { TechIUse } from "@/app/components/techCard";
import { contacts } from '@/app/data/contacts';
import { LuSendHorizonal } from "react-icons/lu";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const discordWebhookUrl = 'https://discord.com/api/webhooks/1278239780911583243/6CPq2DiDSQbD2S6TyjEW_YBeE9UW-UQpvG-a1lG4hzzzFbMNofN6oHjC5_4SBu9wINHJ';

    const messageData = {
      username: name,
      embeds: [
        {
          title: "New Message from Portfolio",
          description: "You've received a new message via your portfolio contact form.",
          color: 0x5865F2,
          fields: [
            { name: "Name", value: name, inline: true },
            { name: "Email", value: email, inline: true },
            { name: "Message", value: message },
          ],
          footer: { text: "Portfolio Contact Form" },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const response = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
      });

      if (response.ok) {
      window.location.href = '/thanks';
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div className="prose prose-neutral dark:prose-invert">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          Say Hello!
        </h1>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <form onSubmit={handleSubmit} className="flex flex-col mt-0 mb-8">
          <input type="text" name="name" required className="p-4 mb-2 border-b border-gray-300 transition ease-in-out duration-500 focus:outline-none focus:border-black focus:shadow-none" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" name="email" required className="p-4 mb-2 border-b border-gray-300 transition ease-in-out duration-500 focus:outline-none focus:border-black focus:shadow-none" placeholder="Your E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea name="message" required className="p-4 mb-2 border-b border-gray-300 transition ease-in-out duration-500 focus:outline-none focus:border-black focus:shadow-none" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
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
  );
}
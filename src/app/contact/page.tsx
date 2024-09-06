"use client"
import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const discordWebhookUrl = 'https://discord.com/api/webhooks/1278239780911583243/6CPq2DiDSQbD2S6TyjEW_YBeE9UW-UQpvG-a1lG4hzzzFbMNofN6oHjC5_4SBu9wINHJ';

    const messageData = {
      username: name,
      content: `**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
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
        setResult('Message sent successfully!');
      } else {
        setResult('An error occurred.');
      }
    } catch (error) {
      console.error(error);
      setResult('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        required
      />
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
        required
      />
      <button type="submit">Submit</button>
      <div id="result">{result}</div>
    </form>
  );
}
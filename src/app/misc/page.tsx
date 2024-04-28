import type { Metadata } from 'next';
import React from "react";

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        heres my setup
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer</h3>
        <ul>
          <li>14&quot; Asus Vivobook Pro 14 Oled (2021)</li>
          <li>Logitech Mouse</li>
          <li>Evofox Fireblade TKL 65% Keyboard</li>
          <li>KZ ZSN pro X</li>
          <li>Windows 11 & Manjaro(by the way)</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode, Sublime Text 4 (
            <a href="https://gist.github.com/leerob/e7883ab35d900b8cbb684ac77e7c4703">
              Settings / Extensions
            </a>
            )
          </li>
          <li>Theme: Tokyo Night</li>
          <li>Charm</li>
        </ul>
        <h3 id="software">Software</h3>
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
    </section>
  );
}

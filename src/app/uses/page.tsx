import type { Metadata } from 'next';

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
          <li>14&quot; Asus Vivobook Pro 14 oled (2021)</li>
          <li>Logitech Mouse</li>
          <li>Evofox Fireblade TKL 65% Keyboard</li>
          <li>Windows 11 & Manjaro(btw)</li>
          
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
          <li>Theme: One Dark Pro</li>
          <li>CHarm</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>ARC Browser</li>
          <li>Spotify</li>
          <li>CapCut</li>
          <li>Localsend</li>
          <li>Ollama</li>
          <li>OBS studio</li>
          <li>Figma</li>
        </ul>
        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>KZ ZSN pro X</li>
          <li>Oneplus Watch</li>
        </ul>
      </div>
    </section>
  );
}

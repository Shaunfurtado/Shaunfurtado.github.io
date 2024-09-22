import { IoLogoJavascript } from "react-icons/io5";
import { LiaJava } from "react-icons/lia";
import { FaGolang } from "react-icons/fa6";
import {
  TbBrandCpp,
  TbBrandTypescript,
  TbBrandPython,
} from 'react-icons/tb';

export const languages = [
  {
    title: 'C++',
    Icon: TbBrandCpp,
    href: 'https://www.cplusplus.com/',
  },
  {
    title: 'JavaScript',
    Icon: IoLogoJavascript,
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    title: 'TypeScript',
    Icon: TbBrandTypescript,
    href: 'https://www.typescriptlang.org/',
  },
  {
    title: 'Golang',
    Icon: FaGolang,
    href: 'https://go.dev/',
  },
  {
    title: 'Python',
    Icon: TbBrandPython,
    href: 'https://www.python.org/',
  },
  {
    title: 'Java',
    Icon: LiaJava,
    href: 'https://www.java.com/',
  },
];
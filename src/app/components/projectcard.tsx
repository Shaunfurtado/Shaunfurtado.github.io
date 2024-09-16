import Image from 'next/image';
import NextLink from 'next/link';
import { VscGithub } from "react-icons/vsc";
import { FiExternalLink } from 'react-icons/fi';
import { projects } from '@/app/data/projects';

export const ThingsIveBuilt = () => {
  return (
    <section className="mt-10 px-4">
      <p className="text-xl">Things I&apos;ve built</p>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

type ProjectCardProps = (typeof projects)[0];

const ProjectCard = ({
  title,
  description,
  gitLink,
  prodLink,
  techStack,
  thumb,
}: ProjectCardProps) => {
  const isExternal = prodLink.startsWith('http');

  return (
    <div
    className={
      'relative rounded-lg border border-gray-300 bg-white shadow-md p-4 ' +
      'transition-all duration-300 ease-in-out hover:bg-gray-100 dark:rounded-lg dark:border-[1px] dark:border-none dark:bg-white/5 dark:hover:bg-white/10 dark:shadow-none'
    }
    
    >
      <div className="flex flex-col space-y-3">
        {isExternal ? (
          <a
            href={prodLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
            className="w-fit font-semibold flex items-center gap-2"
          >
            <Image
              src={thumb}
              alt={`Logo of ${title}`}
              width="32"
              height="32"
              className="rounded-md"
              aria-label={title}
            />
            <span>{title}</span>
            <FiExternalLink size={22} />
          </a>
        ) : (
          <NextLink href={prodLink}>
            <a className="w-fit font-semibold flex items-center gap-2">
              <Image
                src={thumb}
                alt={`${title} logo`}
                width="32"
                height="32"
                className="rounded-md"
              />
              <span>{title}</span>
            </a>
          </NextLink>
        )}
        <p className="text-base">{description}</p>

        <div className="flex flex-wrap items-center">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="mr-2 mt-2 inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <NextLink
        href={gitLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group absolute top-4 right-4 rounded-lg px-2 py-1 bg-gray-100 hover:bg-gray-200"
        >
        <VscGithub 
          size={28}
          color="#333"
            className="fill-current group-hover:text-white transition-all duration-300 ease-in-out"
        />
      </NextLink>
    </div>
  );
};
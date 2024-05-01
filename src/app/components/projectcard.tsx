import Image from 'next/image';
import NextLink from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
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
        'relative rounded-lg border-[1px] border-none bg-white/5 p-4 ' +
        'transition-all duration-500 ease-out hover:bg-white/10'
      }
    >
      <div className="flex flex-col space-y-3">
        {isExternal ? (
          <a
            href={prodLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit font-semibold flex items-center gap-2"
          >
            <Image
              src={thumb}
              alt={`${title} logo`}
              width="32"
              height="32"
              className="rounded-md"
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
        className={
          'group absolute top-4 right-4 rounded-lg px-2 py-1'
        }
      >
        <AiFillGithub
          size={28}
          color="#ffe4e64d"
          className={
            'fill-rose-100/30 transition-all duration-300 ease-out ' +
            'group-hover:scale-[1.2] group-hover:fill-white'
          }
        />
      </NextLink>
    </div>
  );
};
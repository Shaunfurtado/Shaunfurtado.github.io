import React from "react";
import { TechIUse } from "@/app/components/tech-i-use";
import { contacts } from '@/app/data/contacts';

export default function Page() {
  return (
    <section>
      <div className="prose prose-neutral dark:prose-invert">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Contact</h1>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <p>
          Best way to contact me is by{' '}
          <a href="mailto:shaunf1801@gmail.com"><b><i>Mail</i></b></a>.
          I will reply as soon as possible. You can also reach out to me on{' '}linkedin.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <TechIUse tech={contacts} />
      </div>
    </section>
  );
}

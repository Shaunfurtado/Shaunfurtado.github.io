import React from "react";
import Particles from "../components/particles";

export default function Page() {
    return (
      <section>
        <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">my projects</h1>
        <p className="prose prose-neutral dark:prose-invert">
          This is where your projects goes goes.
        </p>
      </section>
    );
  }
  
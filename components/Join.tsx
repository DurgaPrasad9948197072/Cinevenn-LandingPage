import Reveal from "./Reveal";

export default function Join() {
  return (
    <section id="join" className="relative isolate overflow-hidden py-24 text-center md:py-26">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-55%] left-1/2 -z-10 aspect-square w-[min(900px,140vw)] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,.16) 0%, rgba(245,158,11,.04) 40%, transparent 66%)",
        }}
      />

      <Reveal className="mx-auto w-full max-w-[600px] px-5 sm:px-7">
        <p className="mb-3.5 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
          Coming soon
        </p>
        <h2 className="font-display text-[clamp(28px,5.2vw,44px)] leading-[1.15] font-medium tracking-[-0.015em]">
          Be first to join Cinevenn
        </h2>
        <p className="mt-3.5 text-muted-fg">
          Cinevenn is in the final stages of development. Phase 1 launches in India, before
          expanding globally.
        </p>
      </Reveal>
    </section>
  );
}

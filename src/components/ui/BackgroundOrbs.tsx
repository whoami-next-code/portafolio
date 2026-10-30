export function BackgroundOrbs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#10141c]"
      aria-hidden="true"
    >
      <div className="aurora absolute -left-1/4 top-0 h-[62vh] w-[80vw] rounded-full bg-gradient-to-r from-indigo-600/25 via-violet-600/15 to-transparent blur-3xl" />
      <div className="aurora absolute -right-1/4 top-1/4 h-[52vh] w-[70vw] rounded-full bg-gradient-to-l from-orange-500/18 via-indigo-500/10 to-transparent blur-3xl" />

      <div className="orb-animate absolute -left-32 top-16 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-indigo-600/30 to-violet-600/15 blur-3xl" />
      <div className="orb-animate-delayed absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-orange-500/20 to-sky-600/12 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[340px] w-[340px] rounded-full bg-gradient-to-tr from-fuchsia-600/12 to-indigo-600/10 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(129, 140, 248, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(129, 140, 248, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}

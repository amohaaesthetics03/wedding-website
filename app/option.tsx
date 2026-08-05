"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
    <section className="relative min-h-[200vh] overflow-hidden">
      <div className="relative">
      <motion.img
  src="/images/hero.png"
  alt="Ankit & Bhumi"
 className=" w-full"
  animate={{ scale: [1, 1.03] }}
  transition={{
    duration: 20,
    repeat: Infinity,
    repeatType: "reverse",
  }}
/>
<div className="absolute inset-0 bg-black/35" />
{/* Falling Petals */}
<div
  className="
    absolute
    inset-0
    z-20
    overflow-visible
    pointer-events-none
    [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]
  "
>
  {[...Array(35)].map((_, i) => (
    <motion.img
      key={i}
      src="/images/petal.png"
      alt="Petal"
      className={`absolute opacity-80 ${
        i % 4 === 0
          ? "w-20 md:w-28"
          : i % 2 === 0
          ? "w-12 md:w-16"
          : "w-8 md:w-10"
      }`}
      initial={{
        x: `${Math.random() * 100}vw`,
        y: "-10vh",
        rotate: Math.random() * 360,
      }}
      animate={{
        x: [
          `${Math.random() * 100}vw`,
          `${Math.random() * 100}vw`,
        ],
        y: "220vh",
        rotate: 720,
      }}
      transition={{
        duration: 18 + Math.random() * 8,
        repeat: Infinity,
        delay: Math.random() * 15,
        ease: "linear",
      }}
    />
  ))}
</div>
<div className="absolute inset-0 z-10 flex h-screen flex-col items-center justify-center text-center">
  <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="text-5xl md:text-7xl text-[#F8F3E7] tracking-[0.12em] font-serif"
>
  ANKIT
</motion.h1>

  <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1.5 }}
  className="my-3 text-3xl text-[#F8F3E7]"
>
  &
</motion.p>

  <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 2.5 }}
  className="text-5xl md:text-7xl text-[#F8F3E7] tracking-[0.12em] font-serif"
>
  BHUMI
</motion.h1>

<motion.button
  onClick={() =>
    document
      .getElementById("invitation")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    scale: [1, 1.05, 1],
  }}
  transition={{
    delay: 3.5,
    duration: 2,
    repeat: Infinity,
  }}
  className="
    mt-12
    rounded-full
    border
    border-[#F8F3E7]
    px-8
    py-3
    text-sm
    tracking-[0.25em]
    text-[#F8F3E7]
    bg-white/10
    cursor-pointer
  "
>
  OPEN INVITATION
</motion.button>

  </div>
  </div>
</section>
  
{/* INVITATION SECTION */}
<section
  id="invitation"
  className="relative flex justify-center items-center min-h-screen px-6 py-24"
  style={{
    backgroundImage: "url('/images/invite.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Soft overlay */}
  <div className="absolute inset-0 bg-white/15 backdrop-blur-[1px]" />

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="
      relative
      z-10
      w-full
      max-w-3xl
      rounded-[48px]
      border
      border-[#D4AF37]/25
      bg-[#FFFDF8]/25
      backdrop-blur-md
      shadow-2xl
      px-8
      md:px-16
      py-16
      text-center
    "
  >
    {/* Inner border */}
    <div className="absolute inset-4 rounded-[40px] border border-[#D4AF37]/20 pointer-events-none" />

    {/* Ganesh */}
    <motion.img
      src="/images/ganesh.png"
      alt="Lord Ganesha"
      className="mx-auto w-40 md:w-52"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    />

    <p className="mt-8 text-xl md:text-2xl font-serif text-[#5A4634]">
      With the blessings of
    </p>

    <p className="mt-4 text-lg md:text-xl text-[#5A4634] leading-8">
      Late Shri Meherchand Jaswani &amp; Late Smt. Chandra Jaswani
    </p>

    <div className="w-24 h-px bg-[#D4AF37]/40 mx-auto my-8" />

    <p className="text-lg md:text-xl text-[#5A4634] leading-8">
      We solicit your gracious presence
      <br />
      for the wedding of
    </p>

    <h2 className="mt-10 text-5xl md:text-6xl font-serif tracking-[0.15em] text-[#B08D57]">
      BHUMI
    </h2>

    <p className="mt-3 italic text-[#5A4634]">
      D/O Shri Lalit Jaswani &amp; Smt. Meenal Jaswani
    </p>

    <p className="my-8 text-3xl text-[#5A4634]">&amp;</p>

    <h2 className="text-5xl md:text-6xl font-serif tracking-[0.15em] text-[#B08D57]">
      ANKIT
    </h2>

    <p className="mt-3 italic text-[#5A4634]">
      S/O Late Shri __________ &amp; Smt. __________
    </p>

    <div className="w-24 h-px bg-[#D4AF37]/40 mx-auto my-10" />

    <p className="tracking-[0.35em] text-[#5A4634]">
      23 AUGUST 2026
    </p>

    <p className="mt-2 text-2xl font-serif text-[#B08D57]">
      Lake View, Jodhpur
    </p>
  </motion.div>
</section>
  </>
);
}
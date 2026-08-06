"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";


type HeroProps = {
  onOpenInvitation?: () => void;
};

export default function Hero({ onOpenInvitation }: HeroProps) {


const petals = useMemo(
  () =>
    Array.from({ length: 12 }, () => ({
      left: Math.random() * 100,
      duration: 16 + Math.random() * 5,
      delay: Math.random() * 8,
      rotate: Math.random() * 360,
      size: 20 + Math.random() * 12,
    })),
  []
);

  

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <motion.img
        src="/images/hero.png"
        alt="Ankit & Bhumi"
        
        className="absolute inset-0 h-full w-full object-cover object-center"
        animate={{
    scale:[1,1.04],
    y:[0,-12]
}}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      

      <div className="absolute inset-0 bg-gradient-to-b
from-black/45
via-black/20
to-black/55" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {petals.map((petal, i) => (
        <motion.img
  key={i}
  src="/images/petal.png"
  alt=""
  className="absolute opacity-80 pointer-events-none"
  style={{
    left: `${petal.left}%`,
    width: `${petal.size}px`,
  }}
  initial={{
    y: "-10vh",
    rotate: petal.rotate,
  }}
  animate={{
    y: "115vh",
    x: [-15, 15, -10, 10, 0],
    rotate: petal.rotate + 360,
  }}
  transition={{
    duration: petal.duration,
    delay: petal.delay,
    repeat: Infinity,
    ease: "linear",
  }}
/>
        ))}
      </div>
      <div
       className="
relative
z-10
flex
h-full
flex-col
items-center
justify-center
-translate-y-40
md:-translate-y-10
px-6
text-center
">
         <div
    className="
      absolute
      w-[420px]
      h-[420px]
      md:w-[650px]
      md:h-[650px]
      rounded-full
      bg-[#C6A664]/15
      blur-[150px]
      -z-10
    "
  />
       <motion.img
  src="/images/ab-monogram.png"
  alt="AB"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2 }}
  className="mb-10 w-32 md:w-40 opacity-90"
/>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
    delay:0.8,
    duration:1
}}
          className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-[0.22em] text-[#F8F3E7]"
        >
          ANKIT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
    delay:1.5
}}
          className="my-3 text-2xl md:text-3xl text-[#F8F3E7]"
        >
          &
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
    delay:2.2,
    duration:1
}}
          className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-[0.22em] text-[#F8F3E7]"
        >
          BHUMI
        </motion.h1>

       <motion.div
className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
animate={{
y:[0,8,0]
}}
transition={{
duration:2,
repeat:Infinity
}}
>

<p
className="
uppercase
tracking-[0.35em]
text-[11px]
text-[#F8F3E7]/60
"
>

Scroll

</p>

<div
className="
mt-4
w-px
h-10
bg-[#C6A664]
"
/>

</motion.div>
      </div>
    </section>
  );
}

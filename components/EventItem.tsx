"use client";

import { motion } from "framer-motion";

interface EventItemProps {
  image: string;
  title: string;
  time: string;
}

export default function EventItem({
  image,
  title,
  time,
}: EventItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center"
    >
      {/* Floral Frame */}
<div className="group relative w-[340px] h-[420px] flex items-center justify-center">

  {/* Event Photo */}
 <img
  src={image}
  alt={title}
  className="
absolute
left-1/2
top-1/2
w-[235px]
h-[310px]
object-cover
rounded-[45%]
z-0
-transform
-translate-x-1/2
-translate-y-1/2
transition-all
duration-700
group-hover:scale-105
group-hover:brightness-105
"
/>
    

  {/* Floral Frame */}
 <motion.img
  src="/images/frames/floral-frame.png"
  animate={{
  y: [0, -4, 0],
  rotate: [0, 0.5, 0],
}}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
/>
</div>

      {/* Title */}
      <h3 className="mt-5 font-serif text-4xl text-[#6B4E2E] text-center">
        {title}
      </h3>

      {/* Divider */}
      <div className="mt-3 w-20 h-px bg-[#C6A664]" />

      {/* Time */}
      <span className="mt-4 rounded-full border border-[#D9BE7A] px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#A87B2C] bg-white/60 backdrop-blur-sm">
        {time}
      </span>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";

export default function Invitation() {
  return (
    <section className="relative overflow-hidden bg-[#F8F3E7] py-0 md:py-20 px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-[#C6A664]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">

        {/* Divider */}

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="my-5 text-[#C6A664] text-3xl"
        >
          <img
  src="/images/goldornament.png"
  alt=""
  className="w-70 opacity-90"
/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 140 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-px bg-[#C6A664]"
        />

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 font-serif text-5xl md:text-6xl text-[#6E4F2A]"
        >
          You're Invited
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-5 max-w-md text-center text-[#8C7A60] tracking-wide"
        >
         With the blessings of our families and hearts full of joy,
          we warmly invite you to celebrate the beginning of our forever.
        </motion.p>

        {/* Invitation */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.02,
            y: -8,
          }}
          className="mt-20"
        >
          <div className="
rounded-[32px]
border
border-[#D8C6A5]/50
bg-white/70
p-6
shadow-[0_40px_100px_rgba(0,0,0,0.14)]
backdrop-blur-md
">
  <div className="rounded-2xl border border-[#D8C6A5]/30 p-2">
      <img
    src="/images/invitation.png"
    alt="Wedding Invitation"
            className="
w-full
max-w-[680px]
rounded-xl
shadow-[0_40px_80px_rgba(0,0,0,0.18)]
"
          />
          </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
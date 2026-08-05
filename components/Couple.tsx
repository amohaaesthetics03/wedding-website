"use client";

import { motion } from "framer-motion";

export default function Couple() {
  return (
    <section
      id="couple"
      className="relative overflow-hidden bg-[#FCFAF6] py-32 px-6"
    >
      {/* Soft Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C6A664]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <img
            src="/images/goldornament.png"
            alt="Gold Ornament"
            className="mx-auto mb-6 w-[220px]"
          />

          <div className="w-70 h-px bg-[#C6A664] mx-auto" />

          <h2 className="mt-10 font-serif text-5xl md:text-6xl text-[#6B4E2E]">
            Meet The Couple
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-[#8C7A60]">
            Two souls. Two stories. One extraordinary forever.
          </p>
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-28 grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image */}
          <div className="flex justify-center">
            <div className="
absolute
w-[420px]
h-[420px]
rounded-full
bg-[#C6A664]/10
blur-[120px]
" />
            <img
              src="/images/bride.jpeg"
              alt="Bhumi"
              className="w-[420px] rounded-[40px] shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-[#C6A664] text-2xl italic tracking-wide font-serif">
              Her Story
            </p>

            <h3 className="mt-3 text-6xl font-serif tracking-[0.2em] text-[#6B4E2E]">
              BHUMI
            </h3>

            <div className="mt-5 w-28 h-px bg-[#C6A664]" />

            <p className="mt-8 leading-9 text-lg text-[#7F6C53]">
              She has a weakness for shopping, a talent for creating
              unforgettable memories, and enough mischief to keep life exciting.
              Full of laughter, big dreams, and an endless love for
              celebrations, she believes every occasion deserves a little extra
              sparkle. Her vibrant spirit, infectious smile, and playful heart
              make every moment brighter.
            </p>
          </div>
        </motion.div>

        {/* Center Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="py-24 text-center"
        >
          <div className="text-5xl text-[#C6A664]">♥</div>

          <p className="mt-8 font-serif text-3xl text-[#7A5A33]">
            She fills life with color.
          </p>

          <p className="mt-2 font-serif text-3xl text-[#7A5A33]">
            He gives it direction.
          </p>

          <p className="mt-4 italic text-[#A87B2C] text-xl">
            Together, they create the perfect balance.
          </p>
        </motion.div>

        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-[#C6A664] italic text-3xl font-serif">
              His Story
            </p>

            <h3 className="mt-3 text-6xl font-serif tracking-[0.2em] text-[#6B4E2E]">
              ANKIT
            </h3>

            <div className="mt-5 w-28 h-px bg-[#C6A664]" />

            <p className="mt-8 leading-9 text-lg text-[#7F6C53]">
              He is the definition of dedication. Calm, focused, and sincere,
              he believes that dreams are built through patience and hard work.
              With unwavering commitment, a kind heart, and quiet strength, he
              finds happiness in caring for the people he loves. His steady
              presence is the perfect complement to her vibrant energy.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="/images/groom.jpeg"
              alt="Ankit"
              className="w-[360px] rounded-[40px] shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-28 text-center"
        >
          <div className="w-24 h-px bg-[#C6A664] mx-auto mb-8" />

          <p className="font-serif italic text-3xl text-[#7A5A33]">
            And so begins a lifetime of laughter, love and beautiful
            memories... together.
          </p>

          <div className="w-24 h-px bg-[#C6A664] mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
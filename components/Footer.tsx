"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
      relative
      overflow-hidden
      bg-gradient-to-b
      from-[#FCFAF6]
      to-[#F8F4ED]
      "
    >
      {/* Top Gold Divider */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D6B772] to-transparent" />

      {/* Background Glow */}

     <div className="absolute inset-0 overflow-hidden">

  <div
    className="
    absolute
    left-1/2
    top-20
    -translate-x-1/2
    w-[650px]
    h-[650px]
    rounded-full
    bg-[#EFDDB2]/30
    blur-[170px]
    "
  />


      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-12 text-center">

        {/* AB Monogram */}

        <motion.img
          src="/images/ab-monogram.png"
          alt="AB"
          initial={{ opacity: 0, scale: .8 }}
          whileInView={{ opacity: .7, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="
w-40
mx-auto
opacity-80
brightness-65
sepia
"
        />

        {/* Couple */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .15 }}
          className="
          mt-8
          font-serif
          text-5xl
          md:text-6xl
          text-[#6B4E2E]
          "
        >
          Ankit & Bhumi
        </motion.h2>

        {/* Date */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .25 }}
          className="
          mt-5
          uppercase
          tracking-[0.45em]
          text-[#C6A664]
          text-sm
          "
        >
          23 August, 2026
        </motion.p>

        {/* Divider */}

        <div className="w-28 h-px bg-[#C6A664] mx-auto mt-10"></div>

        {/* Quote */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .35 }}
          className="
          mt-10
          font-serif
          italic
          text-2xl
          leading-10
          text-[#8A6A3A]
          "
        >
          “Your presence is the greatest gift
          <br />
          as we begin our forever together.”
        </motion.p>

        {/* Divider */}

        <div className="w-28 h-px bg-[#C6A664] mx-auto mt-10"></div>

        {/* Venue */}

        <div
          className="
          mt-12
          flex
          items-center
          justify-center
          gap-3
          text-[#7A6954]
          "
        >
          <MapPin
            size={18}
            className="text-[#C6A664]"
          />

          <span className="text-lg">
            Lake View ,Jodhpur
          </span>
        </div>

        {/* Message */}

        <p
          className="
          mt-5
          text-[#7A6954]
          text-lg
          "
        >
          With Love,
The Gangwani & Jaswani Families
        </p>

        {/* Ornament */}

        <img
          src="/images/goldornament.png"
          alt=""
          className="
          w-40
          mx-auto
          mt-10
          opacity-70
          "
        />

      </div>

      {/* Bottom */}

      <div
        className="
        border-t
        border-[#E7D8B8]
        py-6
        "
      >
        <p
          className="
          text-center
          text-[#9B8A6D]
          text-sm
          tracking-wide
          "
        >
          © 2026 Ankit & Bhumi • Crafted with Love
        </p>
      </div>
    </footer>
  );
}
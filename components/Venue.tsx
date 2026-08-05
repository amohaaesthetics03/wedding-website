"use client";

import { motion } from "framer-motion";

export default function Venue() {
  return (
  <section
  id="venue"
  className="bg-[#FCFAF6] py-0 md:py-24"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center">

      <img
        src="/images/goldornament.png"
        className="w-52 mx-auto"
      />

      <div className="w-24 h-px bg-[#C6A664] mx-auto mt-4"></div>

      <h2 className="mt-10 font-serif text-5xl md:text-6xl text-[#6B4E2E]">

        Where Forever Begins

      </h2>

      <p className="mt-5 text-[#8C7A60] text-lg">

        Some journeys are destined to begin forever.

      </p>

    </div>

    {/* Card */}

    <motion.div
      initial={{opacity:0,y:70}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      transition={{duration:.8}}
      className="
mt-16
overflow-hidden
rounded-[40px]
border
border-[#D6B772]
shadow-[0_30px_80px_rgba(0,0,0,0.15)]
bg-white
"
    >

      {/* Banner Image */}

      <img
        src="/images/lakeview.png"
        className="
w-full
h-[300px]
md:h-[520px]
object-cover
"
      />

      {/* Bottom Details */}

      <div
        className="
grid
md:grid-cols-4
gap-10
items-center
p-12
bg-[#FFFDF9]
"
      >

        {/* Destination */}

        <div>

          <p className="uppercase tracking-[0.35em] text-xs text-[#C6A664]">

            Destination

          </p>

          <h3 className="font-serif text-5xl mt-5 text-[#6B4E2E]">

            Lake View

          </h3>

        </div>

        {/* Address */}

        <div>

          <p className="text-[#6B4E2E] font-semibold">

            📍 Address

          </p>

          <p className="mt-4 leading-8 text-[#7A6954]">

            Kaylana Road,

            <br/>

            Jodhpur,

            <br/>

            Rajasthan.

          </p>

        </div>

        {/* Wedding */}

        <div>

          <p className="text-[#6B4E2E] font-semibold">

            📅 Wedding

          </p>

          <p className="mt-4 leading-8 text-[#7A6954]">

            23 August 2026

            <br/>

            8:00 PM Onwards

          </p>

        </div>

        {/* Button */}

        <div className="text-center md:text-right">

          <a
            href="https://www.google.com/maps/dir//Lake+View+Hotel+and+Resort,+Akheraj+Ji+ka+Talab,+Kaylana+Road,+Jodhpur+-+Jaisalmer+Highway,+Pratap+Nagar,+Jodhpur,+Rajasthan+342008/@21.2041728,72.770642,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39418e71ec8fd98b:0x7c18c9dad9f3b238!2m2!1d72.982954!2d26.2984992?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="
inline-flex
rounded-full
bg-[#C6A664]
px-10
py-5
text-white
tracking-[0.25em]
uppercase
text-xs
transition
hover:scale-105
"
          >

            Get Directions →

          </a>

        </div>

      </div>

    </motion.div>

  </div>

</section>

  );
}
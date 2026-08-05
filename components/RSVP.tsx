"use client";

import { motion } from "framer-motion";

const specialGuests = [
  "Mr. Ishwar Lal & Mrs. Hema Jaswani",
  "Mr. Ramesh Lal & Mrs. Sonam Chandwani",
  "Mr. Raj Kumar & Mrs. Laveena Bambani",
  "Mr. Suresh & Mrs. Kiran Mirchandani",
  "Mrs. Rukmani, Mr. Deepal & Mrs. Vidhi Sadnani",
  
];

const sweetGuests = [
  "Amayra",
  "Yuvaan",
  "Amoha",
  "Shivaay",
  "Jivaansh",
  "Lakshay",
  "Mahira"
];

export default function RSVP() {
  return (
    <section
      id="rsvp"
      className="relative bg-[#FCFAF6] py-0 md:py-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <img
            src="/images/goldornament.png"
            alt=""
            className="mx-auto w-52"
          />

          <div className="w-28 h-px bg-[#C6A664] mx-auto mt-4"></div>

          <h2 className="mt-10 font-serif text-5xl md:text-6xl text-[#6B4E2E]">
            Our Heartfelt Request
          </h2>

          <p className="mt-5 text-[#8C7A60] text-lg leading-8">
            Your presence and blessings will be the greatest gift as
            <br />
             we begin this beautiful new chapter.
          </p>
        </motion.div>

        {/* Special Request */}

        {/* Special Request */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="mt-14"
>
  <div className="rounded-[40px] border border-[#D6B772] bg-white px-8 py-14 md:px-16 shadow-xl">

    <h3 className="text-center font-serif text-4xl text-[#8A6A3A]">
      Our Beloved Guests
    </h3>

    <div className="w-24 h-px bg-[#C6A664] mx-auto my-6" />

    <p className="text-center text-[#7A6A56] italic leading-8">
      With folded hands and warm hearts,
      <br />
      we humbly request the gracious presence
      <br />
      and blessings of
    </p>

    <div className="mt-10 space-y-8">

     {specialGuests.map((guest) => (
  <div key={guest} className="text-center">

    {guest === "Along with all members of Jaswani Family" ? (
      <>
        <div className="w-20 h-px bg-[#E6D3A3] mx-auto mb-6" />

        <p className="font-serif italic text-2xl leading-9 text-[#8A6A3A]">
          Together with all the esteemed members
          <br />
          of the Jaswani Family
        </p>
      </>
    ) : (
      <>
        <p className="text-[#C6A664] text-xl mb-3">
          ❦
        </p>

        <p className="font-serif text-2xl leading-10 text-[#6B4E2E]">
          {guest}
        </p>

        <div className="w-16 h-px bg-[#E6D3A3] mx-auto mt-6" />
      </>
    )}

  </div>
))}
<div className="text-center mt-12">
  <div className="w-20 h-px bg-[#E6D3A3] mx-auto mb-6" />

  <p className="font-serif italic text-2xl leading-9 text-[#8A6A3A]">
    Together with all the esteemed members
    <br />
    of the Jaswani Family
  </p>
</div>

    </div>

  </div>
</motion.div>

        {/* Sweet Request */}

       {/* Sweet Request */}

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
  className="mt-10"
>
  <div className="rounded-[40px] border border-[#D6B772] bg-white px-8 py-12 md:px-16 shadow-xl">

    <h3 className="text-center font-serif text-4xl text-[#8A6A3A]">
      Our Little Guests
    </h3>

    <div className="w-24 h-px bg-[#C6A664] mx-auto my-6" />

    <p className="text-center italic text-[#7A6A56]">
      Our little hearts are eagerly waiting
      <br />
      to celebrate this beautiful occasion with you.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-6">

      {sweetGuests.map((child) => (

        <span
          key={child}
          className="font-serif text-2xl text-[#6B4E2E]"
        >
          ❦ {child}
        </span>

      ))}

    </div>

  </div>
</motion.div>


        {/* Closing */}

        <div className="mt-14 text-center">

          <div className="w-24 h-px bg-[#C6A664] mx-auto mb-8" />

          <p className="font-serif italic text-2xl text-[#8A6A3A]">
            We look forward to celebrating with you.
          </p>

          <div className="w-24 h-px bg-[#C6A664] mx-auto mt-8" />

        </div>

      </div>
    </section>
  );
}
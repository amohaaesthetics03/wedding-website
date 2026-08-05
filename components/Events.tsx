"use client";

import { motion } from "framer-motion";
import EventItem from "./EventItem";

const eventDays = [
  {
    date: "22",
    month: "AUGUST",
    year: "2026",
    events: [
      {
        image: "/images/events/haldi.jpg",
        title: "Haldi Carnival",
        time: "12:00 PM Onwards",
      },
      {
        image: "/images/events/behrana.jpg",
        title: "Behrana Sahib",
        time: "4:00 PM Onwards",
      },
      {
        image: "/images/events/sangeet.jpg",
        title: "Sangeet Night",
        time: "8:00 PM Onwards",
      },
    ],
  },
  {
    date: "23",
    month: "AUGUST",
    year: "2026",
    events: [
      {
        image: "/images/hero.png",
        title: "Wedding & Reception",
        time: "8:00 PM Onwards",
      },
    ],
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#FCFAF6] py-0 md:py-24 px-6"
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C6A664]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

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
            className="mx-auto my-4 w-[260px]"
          />

          <div className="w-28 h-px bg-[#C6A664] mx-auto" />

          <h2 className="mt-7 font-serif text-5xl md:text-6xl text-[#6B4E2E]">
            Wedding Festivities
          </h2>

          <p className="mt-3 text-[#8C7A60] text-lg">
            Every celebration, every memory, every moment.
          </p>
        </motion.div>

        {/* Days */}
        <div className="mt-16 space-y-24">

          {eventDays.map((day) => (
            <div key={day.date}>

              {/* Day Heading */}
              <div className="text-center mb-10">

                <p className="text-7xl font-serif text-[#B18A3D]">
                  {day.date}
                </p>

                <p className="mt-2 tracking-[0.35em] text-sm text-[#8C7A60]">
                  {day.month}
                </p>

                <p className="mt-1 tracking-[0.25em] text-xs text-[#A98B55]">
                  {day.year}
                </p>

                <div className="mx-auto mt-5 h-px w-32 bg-[#D8C6A5]" />
              </div>

              {/* Events */}
              <div
  className={`grid justify-items-center gap-10 ${
    day.events.length === 1
      ? "grid-cols-1"
      : "lg:grid-cols-3"
  }`}
>
                {day.events.map((event) => (
                  <EventItem
                    key={event.title}
                    image={event.image}
                    title={event.title}
                    time={event.time}
                  />
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center"
        >
          <div className="w-24 h-px bg-[#C6A664] mx-auto mb-8" />

          <p className="font-serif text-2xl text-[#7A5A33] italic">
       Your presence will make every celebration even more memorable.
          </p>

          <div className="w-24 h-px bg-[#C6A664] mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
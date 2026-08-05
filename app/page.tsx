"use client";

import { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";

import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Events from "@/components/Events";
import RSVP from "@/components/RSVP";
import Venue from "@/components/Venue";
import Footer from "@/components/Footer";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.25;

    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        // Autoplay may be blocked by the browser.
      });
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <main className="overflow-x-hidden bg-[#f8f4ef]">

      <audio
        ref={audioRef}
        src="/music/wedding-theme.mp3"
        loop
      />

      <Hero />
      <Invitation />
      <Events />
      <Venue />
      <RSVP />
      <Footer />

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-6
          right-6
          z-50
          w-14
          h-14
          rounded-full
          bg-white/80
          backdrop-blur-md
          border
          border-[#D6B772]
          shadow-xl
          flex
          items-center
          justify-center
          transition
          hover:scale-105
        "
      >
        {playing ? (
          <Music2 size={22} className="text-[#C6A664]" />
        ) : (
          <VolumeX size={22} className="text-[#C6A664]" />
        )}
      </button>

    </main>
  );
}
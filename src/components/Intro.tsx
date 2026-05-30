import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export default function Intro() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const portfolioItems = [
    {
      type: "image",
      src: "/portfolio/image1.jpg",
      title: "Campaign Shoot",
      category: "Commercial · 2026",
    },
  
    {
      type: "image",
      src: "/portfolio/image2.jpg",
      title: "Fashion Editorial",
      category: "Fashion · 2026",
    },
  
    {
      type: "video",
      src: "/portfolio/video1.mp4",
      title: "Brand Film",
      category: "Film · 2026",
    },
  
    {
      type: "image",
      src: "/portfolio/image3.jpg",
      title: "Portrait Session",
      category: "Portrait · 2026",
    },
  
    {
      type: "image",
      src: "/portfolio/image4.jpg",
      title: "Music Video",
      category: "Production · 2026",
    },
  
    {
      type: "video",
      src: "/portfolio/video2.mp4",
      title: "Commercial Story",
      category: "Commercial · 2026",
    },
  
    {
      type: "image",
      src: "/portfolio/image5.jpg",
      title: "Lifestyle Campaign",
      category: "Content · 2026",
    },
  
    {
      type: "image",
      src: "/portfolio/image6.jpg",
      title: "Visual Narrative",
      category: "Creative · 2026",
    },
  ];

  // Triple copy for infinite effect
  const items = [...portfolioItems, ...portfolioItems, ...portfolioItems];

  useEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const center = gallery.scrollWidth / 3;
    gallery.scrollLeft = center;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      gallery.scrollLeft += e.deltaY;

      const max =
        gallery.scrollWidth - gallery.clientWidth;

      if (gallery.scrollLeft > max - 1000) {
        gallery.scrollLeft = center;
      }

      if (gallery.scrollLeft < 1000) {
        gallery.scrollLeft = center;
      }
    };

    gallery.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      gallery.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, []);

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!galleryRef.current) return;

    setIsDragging(true);

    setStartX(
      e.pageX - galleryRef.current.offsetLeft
    );

    setScrollLeft(galleryRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!isDragging || !galleryRef.current) return;

    e.preventDefault();

    const x =
      e.pageX - galleryRef.current.offsetLeft;

    const walk = (x - startX) * 1.8;

    galleryRef.current.scrollLeft =
      scrollLeft - walk;
  };

  return (
    <section className="relative overflow-hidden bg-[#151515]">

      <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d1d] via-[#151515] to-[#111111]" />

      {/* PHILOSOPHY */}

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <div className="max-w-6xl mx-auto text-center">

          <div className="w-px h-20 bg-[#d4af37] mx-auto mb-10" />

          <span className="text-[#d4af37] uppercase tracking-[0.5em] text-xs">
            THE BLACKFAME PHILOSOPHY
          </span>

          <h2
            className="
            mt-10
            text-white
            font-serif
            font-light
            leading-[1.15]
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl"
          >
            Every frame carries emotion.
            <br />
            Every story deserves cinema.
            <br />
            Every legacy deserves
            <br />
            to be remembered.
          </h2>

          <div className="mt-14">
            <span className="uppercase tracking-[0.45em] text-[11px] text-stone-500">
              EST. 2018 — DAR ES SALAAM
            </span>
          </div>

        </div>

      </div>

      {/* PORTFOLIO */}

      <div className="relative z-10 py-24">

        <div className="text-center px-6 mb-20">

          <span className="text-[#d4af37] uppercase tracking-[0.45em] text-xs">
            THE PORTFOLIO
          </span>

          <h3
            className="
            mt-5
            text-white
            font-serif
            font-light
            text-5xl
            md:text-7xl
            lg:text-8xl"
          >
            Visual Legacy
          </h3>

          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-stone-400
            leading-relaxed"
          >
            Luxury weddings, fashion,
            documentaries and cinematic
            storytelling crafted through
            the BlackFame lens.
          </p>

        </div>

        {/* DELEUNUSUAL STYLE GALLERY */}

        <div
          ref={galleryRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          className="
          flex
          gap-[2px]
          overflow-x-auto
          scrollbar-hide
          cursor-grab
          active:cursor-grabbing
          select-none
          w-full"
        >
          {items.map((item, index) => (
            <div
            key={index}
            className="
              flex-shrink-0
              relative
              group
            "
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt=""
                draggable={false}
                className="
                  w-[280px]
                  sm:w-[320px]
                  md:w-[360px]
                  lg:w-[380px]
                  xl:w-[420px]
          
                  h-[520px]
                  sm:h-[560px]
                  md:h-[620px]
                  lg:h-[700px]
          
                  object-cover
                "
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="
                  w-[280px]
                  sm:w-[320px]
                  md:w-[360px]
                  lg:w-[380px]
                  xl:w-[420px]
          
                  h-[520px]
                  sm:h-[560px]
                  md:h-[620px]
                  lg:h-[700px]
          
                  object-cover
                "
              >
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          
            {/* ADD THIS HERE */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/20
                to-transparent
          
                opacity-0
                group-hover:opacity-100
          
                transition-all
                duration-500
              "
            />
          
            {/* TITLE BLOCK */}
            <div
              className="
                absolute
                bottom-8
                left-8
                z-20
          
                opacity-0
                translate-y-4
          
                group-hover:opacity-100
                group-hover:translate-y-0
          
                transition-all
                duration-500
              "
            >
              <h4
                className="
                  text-white
                  font-serif
                  italic
                  text-3xl
                "
              >
                {item.title}
              </h4>
          
              <p
                className="
                  mt-2
                  uppercase
                  tracking-[0.35em]
                  text-[11px]
                  text-white/60
                "
              >
                {item.category}
              </p>
            </div>
          </div>
          ))}
        </div>

      </div>

    </section>
  );
}
import { AnimatePresence, motion } from "motion/react";
import "@fontsource/oswald/500.css";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import AboutStudio from "./AboutStudio";
import ImageWithFallback from "./ImageWithFallback";
import { requestContact, scrollToSection } from "../lib/navigation";

export default function Intro() {

  const [selectedCategory, setSelectedCategory] =
  useState("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  useEffect(() => {
    if (!openSlug) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSlug(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openSlug]);

  const projects = [
    {
      slug: "water-mission-documentary",
      src: "/portfolio/image1.jpg",
      title: "Water Mission Documentary",
      category: "NGO Project",
      type: "Documentary",
    },
  
    {
      slug: "real-estate-launch",
      src: "/portfolio/image2.jpg",
      title: "Real Estate Launch",
      category: "Development",
      type: "Real Estate",
    },
  
    {
      slug: "brand-campaign",
      src: "/portfolio/image3.jpg",
      title: "Brand Campaign",
      category: "Commercial",
      type: "Commercial",
    },
  
    {
      slug: "community-impact-story",
      src: "/portfolio/image4.jpg",
      title: "Community Impact Story",
      category: "NGO",
      type: "Impact Story",
    },
  
    {
      slug: "corporate-film",
      src: "/portfolio/image5.jpg",
      title: "Corporate Film",
      category: "Corporate",
      type: "Corporate Film",
    },
  
    {
      slug: "event-documentary",
      src: "/portfolio/image6.jpg",
      title: "Event Documentary",
      category: "Events",
      type: "Events",
    },
  ];

  const filteredProjects =
  selectedCategory === "All"
    ? projects
    : projects.filter(
        (project) =>
          project.type === selectedCategory
      );

  const openProject = projects.find((project) => project.slug === openSlug);

  const clients = [
    { logo: "/clients/brimon.png", name: "Brimon" },
    { logo: "/clients/dstv.png", name: "DSTV" },
    { logo: "/clients/stanbic.png", name: "Stanbic" },
    { logo: "/clients/micnics.png", name: "Micnics" },
    { logo: "/clients/yas.png", name: "YAS" },
    { logo: "/clients/rare-bespoke.png", name: "Rare Bespoke" },
    { logo: "/clients/hyatt.png", name: "Hyatt" },
    { logo: "/clients/nibadilishe.png", name: "Nibadilishe" },
    { logo: "/clients/manful.png", name: "Manful" },
    { logo: "/clients/crdb.png", name: "CRDB" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black"
    >

      <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d1d] via-[#151515] to-[#111111]" />

      <AboutStudio onPortfolio={() => scrollToSection("projects")} />

      {/* STATS BAR */}

      <section
        className="
        relative
        z-10

        bg-[#101010]

        border-t
        border-b
        border-white/[0.05]
        "
      >
        <div
          className="
          grid
          grid-cols-2
          lg:grid-cols-4
          "
        >
          {[
            {
              value: 10,
              suffix: "+",
              label: "BRAND COLLABORATIONS",
            },
            {
              value: 5,
              suffix: "+",
              label: "YEARS EXPERIENCE",
            },
            {
              value: 1000000,
              suffix: "M+",
              label: "SOCIAL REACH",
              isMillion: true,
            },
            {
              value: 5,
              suffix: "",
              label: "INDUSTRY VERTICALS",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="
              relative

              flex
              flex-col
              justify-center
              items-center

              h-[210px]
              lg:h-[230px]

              border-r
              border-white/[0.04]

              overflow-hidden
              "
            >
              {/* subtle gradient */}

              <div
                className="
                absolute
                inset-0

                bg-gradient-to-r
                from-white/[0.04]
                via-white/[0.02]
                to-white/[0.04]
                "
              />

              {/* NUMBER */}

              <h3
              style={{
                fontFamily: "Oswald",
                fontWeight: 400,
              }}
              className="
                relative
                z-10

                text-white

                text-[58px]
                md:text-[68px]
                lg:text-[78px]

                leading-[0.9]
                tracking-[-0.04em]
              "
            >
            {item.isMillion ? (
            <CountUp
              start={100000}
              end={1000000}
              duration={3.5}
              separator=","
              redraw
              formattingFn={(value) => {
                if (value >= 990000) {
                  return "1M+";
                }
              
                return `${Math.round(value / 1000)}K`;
              }}
            />
          ) : (
            <>
              <CountUp
                start={0}
                end={item.value}
                duration={2}
                redraw
              />
              {item.suffix}
            </>
          )}
            </h3>

              {/* LABEL */}

              <p
                className="
                relative
                z-10

                mt-8

                text-[10px]

                uppercase
                tracking-[0.45em]

                text-white/30
                "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOME OF OUR CLIENTS */}

      <section
        className="
        relative
        z-10

        py-32

        bg-[#0d0d0d]

        border-t
        border-b
        border-white/[0.04]

        overflow-hidden
        "
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}

          <div className="text-center">

          <p
            className="
            uppercase
            tracking-[0.45em]
            text-[11px]
            text-[#d4af37]
            "
          >
            TRUSTED BY LEADING ORGANIZATIONS
          </p>

          <h2
            className="
            mt-5
            text-white
            font-serif
            font-light
            text-5xl
            md:text-7xl
            lg:text-8xl
            leading-tight
            "
          >
            Clients & Partners
          </h2>

          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {clients.map((client, index) => (

          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
            }}
            className="
            group

            flex
            flex-col
            items-center
            justify-center

            py-10

            transition-all
            duration-700
            "
          >

            <ImageWithFallback
              src={client.logo}
              alt={client.name}
              loading="lazy"
              decoding="async"
              fallback={
                <span className="flex h-[65px] items-center font-serif text-2xl md:text-3xl text-white/70 tracking-wide group-hover:scale-110 transition-all duration-700">
                  {client.name}
                </span>
              }
              className="
              max-h-[65px]
              w-auto

              object-contain

              group-hover:scale-110

              transition-all
              duration-700
              "
            />

            <p
              aria-hidden="true"
              className="
              mt-6

              text-white/40

              text-center

              uppercase
              tracking-[0.25em]

              text-[10px]

              group-hover:text-[#d4af37]

              transition-colors
              duration-500
              "
            >
              {client.name}
            </p>

          </motion.div>

          ))}

        </div>
        </div>
      </section>

      {/* PORTFOLIO */}

      <div
        id="projects"
        className="relative z-10 py-24"
      >
        <div className="text-center px-6 mb-20">

        <span className="text-[#d4af37] uppercase tracking-[0.45em] text-xs">
          SELECTED WORK
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
            Projects
          </h3>

          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-stone-400
            leading-relaxed"
          >
            A collection of campaigns,
            documentaries, commercial films,
            brand stories and visual experiences
            created for organizations and brands.
          </p>

          <div
            className="
            mt-12

            flex
            flex-wrap
            justify-center

            gap-3
            "
          >
          {[
            "All",
            "Commercial",
            "Documentary",
            "Corporate Film",
            "Events",
            "Real Estate",
            "Impact Story",
          ].map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`
                px-5
                py-2

                border
                text-sm

                transition-all
                duration-300

                ${
                  selectedCategory === category
                    ? "bg-[#d4af37] text-black border-[#d4af37]"
                    : "border-white/10 text-white/70 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37]"
                }
              `}
            >
              {category}
            </button>
          ))}
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

           {filteredProjects.map((project, index) => (
              <motion.button
                type="button"
                key={project.slug}
                onClick={() => setOpenSlug(project.slug)}
                aria-label={`View ${project.title}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group block w-full text-left"
              >
                <div className="relative overflow-hidden">

                  <img
                    src={project.src}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="
                    w-full
                    h-[440px]
                    md:h-[520px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                    "
                  />

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                    "
                  />

                <div
                  className="
                  absolute
                  bottom-6
                  left-1/2
                  -translate-x-1/2

                  z-20

                  w-[85%]
                  "
                >
                  <div
                    className="
                    bg-black/70
                    backdrop-blur-sm

                    border
                    border-white/10

                    px-6
                    py-5

                    text-center
                    "
                  >
                    <p
                      className="
                      text-[#d4af37]
                      uppercase
                      tracking-[0.3em]
                      text-[10px]
                      "
                    >
                      {project.category}
                    </p>

                    <h4
                    className="
                    mt-2

                    text-white

                    font-serif
                    font-light

                    text-xl
                    md:text-2xl

                    whitespace-nowrap
                    overflow-hidden
                    text-ellipsis
                    "
                  >
                    {project.title}
                  </h4>

                  <p
                    className="
                    mt-3

                    text-white/50

                    uppercase
                    tracking-[0.2em]

                    text-[11px]
                    "
                  >
                    {project.type}
                  </p>
                  </div>
                </div>

                </div>
              </motion.button>
            ))}

          </div>
        </div>
        </div>
      </div>

      {/* PROJECT LIGHTBOX */}

      {createPortal(
      <AnimatePresence>
        {openProject && (
          <motion.div
            key="project-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={openProject.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setOpenSlug(null)}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-full overflow-y-auto grid md:grid-cols-[1.1fr_0.9fr] bg-[#0d0d0d] border border-white/10"
            >
              <button
                type="button"
                onClick={() => setOpenSlug(null)}
                aria-label="Close"
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/15 text-white flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
              >
                <X size={18} />
              </button>

              <img
                src={openProject.src}
                alt={openProject.title}
                className="w-full h-[50vh] md:h-[80vh] max-h-[720px] object-cover"
              />

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-[#d4af37] uppercase tracking-[0.35em] text-[10px]">
                  {openProject.category}
                </p>
                <h4 className="mt-4 text-white font-serif font-light text-4xl md:text-5xl leading-tight">
                  {openProject.title}
                </h4>
                <p className="mt-3 text-white/40 uppercase tracking-[0.25em] text-[11px]">
                  {openProject.type}
                </p>
                <div className="w-10 h-px bg-[#d4af37] my-8" />
                <p className="text-stone-400 leading-relaxed">
                  Planning a {openProject.type.toLowerCase()} project of your own?
                  Tell us about it and we'll show you more work like this.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOpenSlug(null);
                    requestContact({
                      message: `I saw "${openProject.title}" on your website and would like to discuss a similar project.`,
                    });
                  }}
                  className="mt-8 self-start px-8 py-4 bg-[#d4af37] text-black uppercase tracking-[0.25em] text-xs hover:bg-[#e8cf7a] transition-colors"
                >
                  Start a Similar Project
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}

    </section>
  );
}
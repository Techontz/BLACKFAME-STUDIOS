import { motion } from "motion/react";
import ImageWithFallback from "./ImageWithFallback";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

export default function TeamSection() {
  const team = [
    {
      name: "Ruhumuliza Byarugaba",
      role: "Founder, CEO & Creative Director",
      image: "/team/ruhumuliza.jpg",
      bio: "Leading creative direction, strategic growth and partnerships.",
    },
    {
      name: "Christopher Chacha Mwita",
      role: "Lead Videography Team",
      image: "/team/christopher.jpg",
      bio: "Overseeing cinematic productions across documentary, commercial and corporate projects.",
    },
    {
      name: "Eric Godfrey",
      role: "Lead Photography Team",
      image: "/team/eric.jpg",
      bio: "Capturing authentic visual stories through photography.",
    },
    {
      name: "Vanessa Moshi",
      role: "Marketing Lead",
      image: "/team/vanessa.jpg",
      bio: "Driving audience engagement and marketing strategy.",
    },
    {
      name: "Conrad Bubex",
      role: "IT Technician",
      image: "/team/conrad.jpg",
      bio: "Managing systems, infrastructure and digital solutions.",
    },
    {
      name: "Fancy Christopher",
      role: "Graphics & Design Team Leader",
      image: "/team/fancy.jpg",
      bio: "Creating branding, graphics and visual identities.",
    },
  ];

  return (
    <section
    id="team"
    className="relative bg-black py-32 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black to-[#050505]" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/[0.02] blur-[200px]" />

      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-24">

          <span
            className="
            text-[11px]
            uppercase
            tracking-[0.5em]
            text-[#d4af37]
          "
          >
            OUR TEAM
          </span>

          <h2
            className="
            mt-6
            text-white
            font-serif
            font-light
            text-5xl
            md:text-7xl
            leading-none
          "
          >
            Meet The Team
          </h2>

          <p
            className="
            mt-8
            text-stone-500
            leading-relaxed
            max-w-xl
            mx-auto
          "
          >
            Creative thinkers, filmmakers, strategists and
            specialists united by a passion for exceptional
            storytelling and visual excellence.
          </p>

        </div>

        {/* Team Grid */}

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-6
          gap-x-5
          gap-y-12
        "
        >
          {team.map((member, index) => (

            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              className="group"
            >

              {/* Image */}

              <div
                className="
                relative
                overflow-hidden
                border
                border-white/[0.06]
              "
              >

                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  fallback={
                    <div
                      role="img"
                      aria-label={member.name}
                      className="w-full aspect-[3/4] flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#0b0b0b] transition-all duration-700 group-hover:scale-[1.04]"
                    >
                      <span className="font-serif text-5xl text-[#d4af37]/70 tracking-wider">
                        {initials(member.name)}
                      </span>
                    </div>
                  }
                  className="
                  w-full
                  aspect-[3/4]
                  object-cover
                  grayscale
                  transition-all
                  duration-700
                  group-hover:grayscale-0
                  group-hover:scale-[1.04]
                "
                />

                {/* Premium Hover */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-black/75

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-500

                  flex
                  flex-col
                  justify-between

                  p-5
                "
                >

                  <div
                    className="
                    w-8
                    h-[1px]
                    bg-[#d4af37]
                  "
                  />

                  <div>

                    <p
                      className="
                      text-[13px]
                      leading-relaxed
                      text-stone-300
                    "
                    >
                      {member.bio}
                    </p>


                  </div>

                </div>

              </div>

              {/* Info */}

              <div className="mt-5">

                <div
                  className="
                  w-6
                  h-[1px]
                  bg-[#d4af37]
                  mb-4
                "
                />

                <h3
                  className="
                  text-white
                  text-[17px]
                  leading-tight
                  font-serif
                "
                >
                  {member.name}
                </h3>

                <p
                  className="
                  mt-2
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-stone-500
                  leading-relaxed
                "
                >
                  {member.role}
                </p>

              </div>

            </motion.div>

          ))}
        </div>

      </div>
    </section>
  );
}
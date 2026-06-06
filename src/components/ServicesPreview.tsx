import { motion } from "motion/react";
import {
  Camera,
  Building2,
  Film,
  Mic,
  Plane,
  FileVideo,
  PenTool,
  Landmark,
} from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      icon: Film,
      title: "Documentary Production",
      category: "Storytelling",
      description:
        "Capturing authentic stories that highlight people, communities, programs and measurable impact.",
    },
    {
      icon: Building2,
      title: "Corporate Films",
      category: "Corporate",
      description:
        "Professional films communicating organizational vision, culture, achievements and identity.",
    },
    {
      icon: Camera,
      title: "Photography",
      category: "Visual Media",
      description:
        "Corporate, documentary, commercial and event photography designed for visibility.",
    },
    {
      icon: FileVideo,
      title: "Event Coverage",
      category: "Events",
      description:
        "Comprehensive photography and videography for conferences, launches and forums.",
    },
    {
      icon: Plane,
      title: "Drone Services",
      category: "Aerial Production",
      description:
        "Aerial imagery providing scale, perspective and cinematic visual impact.",
    },
    {
      icon: Landmark,
      title: "Infrastructure Documentation",
      category: "Development",
      description:
        "Visual documentation of developments, projects and transformation stories.",
    },
    {
      icon: Mic,
      title: "Podcast Production",
      category: "Audio",
      description:
        "End-to-end podcast production designed to educate, inspire and engage audiences.",
    },
    {
      icon: PenTool,
      title: "Content Development",
      category: "Strategy",
      description:
        "Strategic visual content for websites, reports, campaigns and social media.",
    },
  ];

  return (
    <section id="services"
    className="
    relative
    py-36

    bg-[#0d0d0d]

    border-t
    border-b
    border-white/[0.04]

    overflow-hidden
    "
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.5em] text-[#d4af37] text-xs">
            OUR SERVICES
          </p>

          <h2
            className="
            mt-6
            text-white
            font-serif
            font-light
            text-5xl
            md:text-7xl
            leading-tight
          "
          >
            Creative Solutions
            <br />
            For Organizations
          </h2>

          <p
            className="
            mt-8
            text-stone-400
            text-lg
            leading-relaxed
          "
          >
            We help organizations, institutions, NGOs,
            developers and brands communicate their
            vision, impact and achievements through
            premium visual storytelling and strategic
            content creation.
          </p>
        </div>

        {/* Services Grid */}

        <div
          className="
          mt-24

          grid
          md:grid-cols-2
          lg:grid-cols-4

          gap-6
        "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className="
                group

                bg-[#111111]

                border
                border-white/10

                hover:border-[#d4af37]

                p-8

                min-h-[340px]

                transition-all
                duration-500
                "
              >
                <Icon
                  className="
                  w-10
                  h-10

                  text-[#d4af37]

                  mb-8
                "
                />

                <p
                  className="
                  uppercase
                  tracking-[0.3em]
                  text-[10px]
                  text-stone-500
                "
                >
                  {service.category}
                </p>

                <h3
                  className="
                  mt-4
                  text-white
                  text-2xl
                  font-serif
                  font-light
                "
                >
                  {service.title}
                </h3>

                <p
                  className="
                  mt-5
                  text-stone-400
                  leading-relaxed
                "
                >
                  {service.description}
                </p>

                <button
                  className="
                  mt-8

                  text-[#d4af37]

                  uppercase

                  tracking-[0.3em]

                  text-[11px]

                  border-b

                  border-[#d4af37]

                  pb-1

                  hover:tracking-[0.4em]

                  transition-all
                "
                >
                  Learn More
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="text-center mt-24">

          <button
            className="
            px-10
            py-4

            bg-[#d4af37]

            text-black

            uppercase

            tracking-[0.3em]

            text-xs

            hover:opacity-90

            transition-all
          "
          >
            View All Services
          </button>

        </div>
      </div>
    </section>
  );
}
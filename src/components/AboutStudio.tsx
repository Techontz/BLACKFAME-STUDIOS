import { motion } from "motion/react";

export default function AboutStudio({
    onPortfolio,
  }: {
    onPortfolio: () => void;
  }) {
  return (
    <section className="relative min-h-screen bg-[#0d0d0d] overflow-hidden pt-40 lg:pt-22 pb-32 lg:pb-30">

      {/* Background */}

      <div className="absolute inset-0">

      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#080808] to-[#0d0d0d]" />

        <div className="absolute left-[20%] top-[20%] w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[180px]" />

      </div>

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6

        min-h-screen

        flex
        items-center
        "
      >

        <div
          className="
          grid

          lg:grid-cols-[1.1fr_0.9fr]

          gap-20

          items-center
          "
        >

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <img
              src="/portfolio/image1.jpg"
              className="
              w-full

              h-[650px]

              object-cover
              "
            />

            {/* Floating Card */}

            <div
              className="
              absolute

              -bottom-10
              right-8

              bg-[#0d0d0d]

              border
              border-white/10

              px-10
              py-8
              "
            >
              <h3
                className="
                text-white

                text-5xl

                font-bold
                "
              >
                2023
              </h3>

              <p
                className="
                mt-2

                uppercase

                tracking-[0.3em]

                text-[10px]

                text-stone-500
                "
              >
                Founded
              </p>
            </div>

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <span
              className="
              uppercase

              tracking-[0.45em]

              text-[11px]

              text-stone-500
              "
            >
              ABOUT US
            </span>

            <h2
              className="
              mt-8

              text-white

              font-serif
              font-light

              text-5xl
              md:text-7xl

              leading-[0.95]
              "
            >
              Stories That
              <br />
              Matter.
            </h2>

            <h3
              className="
              mt-2

              text-stone-500

              italic

              font-serif

              text-4xl
              md:text-6xl
              "
            >
              Deserve To Be Seen.
            </h3>

            <p
              className="
              mt-10

              text-stone-400

              leading-relaxed

              text-lg
              "
            >
              BlackFame Studios is a visual storytelling
              and production company helping
              organizations communicate their vision,
              impact and achievements through
              photography, filmmaking and creative
              media.
            </p>

            <p
              className="
              mt-8

              text-stone-500

              leading-relaxed
              "
            >
              We work with corporations, NGOs,
              development organizations, institutions,
              real estate developers and growing
              brands to create visuals that inform,
              inspire and connect with audiences.
            </p>

            {/* Tags */}

            <div
              className="
              mt-10

              flex
              flex-wrap

              gap-3
              "
            >

              {[
                "Authentic Storytelling",
                "Meaningful Impact",
                "Creative Excellence",
                "Long-Term Partnerships",
                "Attention To Detail",
              ].map((item) => (
                <div
                  key={item}
                  className="
                  px-5
                  py-3

                  border
                  border-white/10

                  text-[11px]

                  uppercase

                  tracking-[0.15em]

                  text-stone-300
                  "
                >
                  {item}
                </div>
              ))}

            </div>

            {/* Quote */}

            <div
              className="
              mt-12

              border-l
              border-[#d4af37]

              pl-6
              "
            >
            <div
                className="
                mt-12

                flex
                flex-col
                sm:flex-row

                gap-4
                "
            >

            <button
            onClick={onPortfolio}
            className="
                w-full
                sm:w-[220px]

                px-8
                py-4

                flex
                items-center
                justify-center

                bg-[#d4af37]
                text-black
                uppercase
                tracking-[0.25em]
                text-xs
            "
            >
            Explore Portfolio
            </button>

            <a
                href="/BlackFame-Portfolio.pdf"
                download
                className="
                    w-full
                    sm:w-[220px]

                    px-8
                    py-4

                    flex
                    items-center
                    justify-center

                    text-center

                    border
                    border-white/10

                    text-white
                    uppercase
                    tracking-[0.25em]
                    text-xs

                    hover:border-[#d4af37]
                    hover:text-[#d4af37]

                    transition-all
                "
                >
                Download Portfolio
                </a>
            </div>
            <p
                className="
                mt-5

                text-stone-400
                italic
                text-xl
                font-serif
                "
            >
                Because behind every organization
                is a story worth sharing.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
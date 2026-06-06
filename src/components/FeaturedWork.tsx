// import { motion, AnimatePresence } from "motion/react";
// import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
// import { useState } from "react";

// interface FeaturedWorkProps {
//   onNavigate?: (screen: string) => void;
// }

// export default function FeaturedWork() {
//   const projects = [
//     {
//       id: "photography",
//       eyebrow: "BEHIND THE FEED",
//       title: "Every frame carries emotion. Every story deserves cinema.",
//       description: "The camera stops. The work doesn't.",
//       credits: "BLACKFAME × STUDIO",
//       year: "2026",
//       category: "CAMPAIGN SHOOT",
//       image: "/portfolio/image1.jpg",
//     },

//     {
//       id: "films",
//       eyebrow: "VISUAL STORYTELLING",
//       title: "Every project begins with a story waiting to be told.",
//       description: "Every frame carries intention.",
//       credits: "BLACKFAME × FILMS",
//       year: "2026",
//       category: "CINEMATIC FILM",
//       image: "/portfolio/image6.jpg",
//     },

//     {
//       id: "documentaries",
//       eyebrow: "REAL STORIES",
//       title: "Real people. Real emotions. Real cinematic moments.",
//       description: "Authentic moments. Genuine stories.",
//       credits: "BLACKFAME × DOCS",
//       year: "2026",
//       category: "DOCUMENTARY",
//       image: "/portfolio/image5.jpg",
//     },

//     {
//       id: "podcasts",
//       eyebrow: "MODERN MEDIA",
//       title: "Conversations captured with clarity and purpose.",
//       description: "Ideas deserve beautiful presentation.",
//       credits: "BLACKFAME × PODCAST",
//       year: "2026",
//       category: "PODCAST SERIES",
//       image: "/portfolio/image4.jpg",
//     },
//   ];

//   const [active, setActive] = useState(0);

//   const current = projects[active];

//   const next = () => {
//     setActive((prev) =>
//       prev === projects.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prev = () => {
//     setActive((prev) =>
//       prev === 0 ? projects.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section className="bg-[#050505] overflow-hidden">

// <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-28">

//       <div className="grid lg:grid-cols-[1fr_500px] gap-12 lg:gap-0 items-center">

//           {/* LEFT SIDE */}

//             <div
//               className="
//               flex
//               items-center
//               h-full

//               order-2
//               lg:order-1
//               "
//             >

//             <AnimatePresence mode="wait">

//               <motion.div
//                 className="max-w-[520px]"
//                 key={current.id}
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -20,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                 }}
//               >

//                 <p
//                   className="
//                   text-white/25
//                   uppercase
//                   tracking-[0.5em]
//                   text-xs
//                   mb-10
//                   "
//                 >
//                   {current.eyebrow}
//                 </p>

//                 <h2
//                   className="
//                   text-white
//                   font-serif
//                   font-light
//                   leading-[1.15]

//                   text-3xl
//                   sm:text-4xl
//                   md:text-5xl
//                   lg:text-6xl
//                   xl:text-7xl
//                   "
//                 >
//                   {current.title}
//                 </h2>

//                 <p
//                   className="
//                   mt-6
//                   max-w-2xl
//                   text-stone-400
//                   leading-relaxed
//                   "
//                 >
//                   {current.description}
//                 </p>

//                 <div
//                   className="
//                   mt-14
//                   uppercase
//                   tracking-[0.45em]
//                   text-[11px]
//                   text-white/25
//                   space-y-3
//                   "
//                 >
//                   <div>{current.credits}</div>
//                   <div>{current.year}</div>
//                   <div>{current.category}</div>
//                 </div>

//               </motion.div>

//             </AnimatePresence>

//           </div>

//             {/* RIGHT SIDE */}

//             <div
//               className="
//               flex
//               flex-col
//               items-center
//               justify-center

//               order-1
//               lg:order-2
//               "
//             >

//             {/* FIXED FRAME */}

//             <div
//               className="
//               relative
//               w-[320px]
//               lg:w-[360px]

//               h-[500px]
//               lg:h-[590px]

//               overflow-hidden
//               "
//             >

//               <div className="absolute inset-0">

//                   <img
//                     src={current.image}
//                     alt=""
//                     className="
//                     w-full
//                     h-full
//                     object-cover
//                     "
//                   />

//                   <div
//                     className="
//                     absolute
//                     inset-0
//                     bg-black/10
//                     "
//                   />

//                   <div
//                     className="
//                     absolute
//                     inset-0
//                     flex
//                     items-center
//                     justify-center
//                     gap-10

//                     text-white/75
//                     text-xl
//                     font-light
//                     "
//                   >
//                     <span>Behind</span>
//                     <span>The</span>
//                     <span>Scenes</span>
//                   </div>

//                   <button
//                     className="
//                     absolute
//                     bottom-6
//                     right-6

//                     w-11
//                     h-11

//                     rounded-full
//                     border
//                     border-white/40

//                     flex
//                     items-center
//                     justify-center

//                     text-white
//                     "
//                   >
//                     <Volume2 size={15} />
//                   </button>

//                   </div>

//             </div>

//             {/* CONTROLS */}

//               <div
//                 className="
//                 flex
//                 items-center
//                 justify-between

//                 mt-5

//                 w-[320px]
//                 lg:w-[360px]
//                 "
//               >

//               <button
//                 onClick={prev}
//                 className="
//                   w-10
//                   h-10
//                   lg:w-10
//                   lg:h-10

//                   rounded-full
//                   border
//                   border-white/15

//                   flex
//                   items-center
//                   justify-center

//                   text-white/70
//                   hover:border-white/30
//                   transition-all
//                   "
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               <div
//                 className="
//                 flex
//                 gap-2
//                 mx-6
//                 "
//               >

//                 {projects.map((_, index) => (
//                   <div
//                     key={index}
//                     className={`
//                       h-[2px]
//                       transition-all
//                       duration-500
//                       ${
//                         active === index
//                           ? "w-14 bg-white"
//                           : "w-3 bg-white/20"
//                       }
//                     `}
//                   />
//                 ))}

//               </div>

//               <button
//                 onClick={next}
//                 className="
//                 w-10
//                 h-10
//                 rounded-full
//                 border
//                 border-white/15

//                 flex
//                 items-center
//                 justify-center

//                 text-white/70
//                 "
//               >
//                 <ChevronRight size={20} />
//               </button>

//               <span
//                 className="
//                 text-white/20
//                 text-[12px]
//                 tracking-[0.25em]
//                 tracking-[0.35em]
//                 uppercase
//                 "
//               >
//                 {String(active + 1).padStart(2, "0")}
//                 /
//                 {String(projects.length).padStart(2, "0")}
//               </span>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "I was impressed not only by the technical skill but also by how approachable and collaborative the team was. They made complex decisions feel easy and guided us through every step without overwhelming us with jargon. The final website reflects our brand perfectly and has been well received by both clients and staff. It's rare to find a team that combines professionalism with such a human touch.",
    name: "Priya Nandakumar",
    title: "Founder & Creative Lead, Studio Nanda",
  },
  {
    quote:
      "From start to finish, the development process was smooth and well-managed. The team was incredibly responsive to our feedback and brought creative solutions to the table that elevated our online presence. What stood out most was their attention to detail and genuine interest in helping our business grow. We've seen a noticeable improvement in user engagement since the new site went live.",
    name: "Jonathan Cruz",
    title: "Operations Manager, Evergreen Supply Co.",
  },
  {
    quote:
      "Working with the team on our new website was a seamless and genuinely enjoyable experience. They took the time to understand our vision, offered thoughtful suggestions, and delivered a site that truly represents who we are as a company. The communication was clear throughout, deadlines were met, and the final product exceeded our expectations in both design and functionality. I would confidently recommend their services to anyone looking for a professional and dependable development partner.",
    name: "Amanda Lee",
    title: "Marketing Director, BrightPath Consulting",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      type: "spring",
    },
  }),
};

export default function TestimonialsSection() {
  return (
    <section className="w-full mt-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#283A64] mb-8">
        What <span className="text-cyan-400">Clients</span> Are Saying
      </h2>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="rounded-2xl border border-gray-300 bg-gradient-to-br from-[#e9eaf3] to-[#d3d7e6] shadow-lg p-8"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} className="text-yellow-400 text-xl mx-0.5" />
              ))}
            </div>
            <p className="text-gray-800 text-sm md:text-md mb-6 text-center">{t.quote}</p>
            <div className="text-left mt-4">
              <div className="font-bold text-lg text-[#283A64]">{t.name}</div>
              <div className="text-gray-600 text-sm">{t.title}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 
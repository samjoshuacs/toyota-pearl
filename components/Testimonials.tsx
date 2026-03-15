// External Components
import TestimonialCard from "./TestimonialCard";

// Dummy Data
const headerTag = "What They Say";
const headerTitle = "Customer Testimonials";
const headerDescription = "Don't just take our word for it — hear from our happy Toyota owners about their experience with Toyota Agent Pearl.";
const testimonials = [
  {
    id: 1,
    name: "Marco Reyes",
    role: "Business Owner",
    review:
      "Toyota Agent Pearl made the entire car buying process incredibly smooth. They helped me get the best deal on my Fortuner with a financing plan that fit my budget perfectly. I couldn't be happier!",
    rating: 5,
    model: "Toyota Fortuner 4x4",
    avatar: "/images/testimonials_1.jpg",
  },
  {
    id: 2,
    name: "Sarah Lim",
    role: "Marketing Executive",
    review:
      "From inquiry to delivery, the team at Toyota Agent Pearl was professional and attentive. The free insurance promo was a fantastic bonus. My Corolla was delivered right to my home — absolutely stress-free!",
    rating: 5,
    model: "Toyota Corolla Altis",
    avatar: "/images/testimonials_2.jpg",
  },
  {
    id: 3,
    name: "Daniel Tan",
    role: "Engineer",
    review:
      "I was hesitant at first, but the sales agent was very knowledgeable and patient. They helped me choose the right Hilux for my needs. The after-sales support has also been excellent. Highly recommend!",
    rating: 5,
    model: "Toyota Hilux G",
    avatar: "/images/testimonials_3.jpg",
  },
];

// Component Body
const Testimonials = () => {

  return (
    <section
      className="py-20 bg-[#f8f8f8]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="text-center mb-14">
                <span className="text-[#EB0A1E] text-xs font-semibold tracking-widest uppercase">{headerTag}</span>
                <h2 className="text-[#1a1a1a] text-3xl sm:text-4xl font-bold mt-2 mb-4">
                    {headerTitle}
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                    {headerDescription}
                </p>
            </div>

            {/* Testimonial cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

                {testimonials.map((t) => (
                  <TestimonialCard key={t.id} testimonial={t} />
                ))}

            </div>

        </div>

    </section>
  )
}

export default Testimonials
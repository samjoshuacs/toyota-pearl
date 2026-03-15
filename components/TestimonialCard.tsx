// Libraries
import { Star, Quote } from "lucide-react";
import Image from "next/image";

// Data Types
import { TestimonialCardProps } from "@/types/testimonial";

const TestimonialCard = ({testimonial}:TestimonialCardProps) => {
  return (
        <div
            key={testimonial.id}
            className="bg-[#f8f8f8] rounded-2xl p-7 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300 relative"
        >
            <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} className="text-[#EB0A1E]" />
            </div>

            {/* Stars */}
            <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#EB0A1E] fill-[#EB0A1E]" />
                ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 text-sm leading-relaxed italic">"{testimonial.review}"</p>

            {/* Model tag */}
            <span className="inline-block bg-red-50 text-[#EB0A1E] text-xs font-medium px-3 py-1 rounded-full w-fit">
                {testimonial.model}
            </span>

            {/* Customer info */}
            <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                    <p className="text-[#1a1a1a] font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
            </div>

        </div>

    
  )
}

export default TestimonialCard
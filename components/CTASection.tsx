// Libraries
import { CalendarCheck, MessageCircle } from "lucide-react";
import Link from "next/link";

// Dummy Data
const headerTag = "Get Started Today";
const headerDescription = "Take the first step toward owning your dream Toyota. Book a test drive or reach out to our sales agents — we're here to help you every step of the way.";

const CTASection = () => {
    return (
        <section
            className="py-20 bg-[#1a1a1a] relative overflow-hidden"
            style={{ fontFamily: "Poppins, sans-serif" }}
        >

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#EB0A1E]/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EB0A1E]/10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="inline-block bg-[#EB0A1E]/20 text-[#EB0A1E] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                    {headerTag}
                </span>

                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                    Ready to Drive Your<br />
                    <span className="text-[#EB0A1E]">Toyota?</span>
                </h2>

                <p className="text-gray-400 text-base max-w-xl mx-auto mb-10 leading-relaxed">
                    {headerDescription}
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                        href="#contact"
                        className="flex items-center gap-2 bg-[#EB0A1E] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#c5081a] transition-colors duration-200 text-sm"
                    >
                        <CalendarCheck size={17} />
                        Book Test Drive
                    </Link>
                    <Link
                        href="#contact"
                        className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-colors duration-200 text-sm"
                    >
                        <MessageCircle size={17} />
                        Contact Sales Agent
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default CTASection
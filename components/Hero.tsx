// Libraries
import { ChevronDown, BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Dummy Data
const AGENT_NAME = "Mae Pearl";
const HERO_IMAGE = "/images/vehicle_1.jpg";
const AGENT_IMAGE = "/images/photo_2.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Toyota SUV"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d0d0d]/90 via-[#0d0d0d]/65 to-transparent" />
      </div>

      {/* Left Content */}
      <div className="relative flex flex-col lg:flex-row gap-15 lg:gap-25 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl flex justify-center flex-col text-center lg:text-start">

          <div className="h-fit mb-5">
            <span className="bg-[#EB0A1E] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
              Authorized Toyota Agent
            </span>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Your New <span className="text-[#EB0A1E]">Toyota</span><br />
             Awaits in Iligan City
          </h1>

          <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
            Skip the dealership runaround. Whether you are looking for fast financing approvals or the perfect family vehicle, experience a seamless, VIP car-buying journey with Mae Pearl at Toyota Iligan.
          </p>

          <div className="flex justify-center lg:justify-start flex-wrap gap-4">
            <Link
              href="#vehicles"
              className="bg-[#EB0A1E] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#c5081a] transition-colors duration-200 text-sm"
            >
              Get Pre-Approved
            </Link>
            <Link
              href="#contact"
              className="bg-white/10 backdrop-blur-sm border border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/20 transition-colors duration-200 text-sm"
            >
              Browse 2026 Models
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="max-w-2xl">
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-140 lg:max-w-none">
            <div
              className="relative w-full lg:w-125 overflow-hidden"
              style={{ borderRadius: "16px" }}
            >
              <Image
                src={AGENT_IMAGE}
                alt={`${AGENT_NAME} - Certified Toyota Marketing Professional`}
                className="w-full h-105 lg:h-140 object-cover object-center"
                height={420}
                width={560}
                style={{ borderRadius: "16px" }}
              />

              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                background:
                    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                height: "140px",
                borderRadius: "0 0 16px 16px",
                }}
              />

                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center gap-3"
                  style={{
                  backgroundColor: "#EB0A1E",
                  borderRadius: "0 0 16px 16px",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0"
                    style={{ border: "2px solid rgba(255,255,255,0.3)" }}
                  >
                    <BadgeCheck size={20} style={{ color: "#EB0A1E" }} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[15px] leading-tight">
                      {AGENT_NAME}
                    </p>
                    <p
                      className="text-[12px] font-medium leading-snug"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      Certified Marketing Professional | Toyota Iligan
                    </p>
                  </div>
                </div>

                <div
                  className="absolute top-5 right-5 px-4 py-3 text-center"
                  style={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  backdropFilter: "blur(8px)",
                  }}
                >
                  <p
                    className="font-extrabold"
                    style={{ fontSize: "22px", color: "#EB0A1E", lineHeight: 1 }}
                  >
                    500+
                  </p>
                  <p
                    className="font-semibold"
                    style={{ fontSize: "11px", color: "#58595B", marginTop: 2 }}
                  >
                    Happy Owners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Scroll indicator */}
      <Link
        href="#vehicles"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </Link>
    </section>
  )
}

export default Hero
// Libraries
import { ShieldCheck, CreditCard, Truck, HeadphonesIcon } from "lucide-react";

// Dummy Data
const headerTag = "Our Advantage";
const headerTitle = "Why Choose Toyota Agent Pearl?";
const headerDescription = "We go beyond just selling cars. We build long-lasting relationships rooted in trust, value, and exceptional service.";
const features = [
  {
    icon: ShieldCheck,
    title: "Authorized Toyota Dealer",
    description:
      "We are an officially recognized Toyota agent, ensuring you receive genuine vehicles, parts, and warranties directly from the manufacturer.",
    color: "bg-red-50 text-[#EB0A1E]",
  },
  {
    icon: CreditCard,
    title: "Flexible Financing Options",
    description:
      "Enjoy competitive loan packages with low interest rates, minimal down payments, and repayment terms tailored to fit your budget.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver your brand new Toyota straight to your doorstep, no matter where you are in the Philippines — fast, safe, and hassle-free.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: HeadphonesIcon,
    title: "After-Sales Support",
    description:
      "Our dedicated team is with you every step of the way — from purchase to maintenance, we ensure your Toyota ownership experience is second to none.",
    color: "bg-amber-50 text-amber-600",
  },
];
const statsBar = [
    { value: "10+", label: "Years of Experience" },
    { value: "5,000+", label: "Happy Customers" },
    { value: "50+", label: "Toyota Models" },
    { value: "98%", label: "Customer Satisfaction" },
]

// Component Body
const WhyChooseUs = () => {

  return (
    <section
      id="why-us"
      className="py-20 bg-white"
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

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {features.map((feature) => {
                const Icon = feature.icon;
                return (
                <div
                    key={feature.title}
                    className="bg-[#f8f8f8] rounded-2xl p-7 hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
                >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto ${feature.color}`}>
                        <Icon size={26} />
                    </div>
                    <h3 className="text-[#1a1a1a] font-bold text-base mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed text-center">{feature.description}</p>
                </div>
                );
            })}
            </div>

            {/* Stats bar */}
            <div className="mt-16 bg-[#EB0A1E] rounded-2xl py-10 px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsBar.map((stat) => (
                <div key={stat.label} className="text-center">
                    <p className="text-white text-3xl font-bold">{stat.value}</p>
                    <p className="text-red-100 text-xs mt-1">{stat.label}</p>
                </div>
            ))}
            </div>
            
        </div>

    </section>
  )
}

export default WhyChooseUs
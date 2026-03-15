import CTASection from "@/components/CTASection";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  
  return (
    <div className="w-full">
      <Hero />
      <FeaturedVehicles />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      {/* Contact */}

      {/* Footer */}
    </div>
  );
}

// Libraries
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Dummy Data
const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Vehicles", href: "#vehicles" },
    { label: "Why Us", href: "#why-us" },
    { label: "Promos", href: "#promos" },
    { label: "Contact", href: "#contact" },
];
const models = [
    "Toyota Fortuner",
    "Toyota Hilux",
    "Toyota Corolla Altis",
    "Toyota Innova Cross",
    "Toyota Vios",
    "Other",
];
const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
];

// Component Body
const Footer = () => {
    return (
        <footer
            className="bg-[#111111] text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

                {/* Top Footer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <Image src="/images/photo_2.jpg" className="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center border-0 object-cover" alt="Pearl Tingcang Toyota Agent Icon Photo" width={40} height={40}/>
                            <div>
                                <p className="text-white font-bold text-base leading-tight">Toyota Agent</p>
                                <p className="text-[#EB0A1E] font-semibold text-xs leading-tight">Pearl Tingcang</p>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Your trusted authorized Toyota agent. We help Filipinos drive home their dream Toyota with the best deals, financing, and nationwide delivery.
                        </p>
                        
                        <div className="flex gap-3">
                            {socials.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <Link
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EB0A1E] transition-colors duration-200"
                                    >
                                        <Icon size={15} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-gray-400 text-sm hover:text-[#EB0A1E] transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </div>

                    {/* Models */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Our Models</h4>
                        <ul className="flex flex-col gap-3">
                        {models.map((m) => (
                            <li key={m}>
                            <Link
                                href="#vehicles"
                                className="text-gray-400 text-sm hover:text-[#EB0A1E] transition-colors duration-200"
                            >
                                {m}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Contact Us</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex gap-3">
                                <MapPin size={15} className="text-[#EB0A1E] shrink mt-0.5" />
                                <span className="text-gray-400 text-sm">123 Toyota Ave., Makati City, Metro Manila</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={15} className="text-[#EB0A1E] shrink mt-0.5" />
                                <a href="tel:+639001234567" className="text-gray-400 text-sm hover:text-[#EB0A1E] transition-colors">
                                    +63 900 123 4567
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={15} className="text-[#EB0A1E] shrink mt-0.5" />
                                <a href="mailto:sales@toyotaagentpearl.com" className="text-gray-400 text-sm hover:text-[#EB0A1E] transition-colors">
                                    sales@toyotaagentpearl.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs">
                        © 2026 Toyota Agent Pearl. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs">
                        An Authorized Toyota Sales Agent in the Philippines
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer
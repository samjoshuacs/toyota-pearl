'use client';

// Libraries
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

// Dummy Data
const models = [
  "Toyota Fortuner",
  "Toyota Hilux",
  "Toyota Corolla Altis",
  "Toyota RAV4",
  "Toyota Innova Cross",
  "Toyota Vios",
  "Toyota Wigo",
  "Toyota Rush",
  "Toyota Yaris",
  "Other",
];
const contactInformation = [
    {
        icon: MapPin,
        label: "Address",
        value: "123 Toyota Ave., Makati City, Metro Manila, Philippines",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+63 900 123 4567",
    },
    {
        icon: Mail,
        label: "Email",
        value: "sales@toyotaagentpearl.com",
    },
    {
        icon: Clock,
        label: "Hours",
        value: "Mon–Sat: 8:00 AM – 6:00 PM\nSun: 9:00 AM – 4:00 PM",
    },
];

// Component Body
const Contacts = () => {

    // Component States
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        model: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section
            id="contact"
            className="py-20 bg-[#f8f8f8]"
            style={{ fontFamily: "Poppins, sans-serif" }}
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <div className="text-center mb-14">
                    <span className="text-[#EB0A1E] text-xs font-semibold tracking-widest uppercase">Get In Touch</span>
                    <h2 className="text-[#1a1a1a] text-3xl sm:text-4xl font-bold mt-2 mb-4">
                        Contact Our Sales Team
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                        Ready to make a move? Fill out the form below and one of our Toyota specialists will reach out to you within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                    <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-8">

                        {/*
                            Successful Submit Indicator 
                            -- followed by --
                            Form
                        */}

                        {submitted ? (

                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <Send size={28} className="text-green-600" />
                                </div>
                                    <h3 className="text-[#1a1a1a] font-bold text-xl mb-2">Inquiry Sent!</h3>
                                    <p className="text-gray-500 text-sm max-w-xs">
                                        Thank you for reaching out. Our Toyota sales agent will contact you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-6 text-[#EB0A1E] text-sm font-semibold hover:underline"
                                    >
                                        Send another inquiry
                                    </button>
                                </div>

                        ) : (

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[#1a1a1a] text-xs font-semibold">
                                            Full Name <span className="text-[#EB0A1E]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="e.g. Juan dela Cruz"
                                            className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#EB0A1E] transition-colors placeholder-gray-300"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[#1a1a1a] text-xs font-semibold">
                                            Phone Number <span className="text-[#EB0A1E]">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="e.g. +63 900 123 4567"
                                            className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#EB0A1E] transition-colors placeholder-gray-300"
                                        />
                                    </div>

                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[#1a1a1a] text-xs font-semibold">
                                        Email Address <span className="text-[#EB0A1E]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="e.g. juan@email.com"
                                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#EB0A1E] transition-colors placeholder-gray-300"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[#1a1a1a] text-xs font-semibold">
                                        Preferred Toyota Model <span className="text-[#EB0A1E]">*</span>
                                    </label>
                                    <select
                                        name="model"
                                        required
                                        value={form.model}
                                        onChange={handleChange}
                                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#EB0A1E] transition-colors bg-white"
                                    >
                                        <option value="" disabled>Select a Toyota model</option>
                                            {models.map((m) => (
                                                <option key={m} value={m}>{m}</option>
                                            ))}
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[#1a1a1a] text-xs font-semibold">
                                        Message <span className="text-gray-400 font-normal">(Optional)</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Tell us more about your preferences, budget, or any questions you have..."
                                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#EB0A1E] transition-colors resize-none placeholder-gray-300"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-[#EB0A1E] text-white font-semibold py-4 rounded-xl hover:bg-[#c5081a] transition-colors duration-200 text-sm flex items-center justify-center gap-2"
                                >
                                    <Send size={16} />
                                    Send Inquiry
                                </button>
                            </form>

                        )}

                    </div>

                    {/* Contact info + map */}
                    <div className="lg:col-span-2 flex flex-col gap-6">

                        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-5">
                            <h3 className="text-[#1a1a1a] font-bold text-base">Dealership Information</h3>

                            {contactInformation.map((item) => {
                                const Icon = item.icon;
                                return (
                                <div key={item.label} className="flex gap-3">
                                    <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center shrink">
                                    <Icon size={15} className="text-[#EB0A1E]" />
                                    </div>
                                    <div>
                                    <p className="text-gray-400 text-xs mb-0.5">{item.label}</p>
                                    <p className="text-[#1a1a1a] text-sm whitespace-pre-line">{item.value}</p>
                                    </div>
                                </div>
                                );
                            })}
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex-1 min-h-52">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2068.5908656028028!2d124.26277328159453!3d8.271788561463602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325576b887bf6755%3A0x93902e2552378841!2sToyota%20Iligan%20City!5e1!3m2!1sen!2sph!4v1773576061225!5m2!1sen!2sph" width="600" height="200" className="border-0" allowFullScreen={true} loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Contacts;
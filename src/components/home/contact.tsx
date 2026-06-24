"use client";

import Section from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import { contactData } from "@/data/contact";
import { IconType } from "react-icons";

type ContactItem = {
    label: string;
    value: string;
    icon: IconType;
    href: string;
};

const ContactCard = ({ item }: { item: ContactItem }) => {
    const Icon = item.icon;

    return (
        <a
            href={item.href}
            target="_blank"
            className="
                flex items-center gap-4
                bg-white/5 border border-white/10
                rounded-xl p-5
                hover:bg-white/10 hover:scale-[1.02]
                transition-all duration-300
            "
        >
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                <Icon className="text-xl" />
            </div>

            <div>
                <div className="text-xs text-gray-400 tracking-wider">
                    {item.label}
                </div>
                <div className="text-white font-medium">{item.value}</div>
            </div>
        </a>
    );
};

export default function Contact() {
    return (
        <Section id="contact" className="min-h-screen w-full">
            <SectionHeader
                title="06 - CONTACT"
                subtitle="Let's build something together."
                highlightWord="together"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl ">
                {contactData.map((item, i) => (
                    <ContactCard key={i} item={item} />
                ))}
            </div>
        </Section>
    );
}

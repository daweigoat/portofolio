"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Loader2, MessageSquare } from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Masukkan email yang valid"),
  subject: z.string().min(3, "Subjek minimal 3 karakter"),
  message: z.string().min(20, "Pesan minimal 20 karakter"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialLinks = [
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/daweigoat", value: "/daweigoat" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/rayyan-alghifari-48b5a63a7", value: "/in/rayyan-alghifari" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/rynn.alg", value: "@rynn.alg" },
  { icon: Mail, label: "Email", href: "mailto:rayyanalghifari97@gmail.com", value: "rayyanalghifari97@gmail.com" },
  { icon: MapPin, label: "Lokasi", href: "#", value: "Indonesia 🇮🇩" },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulasi API call — ganti sama handler form beneran (Formspree, Resend, dll.)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-title">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Kiri — Info */}
          <div className="space-y-10">
            <SectionTitle
              eyebrow="Kontak"
              title="Yuk bikin sesuatu yang keren."
              subtitle="Punya proyek di kepala? Aku seneng banget denger ceritanya. Kirim pesan dan aku balas dalam 24 jam."
              id="contact-title"
            />

            <div className="space-y-4">
              {socialLinks.map(({ icon: Icon, label, href, value }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group"
                  aria-label={`${label}: ${value}`}
                >
                  <div className="w-11 h-11 rounded-xl glass border border-white/[0.06] group-hover:border-white/[0.14] flex items-center justify-center transition-all duration-300">
                    <Icon size={16} className="text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">{label}</p>
                    <p className="text-primary text-sm">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Discord */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl glass border border-white/[0.06] flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(88,101,242,0.1)", border: "1px solid rgba(88,101,242,0.2)" }}>
                <MessageSquare size={16} style={{ color: "#5865F2" }} />
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">Discord</p>
                <p className="text-primary text-sm">daweigoat</p>
              </div>
            </motion.div>
          </div>

          {/* Kanan — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center p-12 rounded-3xl glass border border-green-500/20 text-center space-y-4">
                <div>
                  <CheckCircle2 size={40} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-primary text-xl font-light">Pesan terkirim!</h3>
                  <p className="text-secondary text-sm mt-2">Aku bakal balas dalam 24 jam.</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 p-8 rounded-3xl glass border border-white/[0.06]"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs text-muted uppercase tracking-wider">
                      Nama
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      {...register("name")}
                      placeholder="Nama kamu"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-primary text-sm placeholder:text-muted focus:outline-none focus:border-white/20 transition-all",
                        errors.name ? "border-red-500/50" : "border-white/[0.08]"
                      )}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs text-muted uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      {...register("email")}
                      placeholder="kamu@email.com"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-primary text-sm placeholder:text-muted focus:outline-none focus:border-white/20 transition-all",
                        errors.email ? "border-red-500/50" : "border-white/[0.08]"
                      )}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs text-muted uppercase tracking-wider">
                    Subjek
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    {...register("subject")}
                    placeholder="Ini tentang apa?"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-primary text-sm placeholder:text-muted focus:outline-none focus:border-white/20 transition-all",
                      errors.subject ? "border-red-500/50" : "border-white/[0.08]"
                    )}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs text-muted uppercase tracking-wider">
                    Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    {...register("message")}
                    rows={5}
                    placeholder="Ceritain proyekmu, tujuan, dan timeline kamu..."
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-primary text-sm placeholder:text-muted focus:outline-none focus:border-white/20 transition-all resize-none",
                      errors.message ? "border-red-500/50" : "border-white/[0.08]"
                    )}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

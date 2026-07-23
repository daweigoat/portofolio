"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import SectionTitle from "@/components/ui/SectionTitle";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-3xl border transition-all duration-500",
        "glass border-white/[0.06] hover:border-white/[0.12]"
      )}
      aria-label={`Project: ${project.title}`}
    >
      {/* Image */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl aspect-[4/3] order-1",
          index % 2 === 1 && "lg:order-2"
        )}
      >
        {project.image && !imgError ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
              onError={() => setImgError(true)}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center">
            <div className="text-center space-y-3 p-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
                <span className="text-2xl">🖼️</span>
              </div>
              <p className="text-xs text-muted">
                {project.title}
              </p>
            </div>
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex flex-col justify-center space-y-5 order-2",
          index % 2 === 1 && "lg:order-1"
        )}
      >
        <div className="space-y-1">
          <p className="text-xs tracking-[0.3em] uppercase text-muted">{project.year} · {project.category}</p>
          <h3 className="text-display-sm font-light tracking-tight text-primary">{project.title}</h3>
          <p className="text-secondary text-sm italic">{project.tagline}</p>
        </div>

        <p className="text-secondary text-sm leading-relaxed">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-xs glass border border-white/[0.08] text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Results */}
        <div className="space-y-2">
          {project.results.slice(0, 2).map((result) => (
            <div key={result} className="flex items-start gap-2 text-xs text-secondary">
              <div className="w-1 h-1 rounded-full bg-green-500/60 shrink-0 mt-1.5" />
              {result}
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs glass border border-white/[0.1] text-primary hover:bg-white/[0.06] transition-all duration-300"
            >
              <ExternalLink size={12} />
              Demo Langsung
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs glass border border-white/[0.1] text-secondary hover:text-primary transition-all duration-300"
            >
              <GitHubIcon size={12} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-title">
      <div className="container-custom space-y-16">
        <SectionTitle
          eyebrow="Proyek Unggulan"
          title="Karya yang ngomong sendiri."
          subtitle="Koleksi proyek pilihan di mana desain dan engineering ketemu untuk bikin user experience yang luar biasa."
          id="projects-title"
        />

        <div className="space-y-8">
          {PROJECTS.filter((p) => p.featured).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

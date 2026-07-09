"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { credentials, processSteps, projects, skillGroups } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const birthDate = new Date(2003, 5, 20, 9);
const polandArrivalDate = new Date(2022, 9, 1);
const hourInMs = 1000 * 60 * 60;
const dayInMs = hourInMs * 24;

const githubCells = [
  1, 0, 2, 1, 3, 0, 1, 2, 2, 0, 3, 1, 4, 2, 1, 0, 2, 4, 3, 1, 0, 2, 1, 3, 4, 2, 0, 1,
  3, 2, 1, 4, 0, 2, 3, 1, 2, 4, 3, 0, 1, 2,
];

export function PortfolioExperience() {
  const rootRef = useRef<HTMLElement | null>(null);
  const orbRef = useRef<HTMLDivElement | null>(null);
  const [now, setNow] = useState<Date | null>(null);
  const [openProject, setOpenProject] = useState<number | null>(0);

  useEffect(() => {
    const updateNow = () => setNow(new Date());
    const timeout = window.setTimeout(updateNow, 0);
    const interval = window.setInterval(updateNow, 60_000);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => ScrollTrigger.refresh(), 460);
    return () => window.clearTimeout(timeout);
  }, [openProject]);

  const hoursAlive = now ? Math.floor((now.getTime() - birthDate.getTime()) / hourInMs) : null;
  const daysInPoland = now ? Math.floor((now.getTime() - polandArrivalDate.getTime()) / dayInMs) : null;

  useGSAP(
    () => {
      const root = rootRef.current;
      const orb = orbRef.current;

      if (!root || !orb) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          desktop: "(min-width: 1100px)",
          mobile: "(max-width: 1099px)",
        },
        (context) => {
          const { reduceMotion, desktop, mobile } = context.conditions as {
            reduceMotion: boolean;
            desktop: boolean;
            mobile: boolean;
          };

          if (reduceMotion) {
            gsap.set(root.querySelectorAll("[data-reveal], [data-projects] .section-heading, [data-project-row]"), {
              autoAlpha: 1,
              y: 0,
              scale: 1,
            });
            return;
          }

          const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
          heroTimeline
            .from("[data-frame]", { autoAlpha: 0, y: 28, scale: 0.98, duration: 0.9 })
            .from("[data-nav] > *", { autoAlpha: 0, y: -10, stagger: 0.08, duration: 0.5 }, "-=0.35")
            .from("[data-hero-word]", { autoAlpha: 0, yPercent: 45, stagger: 0.055, duration: 0.7 }, "-=0.2")
            .from("[data-float]", { autoAlpha: 0, scale: 0.72, stagger: 0.08, duration: 0.7 }, "-=0.55");

          gsap.to("[data-float]", {
            y: (index) => (index % 2 === 0 ? -18 : 18),
            x: (index) => (index % 3 === 0 ? 10 : -8),
            rotation: (index) => (index % 2 === 0 ? 8 : -10),
            duration: 4,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.2,
          });

          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((section, index) => {
            if (section.hasAttribute("data-projects")) {
              return;
            }

            gsap.from(section, {
              autoAlpha: 0,
              y: 60,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
                toggleActions: "play none none reverse",
                refreshPriority: index,
              },
            });
          });

          void desktop;
          void mobile;

          gsap.from("[data-projects] .section-heading", {
            autoAlpha: 0,
            y: 52,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-projects]",
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          });

          const projectRows = gsap.utils.toArray<HTMLElement>("[data-project-row]");

          gsap.set(projectRows, { autoAlpha: 0, y: 44 });

          ScrollTrigger.batch(projectRows, {
            start: "top 92%",
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.08,
                overwrite: true,
                ease: "power3.out",
              });
            },
            onLeaveBack: (batch) => {
              gsap.to(batch, {
                autoAlpha: 0,
                y: 44,
                duration: 0.4,
                stagger: 0.05,
                overwrite: true,
                ease: "power2.out",
              });
            },
          });

          requestAnimationFrame(() => ScrollTrigger.refresh());
        },
        root,
      );

      const xTo = gsap.quickTo(orb, "x", { duration: 0.8, ease: "power3" });
      const yTo = gsap.quickTo(orb, "y", { duration: 0.8, ease: "power3" });

      const handlePointerMove = (event: PointerEvent) => {
        xTo(event.clientX - window.innerWidth / 2);
        yTo(event.clientY - window.innerHeight / 2);
      };

      window.addEventListener("pointermove", handlePointerMove, { passive: true });

      return () => {
        window.removeEventListener("pointermove", handlePointerMove);
        mm.revert();
      };
    },
    { scope: rootRef },
  );

  return (
    <main ref={rootRef} className="site-shell">
      <div ref={orbRef} className="cursor-orb" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="portfolio-frame" data-frame>
        <nav className="nav" aria-label="Primary navigation" data-nav>
          <Link href="/" className="brand" aria-label="Egemen Erin home">
            <Image
              src={siteConfig.logo}
              alt="Egemen Erin"
              width={72}
              height={40}
              priority
              className="brand-logo"
            />
          </Link>
          <p>Poznan, Poland</p>
          <div className="nav-links">
            <a href="#projects">Work</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <header className="hero" id="home">
          <div className="hero-copy">
            <div className="pill" data-float>
              Python / SQL / PowerBI 
            </div>
            <h1 aria-label="I build the pipelines that turn raw data into decisions.">
              {["I", "build", "the", "pipelines", "that", "turn", "raw", "data", "into", "decisions."].map(
                (word) => (
                  <span key={word} data-hero-word>
                    {word}
                  </span>
                ),
              )}
            </h1>
            <p className="hero-text">
              I&apos;m a data analyst and engineer with a computer science background. founded,{" "}
              <Link href="/waitlist">for(u)</Link> a non-profit organization which aims to connect
              developers, analysts, and engineers who struggled to find their people in the local tech
              scene. I am also currently working on Athena, an open source ai data analysis tool that
              is on work in progress.
            </p>
            <div className="hero-actions">
              <a href="#projects">View projects</a>
              <a href="mailto:egemeneriin@protonmail.com">egemeneriin@protonmail.com</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Portfolio snapshot">
            <div className="portrait-card" data-float>
              <Image
                src="/images/pfp.png"
                alt="Egemen Erin portrait"
                width={180}
                height={180}
                priority
              />
              <span>available for data roles</span>
            </div>
            <div className="floating-card card-one" data-float>
              <strong>3</strong>
              <span>Years building with data</span>
            </div>
            <div className="floating-card card-two" data-float>
              <strong>∞</strong>
              <span>Stack Overflow tabs open</span>
            </div>
            <div className="shape shape-donut" data-float />
            <div className="shape shape-spark" data-float />
          </div>
        </header>
      </section>

      <section className="section intro-grid" data-reveal>
        <h2>Good data work is not just the number. It is the reliable pipeline that makes the next move obvious.</h2>
        <div className="intro-cards">
          <article>
            <span>01</span>
            <h3>Data pipelines &amp; ETL</h3>
            <p>Build and schedule pipelines that move raw data from API and source to warehouse reliably.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Modeling &amp; automation</h3>
            <p>Clean, transform, and automate datasets so they stay trustworthy without manual work.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Dashboards &amp; analysis</h3>
            <p>Condense noisy survey and project data into concise, decision-ready reporting.</p>
          </article>
        </div>
      </section>

      <section className="section projects-section" id="projects" data-projects data-reveal>
        <div className="section-heading">
          <p className="section-kicker">Selected work</p>
          <h2>Projects with a question, a dataset, and a decision behind them.</h2>
        </div>

        <div className="project-list" data-project-list>
          {projects.map((project, index) => {
            const isOpen = openProject === index;
            const panelId = `project-panel-${index}`;

            return (
              <article
                className={`project-row${isOpen ? " is-open" : ""}`}
                key={project.title}
                data-project-row
              >
                <button
                  type="button"
                  className="project-row-header"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenProject(isOpen ? null : index)}
                >
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-row-heading">
                    <span className="project-row-eyebrow">{project.eyebrow}</span>
                    <span className="project-row-title">{project.title}</span>
                  </span>
                  <span className="project-row-meta">
                    <span className="project-row-status">{project.status}</span>
                    <span className="project-row-toggle" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path
                          d="M6 9l6 6 6-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </button>

                <div className="project-panel" id={panelId} role="region">
                  <div className="project-panel-inner">
                    {project.image && project.href ? (
                      <a
                        className="project-media"
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} project`}
                        title={`${project.title} — ${project.eyebrow}`}
                      >
                        <Image
                          src={project.image}
                          alt={`${project.title} project screenshot — ${project.eyebrow}`}
                          width={760}
                          height={430}
                        />
                      </a>
                    ) : project.image ? (
                      <div className="project-media">
                        <Image
                          src={project.image}
                          alt={`${project.title} project screenshot — ${project.eyebrow}`}
                          width={760}
                          height={430}
                        />
                      </div>
                    ) : (
                      <div className="report-preview" aria-hidden="true">
                        <span>JS</span>
                        <span>Python</span>
                        <span>PostgreSQL</span>
                        <span>Cloud</span>
                      </div>
                    )}
                    <div className="project-content">
                      <p>{project.summary}</p>
                      <dl>
                        <div>
                          <dt>Question</dt>
                          <dd>{project.problem}</dd>
                        </div>
                        <div>
                          <dt>Outcome</dt>
                          <dd>{project.outcome}</dd>
                        </div>
                      </dl>
                      <div className="tool-list">
                        {project.tools.map((tool) => (
                          <span key={tool}>{tool}</span>
                        ))}
                      </div>
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`View ${project.title}`}
                        >
                          {project.status}
                        </a>
                      ) : (
                        <span className="project-status">{project.status}</span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section dashboard-section" id="dashboard" data-reveal>
        <div className="dashboard-copy">
          <p className="section-kicker">Personal telemetry</p>
          <h2>The engineer, not just the pipeline.</h2> 
          <h2>A small dashboard of the life behind the work.</h2>
          <p>
            Yes, I built a dashboard about myself. No, I&apos;m not sorry.
          </p>
        </div>

        <div className="dashboard-panel">
          <div className="panel-topline">
            <span>Egemen Erin / live counters</span>
            <span>Personal stats</span>
          </div>
          <div className="life-stat-grid">
            <article className="life-stat-card wide">
              <span>{hoursAlive === null ? "calculating" : hoursAlive.toLocaleString()}</span>
              <h3>Hours alive</h3>
              <p>Honestly, pretty impressive uptime for a data engineer.</p>
            </article>
            <article className="life-stat-card">
              <span>{daysInPoland === null ? "..." : daysInPoland.toLocaleString()}</span>
              <h3>Days in Poland</h3>
              <p>POLSKA GUROM!!!</p>
            </article>
            <article className="life-stat-card">
              <span>6</span>
              <h3>Kaggle challenges</h3>
              <p>Practice notebooks and competition-style problem solving.</p>
            </article>
            <article className="life-stat-card">
              <span>42</span>
              <h3>Datasets cleaned</h3>
              <p>A deliberately rounded count for messy CSVs, survey files, and project data.</p>
            </article>
            <article className="life-stat-card">
              <span>3</span>
              <h3>Languages learned</h3>
              <p>Turkish, English, and Polish.</p>
            </article>
            <article className="github-card">
              <div>
                <div>
                  <strong>402</strong>
                  <span>GitHub commits</span>
                </div>
                <a
                  href="https://github.com/EgemenErin"
                  target="_blank"
                  rel="me noopener noreferrer"
                  title="Egemen Erin on GitHub"
                >
                  View profile
                </a>
              </div>
              <div className="github-graph" aria-label="GitHub-style contribution graph">
                {githubCells.map((level, index) => (
                  <span key={`github-cell-${index}`} data-level={level} />
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills" data-reveal>
        <div className="section-heading">
          <p className="section-kicker">Skills and credentials</p>
          <h2>An engineering-first data stack with analytics depth.</h2>
        </div>
        <div className="skills-layout">
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <aside className="credential-card">
            <h3>Certifications</h3>
            <ul>
              {credentials.map((credential) => (
                <li key={credential.name}>
                  <span className="credential-logo">
                    <Image src={credential.logoSrc} alt={`${credential.issuer} logo`} width={32} height={32} />
                  </span>
                  <span>{credential.name}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

    

      <footer className="section contact-section" id="contact" data-reveal>
        <p className="section-kicker">Let&apos;s connect</p>
        <h2>Interested in data pipelines, ETL, or data-driven products?</h2>
        <div className="contact-links">
          <a href="mailto:egemeneriin@protonmail.com" title="Email Egemen Erin">
            Email
          </a>
          <a
            href="https://github.com/EgemenErin"
            target="_blank"
            rel="me noopener noreferrer"
            title="Egemen Erin on GitHub"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.resumes.dataAnalyst}
            target="_blank"
            rel="noopener noreferrer"
            title="Egemen Erin data analyst resume"
          >
            Data Analyst Resume
          </a>
          <a
            href={siteConfig.links.resumes.dataEngineer}
            target="_blank"
            rel="noopener noreferrer"
            title="Egemen Erin data engineer resume"
          >
            Data Engineer Resume
          </a>
        </div>
      </footer>
    </main>
  );
}

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import {
  RiArrowRightLine,
  RiArrowRightUpBoxFill,
  RiQuoteText,
  RiGamepadLine,
  RiKeyboardLine,
  RiCodeSSlashLine,
  RiTerminalBoxLine,
  RiBrainLine,
  RiRocketLine,
  RiGithubFill,
  RiAwardLine,
} from "@remixicon/react";
import { Typing } from "@/components/typing";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TechStackCircles } from "@/components/orbiting-circles";
import { PaperGrid } from "@/components/ui/paper-grid";
import { ThemeToggle } from "@/components/theme-toggle";
import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <main
      className={cn(
        GeistMono.className,
        "min-h-screen bg-background tracking-tighter",
      )}
    >
      <ScrollArea className="w-full h-full">
        <PaperGrid
          className="fixed inset-0 z-0 pointer-events-none"
          gridSize={16}
          gridColor="hsla(var(--border) / 0.45)"
        />
        <div className="fixed bottom-4 right-4 z-50 sm:top-4 sm:right-4 sm:bottom-auto">
          <ThemeToggle />
        </div>
        <div className="w-full max-w-3xl mx-auto px-4 py-8 sm:py-12">
          <div className="paper-card p-4 sm:p-8 space-y-6 sm:space-y-8">
            <header className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 sm:gap-0">
                <div className="space-y-2 text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                    Kairo
                    <span className="block sm:inline text-sm sm:text-base font-normal text-muted-foreground sm:ml-2">
                      (aka. ProgramZmh)
                    </span>
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    16 y.o. / 2024 InnoForce 50 / Full Stack Dev / Founder
                    CoAI.Dev (Acquired)
                  </p>
                </div>
                <div className="relative w-20 h-20 rounded-md overflow-hidden ring-1 ring-border/50">
                  <Image
                    fill
                    src="/avatar.webp"
                    alt="avatar"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 w-fit mx-auto sm:mx-0">
                <RiQuoteText className="w-3 h-3 text-foreground/60 flex-shrink-0" />
                <Typing
                  content="I've mastered nothing, yet code rhythm echoes for a lifetime."
                  className="text-sm text-foreground/80"
                  typingSpeed={50}
                  keyboardSeed={2}
                  keyboardStay={2}
                />
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-1.5">
                <Link href="https://github.com/zmh-program" target="_blank">
                  <img
                    src="https://img.shields.io/badge/-zmh--program-black?labelColor=black&logo=github&logoColor=white"
                    alt="GitHub"
                  />
                </Link>
                <Link href="https://x.com/programzmh" target="_blank">
                  <img
                    src="https://img.shields.io/badge/-ProgramZmh-black?labelColor=black&logo=x&logoColor=white"
                    alt="X (Twitter)"
                  />
                </Link>
                <Link href="mailto:zmh@lightxi.com" target="_blank">
                  <img
                    src="https://img.shields.io/badge/-zmh@lightxi.com-black?labelColor=black&logo=gmail&logoColor=white"
                    alt="Email"
                  />
                </Link>
              </div>
            </header>

            <div className="space-y-6 sm:space-y-8">
              <section>
                <h2
                  className={cn(
                    GeistSans.className,
                    "text-sm font-normal tracking-normal mb-4 flex items-center gap-2",
                  )}
                >
                  <span>About Me</span>
                  <div className="flex-1 h-[1px] bg-border/60" />
                </h2>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    My coding journey started when I was 8, developing Minecraft
                    Forge mods. It was fascinating to see how code could bring
                    ideas to life, and that curiosity has stayed with me ever
                    since. While I'm still learning and growing, I enjoy every
                    step of this programming adventure.
                  </p>
                  <p>
                    Currently at LightXi Inc., I'm part of a great team working
                    on LLM Infra solutions. I'm grateful for the opportunity to
                    learn and tackle interesting challenges together. There's
                    always something new to discover, and I'm excited to keep
                    learning and improving.
                  </p>
                </div>
              </section>

              <section>
                <h2
                  className={cn(
                    GeistSans.className,
                    "text-sm font-normal tracking-normal mb-4 flex items-center gap-2",
                  )}
                >
                  <span>Tech Stack</span>
                  <div className="flex-1 h-[1px] bg-border/60" />
                  <a
                    href="https://gitroll.io/profile/u8Lxle2WApghkWm7A0ylMCYH2tYx2/stacks"
                    target="_blank"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    GitRoll
                    <RiArrowRightUpBoxFill className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-primary/80 transition-colors" />
                  </a>
                </h2>
                <div className="space-y-2.5">
                  <div className="paper-card h-[200px] select-none flex items-center justify-center overflow-hidden">
                    <TechStackCircles
                      innerIcons={["go", "rust", "ts", "k8s"]}
                      outerIcons={[
                        "python",
                        "lua",
                        "php",
                        "react",
                        "next",
                        "vue",
                        "nuxt",
                        "pytorch",
                        "tensorflow",
                        "cpp",
                        "java",
                      ]}
                      innerRadius={60}
                      outerRadius={140}
                      innerSize="size-[25px]"
                      outerSize="size-[40px]"
                      duration={20}
                    />
                  </div>
                  <div className="flex flex-row flex-wrap items-center gap-2 justify-center">
                    <p className="text-center text-sm text-muted-foreground">
                      8 years journey (since 2017)
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2
                  className={cn(
                    GeistSans.className,
                    "text-sm font-normal tracking-normal mb-4 flex items-center gap-2",
                  )}
                >
                  <span>Project Experience</span>
                  <div className="flex-1 h-[1px] bg-border/60" />
                  <a
                    href="https://github.com/zmh-program"
                    target="_blank"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    GitHub
                    <RiArrowRightUpBoxFill className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-primary/80 transition-colors" />
                  </a>
                </h2>
                <div className="grid gap-1">
                  {[
                    {
                      title: "CoAI.Dev",
                      description:
                        "🚀 Next Generation AI One-Stop Internationalization Solution.",
                      role: "Founder",
                      tags: ["K8s", "Go", "React", "TypeScript", "WebSocket"],
                      link: "https://coai.dev",
                      stars: "8k+",
                      sold: true,
                    },
                    {
                      title: "Next Whois UI",
                      description:
                        "🧪 Your Next-Gen Whois Lookup Tool With Modern UI. Support Domain/IPv4/IPv6/ASN/CIDR Whois Lookup And Powerful Features.",
                      role: "Author",
                      tags: ["Next.js", "TypeScript", "Whois Lookup"],
                      link: "https://github.com/zmh-program/next-whois-ui",
                      stars: "0.4k",
                    },
                    {
                      title: "Fyrrum Start",
                      description:
                        "🍏 AI-powered beautiful and lightweight start page. Features cloud sync, PWA offline access, and various components.",
                      role: "Author",
                      tags: ["Go", "Vue", "PWA", "Service Worker"],
                      link: "https://github.com/zmh-program/fystart",
                      stars: "0.1k",
                    },
                  ].map((project, index) => (
                    <Link
                      key={index}
                      href={project.link}
                      target="_blank"
                      className="group py-2 border-b border-border/60 border-dashed last:border-0 hover:translate-y-[-1px] transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                        <div className="space-y-1.5 w-full">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <h3 className="text-base font-medium">
                                {project.title}
                              </h3>
                              {project.stars && (
                                <span className="text-[11px] text-muted-foreground">
                                  ⭐ {project.stars}
                                </span>
                              )}
                              {project.sold && (
                                <span className="text-[11px] text-primary">
                                  Acquired
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap items-center gap-1">
                            <span className="text-xs text-primary font-medium">
                              # {project.role}
                            </span>
                            <span className="px-1.5 py-0.5 text-xs text-muted-foreground">
                              {project.tags.join(" · ")}
                            </span>
                          </div>
                        </div>
                        <RiArrowRightLine className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-primary/80 transition-colors shrink-0 mt-1 hidden sm:block" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <section>
                <h2
                  className={cn(
                    GeistSans.className,
                    "text-sm font-normal tracking-normal mb-4 flex items-center gap-2",
                  )}
                >
                  <span>Partners</span>
                  <div className="flex-1 h-[1px] bg-border/60" />
                </h2>
                <div className="space-y-2">
                  {[
                    {
                      name: "Sh1n3zZ",
                      logo: "/sh1n3zz.webp",
                      description: "BGP Player / Full Stack / Embedded / OIer",
                      url: "https://github.com/sh1n3zz",
                    },
                  ].map((partner, index) => (
                    <Link
                      key={index}
                      href={partner.url}
                      target="_blank"
                      className="group block"
                    >
                      <div className="flex items-center space-x-2 transition-colors">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-border/50">
                          <Image
                            fill
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-medium truncate">
                              {partner.name}
                            </h3>
                            <RiArrowRightLine className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-primary/80 transition-colors" />
                          </div>
                          <p className="text-sm text-muted-foreground truncate break-words whitespace-pre-wrap">
                            {partner.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <section>
                <h2
                  className={cn(
                    GeistSans.className,
                    "text-sm font-normal tracking-normal mb-4 flex items-center gap-2",
                  )}
                >
                  <span>Timeline</span>
                  <div className="flex-1 h-[1px] bg-border/60" />
                </h2>
                <div className="space-y-6">
                  <Timeline
                    events={[
                      {
                        year: "2014",
                        description:
                          "Started playing Minecraft, fascinated by redstone mechanics and command blocks",
                      },
                      {
                        year: "2016",
                        description:
                          "Joined school computer group, practiced typing and reached 200 CPM",
                      },
                      {
                        year: "2017",
                        description:
                          "Began learning programming with Python and basic Forge Modding",
                      },
                      {
                        year: "2020",
                        description:
                          "Started exploring Java and Lua, attempted to build a TCP-based chat system",
                      },
                      {
                        year: "2022",
                        description:
                          "Started learning Machine Learning basics and Full Stack Development",
                      },
                      {
                        year: "2023",
                        description:
                          "Launched Chat Nio (CoAI.Dev) and began commercial conversion",
                      },
                      {
                        year: "2024",
                        description:
                          "Achieved GitHub #1 trending, Chat Nio (CoAI.Dev) was acquired",
                      },
                      {
                        year: "2025",
                        description:
                          "GeekPark InnoForce 50 Super Developer of the Year",
                      },
                    ]}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      {
                        title: "China InnoForce 50",
                        description: "Super Developer of the Year",
                        detail: "GeekPark",
                        year: "2025",
                      },
                      {
                        title: "GitHub Trending",
                        description: "#1 Repo Of The Day",
                        detail: "CoAI.Dev",
                        year: "2024",
                      },
                      {
                        title: "Spark Lab S1",
                        description: "Hackathon Champion",
                        detail: "AI × Startup",
                        year: "2024",
                      },
                    ].map((achievement, index) => (
                      <div
                        key={index}
                        className="group px-2 py-1.5 shadow-sm hover:bg-muted/30 rounded-md transition-colors"
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center justify-between mb-0.5">
                            <h3 className="text-xs font-medium text-foreground/90">
                              {achievement.title}
                            </h3>
                            <span className="text-[10px] text-muted-foreground/60">
                              {achievement.year}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-muted-foreground/80">
                              {achievement.description}
                            </span>
                            <span className="text-[10px] text-muted-foreground/60">
                              {achievement.detail}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          <footer className="mt-8 text-center text-sm text-muted-foreground">
            © 2021-present @Kairo. All rights reserved.
          </footer>
        </div>
      </ScrollArea>
    </main>
  );
}

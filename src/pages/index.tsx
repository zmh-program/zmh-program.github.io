import { GeistMono } from "geist/font/mono";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { Typing } from "@/components/typing";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TechStackCircles } from "@/components/orbiting-circles";
import { PaperGrid } from "@/components/ui/paper-grid";

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
          className="fixed inset-0 z-0"
          gridSize={16}
          gridColor="hsla(var(--border) / 0.45)"
        />
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
                <Quote className="w-3 h-3 text-foreground/60 flex-shrink-0" />
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
                <h2 className="text-xl font-semibold tracking-tight mb-4 flex items-center gap-2">
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
                <h2 className="text-xl font-semibold tracking-tight mb-4 flex items-center gap-2">
                  <span>Tech Stack</span>
                  <div className="flex-1 h-[1px] bg-border/60" />
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
                  <p className="text-center text-sm text-muted-foreground">
                    8 years journey (since 2017)
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold tracking-tight mb-4 flex items-center gap-2">
                  <span>Project Experience</span>
                  <div className="flex-1 h-[1px] bg-border/60" />
                </h2>
                <div className="grid gap-2">
                  {[
                    {
                      title: "CoAI.Dev",
                      description:
                        "🚀 Next Generation AI One-Stop Internationalization Solution.",
                      role: "Founder",
                      tags: [
                        "K8s",
                        "Go",
                        "React",
                        "TypeScript",
                        "WebSocket",
                        "PWA",
                      ],
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
                      className="paper-card p-4 hover:translate-y-[-1px] transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                        <div className="space-y-3 w-full">
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-medium">
                                {project.title}
                              </h3>
                              {project.stars && (
                                <span className="paper-tag text-xs bg-secondary/40">
                                  ⭐ {project.stars}
                                </span>
                              )}
                              {project.sold && (
                                <span className="paper-tag text-xs bg-primary/5 text-primary hover:bg-primary/10">
                                  Acquired
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="paper-tag text-xs bg-primary/5 text-primary font-medium">
                              {project.role}
                            </span>
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs bg-secondary/20 border border-border/40"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 mt-1 hidden sm:block" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold tracking-tight mb-4 flex items-center gap-2">
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
                            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-primary/80 transition-colors" />
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

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import { RiArrowRightUpBoxFill } from "@remixicon/react";
import { Typing } from "@/components/typing";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TechStackCircles } from "@/components/orbiting-circles";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className={cn(GeistSans.className, "min-h-screen bg-background")}>
      <ScrollArea className="w-full h-full">
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-500/8 dark:from-primary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-400/6 dark:from-primary/5 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="fixed bottom-4 right-4 z-50 sm:top-4 sm:right-4 sm:bottom-auto">
          <ThemeToggle />
        </div>
        <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-16 space-y-12">
          <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                  Kairo
                  <span className="block text-lg sm:text-xl font-normal text-muted-foreground mt-1">
                    (aka. <span className="text-foreground">ProgramZmh</span>)
                  </span>
                </h1>
                <p className="text-sm text-muted-foreground">
                  16 y.o. / 2024 InnoForce 50 / Full Stack Dev / Founder
                  CoAI.Dev (Acquired)
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <Link
                  href="https://github.com/zmh-program"
                  target="_blank"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href="https://x.com/programzmh"
                  target="_blank"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  X (Twitter)
                </Link>
                <Link
                  href="mailto:zmh@lightxi.com"
                  target="_blank"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  Mail
                </Link>
              </div>
            </div>

            <div className="border border-border p-5 relative overflow-hidden bg-muted/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <span
                  className={cn(
                    GeistMono.className,
                    "text-[10px] text-muted-foreground/70 dark:text-muted-foreground/40 ml-1",
                  )}
                >
                  kairo.rs
                </span>
              </div>
              <pre
                className={cn(
                  GeistMono.className,
                  "text-[13px] leading-relaxed",
                )}
              >
                <code className="block text-[#24292f] dark:text-[#c9d1d9]">
                  <span className="text-[#cf222e] dark:text-[#ff7b72]">
                    let
                  </span>{" "}
<<<<<<< HEAD
                  kairo ={" "}
                  <span className="text-[#0550ae] dark:text-[#79c0ff]">
                    Developer
=======
                  kairo:{" "}
                  <span className="text-[#0550ae] dark:text-[#79c0ff]">
                    Dev
                  </span>
                  {"<'"}
                  <span className="text-[#0550ae] dark:text-[#79c0ff]">
                    static
                  </span>
                  {", "}
                  <span className="text-[#cf222e] dark:text-[#ff7b72]">
                    impl
                  </span>{" "}
                  <span className="text-[#0550ae] dark:text-[#79c0ff]">
                    Future
                  </span>
                  {"> = "}
                  <span className="text-[#0550ae] dark:text-[#79c0ff]">
                    Dev
>>>>>>> 8624611 (feat: better ux design)
                  </span>{" "}
                  {"{"}
                  {"\n"}
                  {"    "}name:{" "}
                  <span className="text-[#0a3069] dark:text-[#a5d6ff]">
                    "Kairo"
                  </span>
                  ,{"\n"}
                  {"    "}age:{" "}
                  <span className="text-[#0550ae] dark:text-[#79c0ff]">16</span>
                  ,{"\n"}
                  {"    "}role:{" "}
                  <span className="text-[#0a3069] dark:text-[#a5d6ff]">
                    "Full Stack"
                  </span>
                  ,{"\n"}
                  {"    "}passion:{" "}
                  <span className="text-[#6e7781] dark:text-[#6e7681]">|</span>
                </code>
              </pre>
              <div className="ml-4 mt-1 border border-border/60 bg-background/80 px-2 py-1 w-fit text-xs">
                <div
                  className={cn(
                    GeistMono.className,
                    "text-muted-foreground/70 flex items-center gap-1.5",
                  )}
                >
                  <span className="relative w-2.5 h-2.5 rounded-full overflow-hidden">
                    <span className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,#fff,#a855f7,#fff)] animate-[gradient-spin_2s_linear_infinite]" />
                    <span className="absolute inset-[1px] rounded-full bg-background/80" />
                  </span>
                  <span className="text-[#0a3069] dark:text-[#a5d6ff]">
                    "Building things"
                  </span>
                </div>
              </div>
              <div className="absolute top-5 right-5 w-12 h-12 border border-border overflow-hidden rounded-sm">
                <Image
                  fill
                  src="/avatar.webp"
                  alt="avatar"
                  className="object-cover contrast-[1.1] saturate-[0.8]"
                />
              </div>
            </div>
          </header>

          <div className="space-y-12">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="section-title flex-1">About & Tech</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="border border-border p-5">
                  <h3 className="text-sm font-medium mb-3">About Me</h3>
                  <div className="space-y-3 text-sm text-muted-foreground mb-4">
                    <p>
                      My coding journey started when I was 8, developing
                      Minecraft Forge mods. It was fascinating to see how code
                      could bring ideas to life.
                    </p>
                    <p>
                      Today, I'm a full-stack dev & startup founder. I founded
                      CoAI.Dev (formerly Chat Nio), which was successfully
                      acquired in 2024.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
<<<<<<< HEAD
                      { year: "'14", label: "Minecraft" },
                      { year: "'16", label: "Python" },
                      { year: "'17", label: "Java / Modding" },
=======
                      { year: "'16", label: "Minecraft" },
                      { year: "'18", label: "Python" },
                      { year: "'19", label: "Java / Modding" },
>>>>>>> 8624611 (feat: better ux design)
                      { year: "'20", label: "Rust / C++" },
                      { year: "'22", label: "Full Stack" },
                      { year: "'23", label: "ML Basics" },
                      { year: "'23", label: "Chat Nio" },
                      { year: "'24", label: "Acquired" },
                    ].map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-xs border border-border text-muted-foreground"
                      >
                        <span className="font-medium text-foreground/70">
                          {item.year}
                        </span>
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border border-border p-5 relative overflow-hidden min-h-[240px] select-none">
                  <div className="absolute inset-0 flex items-center justify-center opacity-85">
                    <TechStackCircles
                      innerIcons={["go", "rust", "ts", "cpp"]}
                      outerIcons={[
                        "python",
                        "lua",
                        "php",
                        "react",
                        "next",
                        "vue",
                        "c",
                        "pytorch",
                        "tensorflow",
                        "k8s",
                        "java",
                      ]}
                      innerRadius={55}
                      outerRadius={110}
                      innerSize="size-[22px]"
                      outerSize="size-[34px]"
                      duration={20}
                    />
                  </div>
                  <div className="relative z-10 flex items-center justify-between">
                    <h3 className="text-sm font-medium">Tech Stack</h3>
                    <a
                      href="https://gitroll.io/profile/u8Lxle2WApghkWm7A0ylMCYH2tYx2/stacks"
                      target="_blank"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      GitRoll
                      <RiArrowRightUpBoxFill className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="absolute bottom-5 right-5 text-xs text-muted-foreground z-10">
                    8 years journey
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                  <h2 className="section-title mb-4">Project Experience</h2>
                  <div className="overflow-hidden h-[180px]">
                    <img
                      src="https://algora.io/og/user/zmh-program"
                      alt="Algora Profile"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="section-title mb-4">Achievements</h2>
                  <div className="space-y-2">
                    {[
                      {
                        title: "China InnoForce 50",
                        desc: "Super Developer of the Year",
                        year: "2025",
                      },
                      {
                        title: "GitHub Trending",
                        desc: "#1 Repo Of The Day",
                        year: "2024",
                      },
                      {
                        title: "Spark Lab",
                        desc: "Alumni & S1 Champion",
                        year: "2024",
                      },
                    ].map((a, i) => (
                      <div key={i} className="py-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{a.title}</span>
                          <span className="text-xs text-muted-foreground">
                            {a.year}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {a.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <footer className="pt-2 text-center text-xs text-muted-foreground">
            © 2021-present @Kairo. All rights reserved.
          </footer>
        </div>
      </ScrollArea>
    </main>
  );
}

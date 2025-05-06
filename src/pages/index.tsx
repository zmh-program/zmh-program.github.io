import { Inter } from "next/font/google";
import Image from "next/image";
import { ArrowRight, Github, Mail, Quote, Twitter } from "lucide-react";
import { Typing } from "@/components/typing";
import Projects from "@/components/projects";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import WordPullUp from "@/components/magicui/word-pull-up";
import Meteors from "@/components/magicui/meteors";
import { BorderBeam } from "@/components/magicui/border-beam";
import OrbitingCircles from "@/components/magicui/orbiting-circles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Meteors />
      <ScrollArea className={`w-full h-full`}>
        <div className={`flex flex-col p-6 space-y-4 max-w-[620px] mx-auto`}>
          <IntroSection />
          <SkillSection />
          <PartnerSection />
          <ProjectSection />
        </div>
        <Footer />
      </ScrollArea>
    </main>
  );
}

function IntroSection() {
  return (
    <div className={`flex flex-col items-center justify-center`}>
      <div className="mt-4 border p-2 rounded-md flex items-center w-fit backdrop-blur-sm mb-2">
        <Quote className="w-3 h-3 mr-1.5 text-foreground" />
        <Typing
          content="Nis nán þing unwealdes."
          className="text-sm text-foreground"
          typingSpeed={150}
          keyboardSeed={2}
          keyboardStay={2}
        />
      </div>
      <Card
        className={`relative p-4 rounded-lg w-full h-fit flex flex-col pt-6 text-center md:text-left`}
      >
        <BorderBeam />
        <div
          className={`flex flex-col md:flex-row items-center justify-center mb-6`}
        >
          <div className={"w-20 h-20 mr-6"}>
            <Image
              width={80}
              height={80}
              src="/avatar.webp"
              alt="avatar"
              className={`rounded-full`}
            />
          </div>
          <div className={`flex flex-col justify-center`}>
            <h1 className={`text-2xl font-semibold`}>
              ProgramZmh{" "}
              <span className="text-muted-foreground text-sm font-normal">
                (aka. Kairo)
              </span>
            </h1>
            <WordPullUp
              className={`text-base md:text-left font-normal mt-1`}
              words={"16 y.o. / Co-Founder @LightXi Inc."}
            />

            <div className="flex flex-wrap mt-2">
              <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40 cursor-pointer transition hover:bg-secondary">
                INTJ
              </span>
              <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40 cursor-pointer transition-all hover:bg-secondary">
                Full Stack
              </span>
              <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40 cursor-pointer transition-all hover:bg-secondary">
                Startup
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row mb-4 justify-center items-center">
            <a
              href="https://trendshift.io/repositories/6369"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 w-fit"
            >
              <img
                src="https://trendshift.io/api/badge/repositories/6369"
                alt="Chat Nio: #1 Repo Of The Day"
              />
            </a>
          </div>
          <div className={`flex justify-center space-x-4 pr-0.5`}>
            <Link
              href="https://github.com/zmh-program"
              target="_blank"
              className={`ml-auto`}
            >
              <Github className={`w-5 h-5`} />
            </Link>
            <Link href="https://twitter.com/ProgramZmh" target="_blank">
              <Twitter className={`w-5 h-5`} />
            </Link>
            <Link href="mailto:zmh@lightxi.com" target="_blank">
              <Mail className={`w-5 h-5`} />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ProjectSection() {
  return (
    <Card className={`relative w-full h-fit p-6`}>
      <CardTitle>Project Experience</CardTitle>
      <Projects
        data={[
          {
            title: "CoAI.Dev",
            description:
              "🚀 Next Generation AI One-Stop Internationalization Solution.",
            tags: ["K8s", "Go", "React", "TypeScript", "WebSocket", "PWA"],
            link: "https://coai.dev",
            stars: "8k+",
            sold: true,
          },
          {
            title: "Next Whois UI",
            description:
              "🧪 Your Next-Gen Whois Lookup Tool With Modern UI. Support Domain/IPv4/IPv6/ASN/CIDR Whois Lookup And Powerful Features. ",
            tags: ["Next.js", "TypeScript", "Whois Lookup"],
            link: "https://github.com/zmh-program/next-whois-ui",
            stars: "0.4k",
          },
          {
            title: "FyStart",
            description:
              "🍏 AI-powered beautiful and lightweight start page. Features cloud sync, PWA offline access, and various components including quotes, toolbox, cards, search suggestions, and translations.",
            tags: ["Go", "Vue", "PWA", "Service Worker"],
            link: "https://github.com/zmh-program/fystart",
            stars: "0.1k",
          },
        ]}
      />
    </Card>
  );
}

function PartnerSection() {
  const partners = [
    {
      name: "Sh1n3zZ",
      logo: "/rakuyou.webp",
      description: "BGP Player / Full Stack / Embedded / OIer",
      quote: "",
      url: "https://qaq.gs",
    },
  ];

  return (
    <Card className={`relative w-full h-fit p-6`}>
      <CardTitle>My Partners</CardTitle>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {partners.map((partner, index) => (
          <Link key={index} href={partner.url} target="_blank">
            <div className="group flex items-center p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={80}
                height={80}
                className="rounded-lg w-16 h-16 mr-4"
              />
              <div>
                <span className="text-lg font-medium">{partner.name}</span>
                <p className="text-sm text-muted-foreground">
                  {partner.description}
                </p>
                {partner.quote && (
                  <p className="text-sm text-muted-foreground">
                    <Quote className="w-3 h-3 mr-1 inline-block" />
                    {partner.quote}
                  </p>
                )}
              </div>
              <ArrowRight className="ml-auto shrink-0 mr-2 transition-all group-hover:translate-x-1 duration-300 text-muted-foreground w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}

function SkillSection() {
  const techIconsInner = ["c", "go", "rust", "flutter", "next", "nuxt", "ts"];

  const techIconsOuter = [
    "python",
    "lua",
    "php",
    "react",
    "vue",
    "angular",
    "less",
    "pytorch",
    "tensorflow",
  ];

  const techIconsInnerDelay = 100 / techIconsInner.length;
  const techIconsOuterDelay = 100 / techIconsOuter.length;

  const techCategories = [
    "Full Stack",
    "Network Security",
    "Machine Learning",
    "Big Data",
    "Cloud Computing",
  ];

  return (
    <Card className={`relative w-full h-fit p-6`}>
      <CardTitle>Tech Stack</CardTitle>

      <div className="flex flex-wrap gap-2 mt-2">
        {techCategories.map((tag, index) => (
          <span
            key={index}
            className="text-sm border rounded px-1.5 py-1 whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out hover:bg-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative flex h-[200px] select-none w-full flex-col items-center justify-center mt-4 overflow-hidden rounded-lg border bg-background md:shadow-md">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          {"</>"}
        </span>
        {/* Inner Circles */}
        {techIconsInner.map((icon, index) => (
          <OrbitingCircles
            key={index}
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={index * techIconsInnerDelay}
            radius={80}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={`${icon} Icon`}
              className="w-full h-full object-contain"
            />
          </OrbitingCircles>
        ))}

        {/* Outer Circles (reverse) */}
        {techIconsOuter.map((icon, index) => (
          <OrbitingCircles
            key={index}
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            delay={index * techIconsOuterDelay}
            reverse
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={`${icon} Icon`}
              className="w-full h-full object-contain"
            />
          </OrbitingCircles>
        ))}
      </div>
      <div className="mt-2 text-center text-sm text-muted-foreground">
        <span>8 years journey (since 2017)</span>
      </div>
    </Card>
  );
}

function Footer() {
  return (
    <div className={`footer py-6 px-4 text-center text-sm`}>
      <div>© 2021-present @Kairo. All rights reserved.</div>
    </div>
  );
}

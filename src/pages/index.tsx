import { Inter } from "next/font/google";
import Image from "next/image";
import { Github, Mail, Quote, Twitter } from "lucide-react";
import { Typing } from "@/components/typing";
import Title from "@/components/title";
import Name from "@/components/name";
import Projects from "@/components/projects";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import WordPullUp from "@/components/magicui/word-pull-up";
import Meteors from "@/components/magicui/meteors";
import { BorderBeam } from "@/components/magicui/border-beam";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Meteors />
      <ScrollArea className={`w-full h-full`}>
        <div className={`p-6 max-w-[620px] mx-auto`}>
          <IntroSection />
          <ProjectSection />
          <TechStackSection />
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
          content="Nothing is impossible."
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
            <h1 className={`text-2xl font-semibold`}>ProgramZmh</h1>
            <WordPullUp
              className={`text-base md:text-left font-normal mt-1`}
              words={"15 y.o. / Co-Founder @LightXi Inc."}
            />

            <div className="flex flex-wrap mt-2 justify-center">
              <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40 cursor-pointer transition hover:bg-secondary">
                CTO
              </span>
              <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40 cursor-pointer transition hover:bg-secondary">
                INTJ
              </span>
              <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40 cursor-pointer transition-all hover:bg-secondary">
                Full Stack Developer
              </span>
              <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40 cursor-pointer transition hover:bg-secondary">
                Open Source Enthusiast
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row mb-4 justify-center items-center">
            <a
              href="https://trendshift.io/repositories/6369"
              className="m-2 w-fit"
            >
              <img
                src="https://trendshift.io/api/badge/repositories/6369"
                alt="Chat Nio: #1 Repo Of The Day"
              />
            </a>
            <a href="https://spark-lab.city" className="m-2 w-fit">
              <img
                src="https://spark-lab.city/api/badge?session=1&prize=1"
                alt="Spark Lab S1 #1 Place"
              />
            </a>
          </div>
          <div className={`flex justify-center space-x-4 pr-0.5`}>
            <Link
              href="https://github.com/ProgramZmh"
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
    <div
      className={`relative inline-flex flex-col items-center justify-center w-full h-fit pt-12 pb-20 bg-[#ffffff07]`}
    >
      <Title title={"Projects"} subtitle={"我的项目"} />
      <Projects
        data={[
          {
            title: "Chat Nio",
            avatar: "chatnio.webp",
            description: "🚀 功能强大 设计精美 易于使用的 AIGC 一站式解决方案",
            tags: [
              "K8s",
              "Go",
              "React",
              "TypeScript",
              "WebSocket",
              "PWA",
              "Tauri",
              "AIGC",
            ],
            link: "https://chatnio.com",
            stars: "2k+",
          },
          {
            title: "FyStart",
            avatar: "fystart.webp",
            description:
              "🍏 极目起始页, 简洁高效的开源起始页, 为您提供干净的搜索体验, 支持智能搜索建议、断网离线访问等高级功能",
            tags: ["Go", "Vue", "PWA", "Service Worker"],
            link: "https://github.com/Deeptrain-Community/fystart",
          },
          {
            title: "Code Statistic",
            avatar: "stats.webp",
            description:
              " ⚡ 动态生成你的 GitHub 统计卡片！支持 用户/组织/仓库/贡献者/PR/Issue/Release 卡片, 明暗主题切换等功能",
            tags: ["PHP", "Go", "JavaScript", "SVG", "GitHub"],
            link: "https://stats.deeptrain.net",
          },
          {
            title: "Light Notes",
            avatar: "lightnotes.webp",
            description:
              "📝 一个极简、美观、多端同步的轻量化在线便签, 支持 Markdown 语法, 支持多设备同步, 支持匿名便签",
            tags: ["Go", "Vue", "Serverless"],
            link: "https://notes.lightxi.com",
          },
          {
            title: "Web ChatGPT QQ Bot",
            avatar: "webchatgpt.webp",
            description:
              "🤖 图形化界面一键配置 ChatGPT Mirai QQ Bot，内置终端，文件上传，监控，鉴权，自定义设置，检测 Docker 容器状态等功能",
            tags: ["Python", "Vue", "Mirai", "Electron", "Docker"],
            link: "https://github.com/zmh-program/web-chatgpt-qq-bot",
          },
          {
            title: "Next Whois UI",
            description:
              "🧪 开源、轻量、简洁、美观的强大 Whois 查询工具, 支持域名、IPv4、IPv6、ASN、CIDR 等查询",
            tags: ["Next.js", "TypeScript", "Whois", "Edge Computing"],
            link: "https://github.com/zmh-program/next-whois-ui",
          },
          {
            title: "Lyrify",
            avatar: "lyrify.webp",
            description:
              "🔍 聚合翻译平台, 支持多种翻译引擎同时翻译, 支持多种翻译结果展示和翻译结果对比",
            tags: ["Next.js", "TypeScript", "Tailwind CSS"],
            link: "https://github.com/SIPC/Lyrify",
          },
          {
            title: "Kylin Go",
            avatar: "kylingo.webp",
            description:
              "🐉 一款基于 Golang 编写的跨平台的编程语言。支持国际化 AST Transformer。面相过程，脚本语言。",
            tags: ["Go", "AST", "Lexer", "Interpreter"],
            link: "https://github.com/zmh-program/kylin-go",
          },
        ]}
      />
      <div className={`absolute right-4 bottom-4 w-6 h-6`} />
    </div>
  );
}

function TechStackSection() {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center w-full h-fit pt-12 pb-20`}
    >
      <Title
        title={"Tech Stack"}
        subtitle={"技术栈"}
        tags={["前端", "后端", "网络安全", "机器学习", "大数据", "云计算"]}
      />

      <img
        src="https://skillicons.dev/icons?i=c,go,rust,python,arduino,lua,nodejs,php,react,next,vue,nuxt,angular,express,tailwindcss,redux,bootstrap,html,css,js,jquery,ts,less,scss,fastapi,django,flask,pytorch,tensorflow,opencv,qt,electron,tauri,threejs&perline=12"
        alt="Tech Stack"
        className={`max-w-[80vw] mt-4`}
      />
      {/*<img src="https://skillicons.dev/icons?i=mysql,sqlite,redis,postgresql,rabbitmq,docker,kubernetes,nginx,git,npm,pnpm,yarn,vite,vitest,webpack,babel,cmake,anaconda,github,grafana,githubactions,jenkins,figma,aws,azure,gcp,cloudflare,vercel,netlify,heroku&perline=12" alt="Tools I Use" className={`max-w-[80vw] mt-6`} />*/}
    </div>
  );
}

function Footer() {
  return (
    <div className={`footer py-6 text-center text-sm`}>
      <div className={`mb-1`}>
        <a href="https://beian.miit.gov.cn" target="_blank">
          <Image
            src="/gov.webp"
            alt="beian"
            width={14}
            height={14}
            className={`inline-block mr-1`}
          />
          鲁ICP备2022034318号-1
        </a>
      </div>
      <div>© 2021-present @zmh-program. All rights reserved.</div>
    </div>
  );
}

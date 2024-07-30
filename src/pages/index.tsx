import { Inter } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, HandHeart, Mail, Quote } from "lucide-react";
import { Typing } from "@/components/typing";
import Title from "@/components/title";
import Name from "@/components/name";
import Projects from "@/components/projects";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div className={`relative w-full h-full select-none`}>
        <Image
          src="/background.webp"
          alt="background"
          layout={"fill"}
          className={
            "top-0 left-0 w-full h-full object-cover filter brightness-90 animate-saturated-pulse"
          }
        />
        <div
          className={`absolute flex flex-col items-center top-[40%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]`}
        >
          <div className={"w-fit h-fit"}>
            <Image
              width={80}
              height={80}
              src="/avatar.webp"
              alt="avatar"
              className={`saturate-150 rounded-md border-4 border-[#ffffff2f]`}
            />
          </div>
          <div className={`mt-8`}>
            <Typing
              content={`Nothing is impossible.`}
              className={`text-xl rounded-md whitespace-nowrap bg-[#ffffff1f] px-2.5 py-2 backdrop-blur-sm text-white`}
              typingSpeed={150}
              keyboardSeed={2}
              keyboardStay={2}
            />
          </div>
        </div>
        <div
          className={`absolute bottom-[10%] left-[50%] transform translate-x-[-50%]`}
        >
          <Button
            variant={`outline`}
            size={`icon`}
            className={`rounded-full animate-bounce animate-2s`}
            onClick={() => {
              // scroll to next section
              const section = document.getElementById("section");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label={`scroll down`}
          >
            <ChevronDown className={`w-4 h-4`} />
          </Button>
        </div>
      </div>
      <div id={`section`} className={`w-full h-fit bg-background pt-4`}>
        <ProductSection />
        <ProjectSection />
        <TechStackSection />
        <Footer />
      </div>
    </main>
  );
}

function ProductSection() {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center w-full h-fit pt-8 pb-12`}
    >
      <Title
        title={"About"}
        subtitle={"关于"}
        tags={["INTJ", "CTO", "全栈开发", "开源爱好者"]}
      />
      <div className={`stats flex flex-col max-w-[80vw]`}>
        <img
          src="https://trendshift.io/api/badge/repositories/6369"
          alt="GitHub: #1 Repo of The Day"
        />
      </div>
      <div className={`text-md mt-6 text-center max-w-[60vw] leading-8`}>
        我是{" "}
        <Name
          name={"@zmh-program"}
          description={"Nothing is impossible."}
          avatar={"/avatar.webp"}
          avatarFallback={"ZM"}
          contact={"LightXi CTO"}
        />
        ，全栈开发者，热爱创新，喜爱创造。
        <br />
        目前担任{" "}
        <Name
          name={"晞云"}
          description={"珠海市晞云云科技有限公司"}
          avatar={"/lightxi.webp"}
          avatarFallback={"X"}
          contact={"www.lightxi.com"}
        />{" "}
        CTO，致力于创新并提供优质的产品。
        <br />
        生于 2009 年，七年编程生涯，感慨万千。
      </div>
      <div
        className={`flex flex-row mt-4 items-center border bg-muted-foreground/10 cursor-pointer duration-200 transition hover:bg-muted-foreground/15 select-none px-3 py-1.5 rounded-md shadow`}
      >
        <Quote className={`w-3.5 h-3.5 mr-2 shrink-0`} />
        Nothing is impossible.
      </div>
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
    <div className={`footer py-6 text-center text-sm bg-[#ffffff07]`}>
      <div
        className={`flex flex-row items-center justify-center mb-2 text-secondary`}
      >
        <Link href={"/donate"}>
          <HandHeart className={`w-4 h-4 inline-block mr-1`} />
          捐助
        </Link>
        <p
          className={`mx-1 text-secondary opacity-80 select-none translate-y-[1px]`}
        >
          |
        </p>
        <a href={"mailto:zmh@lightxi.com"}>
          <Mail className={`w-4 h-4 inline-block mr-1`} />
          商务联系
        </a>
      </div>
      <div className={`mb-2 text-secondary`}>
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
      <div>
        © 2021-present{" "}
        <Name
          name={"@zmh-program"}
          description={"Nothing is impossible."}
          avatar={"/avatar.webp"}
          avatarFallback={"ZM"}
          contact={"zmh@lightxi.com"}
        />
        . All rights reserved.
      </div>
    </div>
  );
}

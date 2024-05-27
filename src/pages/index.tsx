import { Inter } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, HandHeart, Star } from "lucide-react";
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
            "top-0 left-0 w-full h-full object-cover filter brightness-90 animate-scale-down"
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
              className={`text-xl rounded-md bg-[#ffffff1f] px-2.5 py-2 backdrop-blur-sm text-white`}
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
          >
            <ChevronDown className={`w-4 h-4`} />
          </Button>
        </div>
      </div>
      <div id={`section`} className={`w-full h-fit bg-background pt-4 pb-6`}>
        <ProductSection />
        <ProjectSection />
        <Footer />
      </div>
    </main>
  );
}

function ProductSection() {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center w-full h-fit pt-8 pb-20`}
    >
      <Title
        title={"About"}
        subtitle={"关于"}
        tags={["INTJ", "CTO", "全栈开发", "开源爱好者"]}
      />
      <div className={`text-md mt-2 text-center max-w-[60vw] leading-8`}>
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
      <div className={`stats mt-6 flex flex-col max-w-[80vw]`}>
        <img
          src="https://stats.deeptrain.net/user/zmh-program"
          alt="Zmh-Program's Github Stats"
        />
        <img
          className={`mt-2`}
          src="https://stats.deeptrain.net/user/Deeptrain-Community"
          alt="Deeptrain's Github Stats"
        />
      </div>
    </div>
  );
}

function ProjectSection() {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center w-full h-fit pt-12 pb-20 bg-[#ffffff07]`}
    >
      <Title title={"Projects"} subtitle={"我的项目"} />
      <Projects
        data={[
          {
            title: "Chat Nio",
            avatar: "chatnio.png",
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
            avatar: "lightnotes.ico",
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
            title: "Lyrify",
            avatar: "lyrify.webp",
            description:
              "🔍 聚合翻译平台, 结合多种翻译引擎, 提供翻译结果对比等功能",
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
          {
            title: "Vokkot",
            avatar: "vokkot.webp",
            description:
              "📦 [WIP] 你的下一代文件存储分发系统, 为开发者提供简单、高效、安全的文件存储和分发服务",
            tags: ["Rust", "Next.js", "S3", "CDN"],
            link: "https://github.com/zmh-program/vokkot",
          },
        ]}
      />
    </div>
  );
}

function Footer() {
  return (
    <div className={`footer mt-4 text-center text-sm`}>
      <div className={`mb-2 text-secondary`}>
        <Link href={"/donate"}>
          <HandHeart className={`w-4 h-4 inline-block mr-1`} />
          捐助
        </Link>
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
          contact={"LightXi CTO"}
        />
        . All rights reserved.
      </div>
    </div>
  );
}

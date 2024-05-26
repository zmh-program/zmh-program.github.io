import { Inter } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Typing } from "@/components/typing";

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
            "top-0 left-0 w-full h-full object-cover animate-saturated-scale-down"
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
              className={`text-xl rounded-md bg-[#ffffff1f] p-2 backdrop-blur-sm text-white`}
              typingSpeed={150}
              keyboardSeed={2}
              keyboardStay={2}
            />
          </div>
        </div>
        <Button
          variant={`outline`}
          size={`icon`}
          className={`absolute rounded-full bottom-[10%] left-[50%] transform translate-x-[-50%] animate-bounce animate-2s`}
          onClick={() => {
            // scroll to next section
            const section = document.getElementById("section");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown className={`w-4 h-4`} />
        </Button>
      </div>
      <div id={`section`} className={`h-screen bg-background`}></div>
    </main>
  );
}

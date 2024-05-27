import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ChevronLeft, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Donate() {
  return (
    <div className={cn(inter.className, `flex bg-background w-full h-screen`)}>
      <Link href={`/`}>
        <Button
          variant={`outline`}
          size={`icon`}
          className={`absolute top-4 left-4`}
        >
          <ChevronLeft className={`w-4 h-4`} />
        </Button>
      </Link>

      <Card className={`m-auto w-fit h-fit pb-8 max-w-[80vw] md:scale-110`}>
        <CardHeader>
          <CardTitle className={`text-xl`}>
            <HandHeart className={`w-6 h-6 inline-block mr-2`} />
            Donate 捐助
          </CardTitle>
          <CardDescription>
            如果我的项目对你有所帮助，欢迎捐助以支持我的创作！
          </CardDescription>
        </CardHeader>
        <div
          className={`px-4 grid grid-cols-1 gap-4 md:grid-cols-2 mx-auto w-fit h-fit`}
        >
          <img
            src={`/donate/wechat.webp`}
            alt={`wechat`}
            className={`rounded-md w-40 h-56`}
          />
          <img
            src={`/donate/alipay.webp`}
            alt={`alipay`}
            className={`rounded-md w-40 h-56`}
          />
        </div>
      </Card>
    </div>
  );
}

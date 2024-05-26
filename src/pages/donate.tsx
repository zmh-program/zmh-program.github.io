import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {Inter} from "next/font/google";
import {cn} from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });


export default function Donate() {
  return (
    <div className={cn(inter.className, `flex bg-background w-full h-screen`)}>
      <Card className={`m-auto w-fit h-fit`}>
        <CardHeader>
          <CardTitle>
            Donate 捐助
          </CardTitle>
        </CardHeader>
        <div className={`p-4 flex flex-row justify-center`}>
        </div>
      </Card>
    </div>
  )
}
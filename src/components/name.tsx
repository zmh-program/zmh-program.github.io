import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, Contact, Github } from "lucide-react";
import { cn } from "@/lib/utils";

type NameProps = {
  name: string;
  description: string;
  avatar: string;
  avatarFallback: string;
  contact: string;
};

function Name({
  name,
  description,
  avatar,
  avatarFallback,
  contact,
}: NameProps) {
  const isContactLink = contact.startsWith("www");

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className={`p-0 h-fit`} variant="link">
          {name}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-62">
        <div className="flex justify-between space-x-4 select-none">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="space-y-1 flex flex-col justify-start pr-2">
            <h4 className="text-sm font-semibold text-start">{name}</h4>
            <p className="text-sm">{description}</p>
            <div className="flex items-center pt-2">
              <Contact className="mr-2 h-4 w-4 opacity-70" />
              <span
                className={cn(
                  "text-xs text-muted-foreground",
                  isContactLink && "cursor-pointer hover:underline",
                )}
                onClick={() => {
                  if (isContactLink) {
                    window.open(`https://${contact}`, "_blank");
                    return;
                  }
                }}
              >
                {contact}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default Name;

import { cn } from "@/lib/utils";

interface TimelineEvent {
  year: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export function Timeline({ events, className }: TimelineProps) {
  return (
    <div className={cn("relative space-y-0", className)}>
      <div className="absolute top-0 left-[3.25rem] w-[1px] h-full bg-border/60" />
      {events.map((event, index) => (
        <div
          key={index}
          className="group relative flex gap-4 items-center py-2 hover:bg-muted/50 rounded-md transition-all duration-300 px-1.5"
        >
          <div className="text-sm font-medium text-primary/80 w-12 flex-shrink-0 relative z-10 cursor-default">
            {event.year}
          </div>
          <div
            className="absolute left-[3.25rem] w-[1px] h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              transform: "translateX(-50%)",
            }}
          />
          <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            {event.description}
          </p>
        </div>
      ))}
    </div>
  );
}

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
    <div className={cn("relative", className)}>
      <div className="absolute top-0 left-8 w-px h-full bg-border" />
      {events.map((event, index) => (
        <div
          key={index}
          className="group relative flex gap-3 items-center py-1.5 hover:bg-muted/50 rounded-md transition-colors px-1"
        >
          <div className="text-xs font-medium text-muted-foreground w-7 flex-shrink-0 relative z-10">
            {event.year}
          </div>
          <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            {event.description}
          </p>
        </div>
      ))}
    </div>
  );
}

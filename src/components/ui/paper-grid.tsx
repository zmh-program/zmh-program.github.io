import { cn } from "@/lib/utils";

interface PaperGridProps extends React.HTMLAttributes<HTMLDivElement> {
  gridColor?: string;
  gridSize?: number;
  lineWidth?: number;
}

export function PaperGrid({
  className,
  gridColor = "rgb(var(--border) / 0.2)",
  gridSize = 20,
  lineWidth = 1,
  ...props
}: PaperGridProps) {
  return (
    <div
      className={cn(
        "relative",
        "before:absolute before:inset-0 before:bg-[linear-gradient(to_right,var(--grid-color)_var(--line-width),transparent_var(--line-width)),linear-gradient(to_bottom,var(--grid-color)_var(--line-width),transparent_var(--line-width))]",
        "before:bg-[length:var(--grid-size)_var(--grid-size)]",
        "before:opacity-50",
        className,
      )}
      style={
        {
          "--grid-color": gridColor,
          "--grid-size": `${gridSize}px`,
          "--line-width": `${lineWidth}px`,
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

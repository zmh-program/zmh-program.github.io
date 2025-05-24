import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-1 opacity-50 stroke-[#0000000D] dark:stroke-[#FFFFFF0D] -z-10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "z-10 absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white",
          { "[animation-direction:reverse]": reverse },
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}

interface TechStackCirclesProps {
  innerIcons: string[];
  outerIcons: string[];
  innerRadius?: number;
  outerRadius?: number;
  innerSize?: string;
  outerSize?: string;
  duration?: number;
}

export function TechStackCircles({
  innerIcons,
  outerIcons,
  innerRadius = 80,
  outerRadius = 190,
  innerSize = "size-[30px]",
  outerSize = "size-[50px]",
  duration = 20,
}: TechStackCirclesProps) {
  return (
    <>
      <span className="pointer-events-none text-4xl font-semibold text-foreground/5">
        {"</>"}
      </span>
      {innerIcons.map((icon, index) => (
        <OrbitingCircles
          key={index}
          className={`${innerSize} border-none bg-transparent`}
          duration={duration}
          delay={(index * 100) / innerIcons.length}
          radius={innerRadius}
        >
          <img
            src={`https://skillicons.dev/icons?i=${icon}`}
            alt={`${icon} Icon`}
            className="w-full h-full object-contain"
          />
        </OrbitingCircles>
      ))}
      {outerIcons.map((icon, index) => (
        <OrbitingCircles
          key={index}
          className={`${outerSize} border-none bg-transparent`}
          radius={outerRadius}
          duration={duration}
          delay={(index * 100) / outerIcons.length}
          reverse
        >
          <img
            src={`https://skillicons.dev/icons?i=${icon}`}
            alt={`${icon} Icon`}
            className="w-full h-full object-contain"
          />
        </OrbitingCircles>
      ))}
    </>
  );
}

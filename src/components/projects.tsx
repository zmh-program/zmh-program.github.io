import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

type ProjectType = {
  title: string;
  description: string;
  tags: (string | React.ReactElement)[];
  link: string;
  avatar?: string;
  stars?: string;
};

type ProjectsProps = {
  data: ProjectType[];
};

const lineGradients = [
  "from-sky-500 to-blue-500",
  "from-green-500 to-yellow-500",
  "from-red-500 to-orange-500",
  "from-pink-500 to-purple-500",
  "from-blue-500 to-purple-500",
  "from-yellow-500 to-orange-500",
];

function Projects({ data }: ProjectsProps) {
  return (
    <div className={`grid grid-cols-1 gap-4 mt-4`}>
      {data.map((project, index) => (
        <Project key={index} idx={index} {...project} />
      ))}
    </div>
  );
}

function Project({
  idx,
  title,
  description,
  tags,
  link,
  avatar,
  stars,
}: ProjectType & {
  idx: number;
}) {
  const gradient = lineGradients[idx % lineGradients.length];

  return (
    <Link href={link} target="_blank">
      <div
        className={cn(
          "relative group flex flex-row w-full h-full",
          "bg-background-hover hover:bg-background-active focus:bg-background-active transition-all",
          "rounded-md border cursor-pointer overflow-hidden",
        )}
      >
        <div
          className={cn(
            "shrink-0 w-2 h-full bg-gradient-to-b blur-1 transition-all duration-300 group-hover:w-3",
            gradient,
          )}
        />
        <div className="flex flex-col px-6 pt-2 pb-4 grow">
          <h3 className="flex flex-row items-center text-lg font-bold">
            {title}
            {stars && (
              <span className="w-fit flex flex-row items-center border text-xs text-secondary-foreground ml-1.5 rounded-md px-1.5 py-0.5 whitespace-nowrap">
                <Star className="w-3 h-3 mr-1.5" />
                {stars}
              </span>
            )}
          </h3>
          <p className="text-sm text-secondary-foreground mt-1.5 line-clamp-2 mb-auto">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={cn(
                  "text-xs bg-muted border rounded px-1.5 py-1 mr-0.5 mb-0.5 whitespace-nowrap select-none cursor-pointer hover:bg-muted-hover transition-all",
                  "group-hover:bg-muted-hover group-focus:bg-muted-hover group-active:bg-muted-hover",
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Projects;

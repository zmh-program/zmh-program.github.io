type TitleProps = {
  title: string;
  subtitle: string;
  tags?: string[];
};

function Title({ title, subtitle, tags }: TitleProps) {
  return (
    <div className="inline-flex flex-col text-center mt-6 mb-4 select-none">
      <span
        className={`text-2xl underline underline-offset-4 underline-thickness-2`}
      >
        {title}
      </span>
      <span className={`mt-1 text-lg opacity-80`}>{subtitle}</span>

      {tags && (
        <div
          className={`flex flex-row flex-wrap max-w-[60vw] mt-4 justify-center`}
        >
          {tags.map((tag, index) => (
            <span
              key={index}
              className={
                "text-xs bg-muted rounded px-2 py-1 m-1 whitespace-nowrap select-none cursor-pointer hover:bg-muted-hover transition-all"
              }
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Title;

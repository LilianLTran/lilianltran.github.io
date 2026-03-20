type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
};

export default function TimelineItem({
  year,
  title,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-6">
      {/* Year */}
      <div className="w-[80px] shrink-0 text-sm text-neutral-500 
        dark:text-neutral-400">
        {year}
      </div>

      {/* Dot */}
      <div className="absolute left-[76px] top-2 h-2 w-2 rounded-full 
        bg-neutral-400 dark:bg-neutral-500" />

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>

        <p className="mt-2 text-sm leading-6 text-neutral-600 
          dark:text-neutral-300">
          {description}
        </p>
      </div>
    </div>
  );
}
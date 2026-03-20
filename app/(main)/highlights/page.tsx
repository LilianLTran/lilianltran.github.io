import TimelineItem from "./TimelineItem";

const highlights = [
  {
    year: "2020",
    title: "Upsilon Pi Epsilon (UPE)",
    description:
      "Member of the honor society for computing and information disciplines.",
  },
  {
    year: "2019",
    title: "Honors Scholar — De Anza College",
    description:
      "Completed the De Anza Honors Program with distinction.",
  },
  {
    year: "2019",
    title: "Associated Student Government — De Anza College",
    description:
      "Recognized by the Office of College Life for contributions to " +
      "student leadership initiatives.",
  },
  {
    year: "2019",
    title: "Teaching Assistant — CIS Department, De Anza College",
    description:
      "Recognized for valuable contributions to instruction and " +
      "student support.",
  },
  {
    year: "2019",
    title: "Inter Club Council Representative — De Anza College",
    description:
      "Received certificate of appreciation for student leadership and " +
      "campus involvement.",
  },
  {
    year: "2018",
    title: "Election Clerk — Swedish General Election (2018)",
    description:
      "Served as a voting clerk under the Consulate General of Sweden " +
      "(Aug 15–21, 2018).",
  },
  {
    year: "2018",
    title: "Trade Negotiation Simulation — Hinrich Foundation",
    description:
      "Completed an international trade negotiation program focused on " +
      "strategy and decision-making.",
  },
  {
    year: "2016",
    title: "Gold Medal — Physics Olympiad",
    description:
      "Awarded first place in a municipal-level physics competition.",
  },
];

export default function HighlightsPage() {
  return (
    <>
      {/* Header */}
      <section>
        <h1 className="text-4xl font-semibold tracking-tight">Highlights</h1>

        <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
          A selection of experiences, achievements, and activities over time.
        </p>
      </section>

      {/* Timeline */}
      <section className="pt-10">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[80px] top-0 h-full w-px bg-neutral-200 
            dark:bg-neutral-800" />

          <div className="space-y-10">
            {highlights.map((item) => (
              <TimelineItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
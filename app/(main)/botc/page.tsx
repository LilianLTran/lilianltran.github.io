type GuideItemProps = {
  title: string;
  rule: string;
  note: string;
};

function GuideItem({ title, rule, note }: GuideItemProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
      <h3 className="text-lg font-semibold italic">{title}</h3>

      <pre className="mt-3 overflow-x-auto rounded-xl bg-neutral-100 p-4 text-sm leading-6 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
        <code>{rule}</code>
      </pre>

      <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
        {note}
      </p>
    </div>
  );
}

const loricGuidebook = [
  {
    title: "Big Wig",
    rule: "Each nominee chooses a player: until voting, only they may speak & they are mad the nominee is good or they might die.",
    note: "Act sus, get nominated and choose the nominator as your defender.",
  },
  {
    title: "Bootlegger",
    rule: "This script has homebrew characters or rules.",
    note: "Add Lyric — The Storyteller must pass information to town through song lyrics or non-verbal methods while you are alive."
  },
  {
    title: "Gardener",
    rule: "The Storyteller assigns 1 or more players' characters.",
    note: "Musical chairs let's go",
  },
  {
    title: "Hindu",
    rule: "The first 4 players to die are immediately reincarnated as Travellers of the same alignment.",
    note: "The demon is Zombuul and dies first.",
  },
  {
    title: "Pope",
    rule: "There are duplicate good characters in play. They might also be bluffs.",
    note: "Seamstress vs Riot should thrive with this. Multiple non-drunk Village Idiots. Or all townsfolks Cannibals and all outsiders Damsels.",
  },
  {
    title: "Storm Catcher",
    rule: "Name a good character. If in play, they can only die by execution, but evil players learn which player it is.",
    note: "Farmer.",
  },
  {
    title: "Tor",
    rule: "Players don't know their character or alignment. They learn them when they die.",
    note: "Assassin chooses the Demon.",
  },
  {
    title: "Zenomancer",
    rule: "One or more players each have a goal. When achieved, that player learns a piece of true info.",
    note: "Too many ways to cook 😎.",
  },
];

export default function BOTCPage() {
  return (
    <>
      <section>
        <h1 className="text-4xl font-semibold tracking-tight">
          Blood on the Clocktower
        </h1>

        <p className="mt-3 max-w-3xl text-neutral-600 dark:text-neutral-300">
          A small collection of notes, ideas, and custom interactions I find
          especially fun when thinking about Blood on the Clocktower.
        </p>
      </section>

      <section className="pt-10">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 lg:p-8">
          <h2 className="text-2xl font-semibold">Loric guidebook</h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            A personal set of notes on characters, fabled roles, and
            interactions that I think create especially funny, chaotic, or
            interesting situations.
          </p>

          <div className="mt-8 space-y-6">
            {loricGuidebook.map((item) => (
              <GuideItem
                key={item.title}
                title={item.title}
                rule={item.rule}
                note={item.note}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
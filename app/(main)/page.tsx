import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="dark:text-white">
      {/* Right section */}
      <div>
        <h1 className="text-4xl font-semibold">
          Hi, I'm {profile.name}
        </h1>

        <p className="mt-1 text-lg text-neutral-500 text-justify">
          {profile.bio}
        </p>

        {/* Resume Buttons */}
        <div className="mt-6 flex gap-4">
          {/* Open in new tab */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium 
              text-white transition hover:bg-neutral-800 dark:bg-white 
              dark:text-black"
          >
            View Resume
          </a>
          {/* Download */}
          <a
            href="/resume.pdf"
            download
            className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm 
              font-medium hover:bg-neutral-100 dark:border-neutral-700 
              dark:hover:bg-neutral-800"
          >
            Download Resume
          </a>
        </div>
      </div>
        
      {/* Projects Section */}
      <div className="py-12">
        <h2 className="text-2xl font-semibold mb-6">
          Featured Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-neutral-200 p-5 transition 
                hover:shadow-lg dark:border-neutral-800"
            >
              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

              <p 
                className="mt-2 text-sm text-neutral-600 dark:text-neutral-400
                  text-justify"
              >
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <img
                    key={t.name}
                    src={t.badge}
                    alt={t.name}
                    className="h-6 transition-transform hover:scale-105"
                  />
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                className="mt-4 inline-block text-sm font-medium text-blue-600 
                  hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div className="pt-12">
        <p className="text-neutral-600 dark:text-neutral-300 text-justify">
          Outside of work, I enjoy exploring storytelling and deduction through
          games like{" "}
          <a
            href="/botc"
            className="underline decoration-current underline-offset-4 font-medium 
              text-purple-700 hover:text-purple-800 
              dark:text-amber-400 dark:hover:text-amber-300"
          >
            Blood on the Clocktower
          </a>{" "}
          and{" "}
          <a
            href="/jubensha"
            className="underline decoration-current underline-offset-4 font-medium 
              text-purple-700 hover:text-purple-800 
              dark:text-amber-400 dark:hover:text-amber-300"
          >
            Jubensha
          </a>
          , as well as{" "}
          <a
            href="/murder-mystery"
            className="underline decoration-current underline-offset-4 font-medium 
              text-purple-700 hover:text-purple-800 
              dark:text-amber-400 dark:hover:text-amber-300"
          >
            Writing Murder Mystery Games
          </a>
          .
        </p>
      </div>
    </div>
  );
}
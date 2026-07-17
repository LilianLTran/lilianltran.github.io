import { tech } from "./tech";

export const projects = [
  {
    title: "Tutor Scheduling App",
    description:
      "This project is a web-based tutoring management system that " +
      "streamlines requesting, scheduling, and managing tutoring sessions. " +
      "It provides role-based dashboards for students, tutors, and managers " +
      "to coordinate availability and track sessions.",
    tech: [
      tech.nextjs,
      tech.react,
      tech.typescript,
      tech.tailwind,
      tech.prisma,
      tech.postgres,
      tech.supabase,
      tech.nextauth,
      tech.nodemailer
    ],
    link: "https://github.com/LilianLTran/TutoringApp.git",
    image: "/tutorapp.png",
  },
  {
    title: "Photo Theme Song Finder",
    description:
      "An Android app that recommends music based on the visual content of " +
      "a photo. The app analyzes images using on-device ML Kit labeling to " +
      "infer mood and scene, ranks songs from a curated catalog, and opens " +
      "the selected track on YouTube for playback.",
    tech: [
      tech.kotlin,
      tech.android,
      tech.compose,
      tech.camerax,
      tech.mlkit,
      tech.coroutines,
      tech.youtube,
      tech.supabase
    ],
    link: "#",
    image: "/photothemesongfinder.png",
  },

  {
    title: "BookTable",
    description:
      "A full-stack restaurant reservation platform inspired by OpenTable. " +
      "BookTable allows users to discover restaurants and reserve tables, " +
      "while providing restaurant managers with tools to manage listings " +
      "and reservations and administrators with platform oversight features.",
    tech: [
      tech.react,
      tech.typescript,
      tech.python,
      tech.fastapi,
      tech.postgres,
      tech.aws,
      tech.googlemaps,
      tech.jenkins
    ],
    link: "#",
    image: "/booktable.png",
  },
  {
    title: "Interactive Casebook",
    description:
      "A data-driven detective/social-sim web game built with a strict " +
      "content-vs-engine separation: React components render view objects, " +
      "a service layer talks to a rules engine, and every case's locations, " +
      "characters, dialogue, and clues live entirely in JSON. Supports " +
      "multiple cases with per-case theming, an interactive nested map " +
      "system, and a customizable relationship/reputation model.",
    tech: [
      tech.react,
      tech.typescript,
      tech.vite,
      tech.reactRouter,
      tech.vercel
    ],
    link: "https://github.com/LilianLTran/DetectiveSim",
    image: "/interactive_casebook.png",
  },
];
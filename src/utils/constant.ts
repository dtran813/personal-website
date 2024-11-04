import {
  frontend,
  backend,
  gym,
  html,
  css,
  javascript,
  typescript,
  reactjs,
  nodejs,
  tailwind,
  mongodb,
  git,
  figma,
  visa,
  nomanit,
  wms,
  homesafari,
  oh2k,
  calculator,
  pig_game,
  csharp,
  python,
  java,
  facebook,
  twitter,
  github,
  linkedin,
  afo,
  hiking,
} from "@/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "CSharp",
    icon: csharp,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

export const interests = [
  {
    interest: "Software Engineer",
    image: backend,
  },
  {
    interest: "Web Development",
    image: frontend,
  },
  {
    interest: "Hiking",
    image: hiking,
  },
  {
    interest: "Working Out",
    image: gym,
  },
];

export const experiences = [
  {
    position: "Software Test Engineer",
    companyName: "Visa Inc.",
    icon: visa,
    date: "February 2023 - Present",
    points: [
      "Develop automated test scripts using Python, significantly improving testing efficiency and coverage across various projects.",
      "Develop comprehensive test plans and execute both manual and automated testing (functional,regression, performance), ensuring software reliability and high-quality releases.",
      "Identify and track defects using Jira, providing detailed documentation to ensure timelyresolution in collaboration with developers and stakeholders.",
      "Work closely with cross-functional teams, enabling effective communication and swift issueresolution to maintain product integrity.",
      "Contributed to the development of the Automation Test Manager project, utilizing Angular for thefront end and Java for the back end, to streamline test automation workflows.",
    ],
  },
  {
    position: "Software Engineer",
    companyName: "NomanIT",
    icon: nomanit,
    date: "November 2021 - December 2022",
    points: [
      "Built responsive web applications using React, improving the user experience and performance of internal tools.",
      "Developed and maintained RESTful API endpoints using Node.js to enhance application functionality and improve data accessibility.",
      "Collaborated in an Agile environment, participating in daily stand-ups, sprint planning, and retrospectives to deliver high-quality features on time.",
      "Participated in code reviews, promoting coding standards and best practices in development while ensuring maintainable and efficient codebases.",
    ],
  },
  {
    position: "Software Test Engineer Intern",
    companyName: "Visa Inc.",
    icon: visa,
    date: "May 2022 - August 2022",
    points: [
      "Enhanced testing infrastructure by developing new unit tests in Python using the unittest framework, ensuring robust protocol validation.",
      "Improved existing testing scripts to support new application protocols, ensuring seamless integration with Linux-based server environments.",
      "Collaborated with senior engineers to refine the gateway testing process, streamlining test case execution and validation cycles.",
    ],
  },
];

export const projects = [
  {
    name: "Walden Medical Staffing",
    description:
      "A real-world web application that supports the business operation of Walden Medical Staffing.",
    tags: [
      {
        name: "ASP.NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: wms,
    liveLink: "https://www.waldenmedstaffing.com/",
  },
  {
    name: "HomeSafari",
    description: "An Airbnb clone website using Next.js.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: homesafari,
    liveLink: "https://homesafari.vercel.app/",
  },
  {
    name: "OH2K Bank",
    description:
      "A landing website helps provide essential information about an imaginary bank.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: oh2k,
    liveLink: "https://oh2kbank.netlify.app/",
  },
  {
    name: "All For One",
    description:
      "An AI SASS that's so smart, it makes your computer look like it's still in kindergarten.",
    tags: [
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
    ],
    image: afo,
    liveLink: "https://afoai.vercel.app/",
  },
  {
    name: "CalcuNow",
    description: "Why Calculator when you can CalcuNow?",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: calculator,
    liveLink: "https://calcunow.netlify.app/",
  },
  {
    name: "Pig Game",
    description:
      "Pig Game has two players, so to make it fair, let's give them two dice instead.",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: pig_game,
    liveLink: "https://pig2.netlify.app/",
  },
];

export const social_media = [
  {
    name: "LinkedIn",
    logo: linkedin,
    url: "https://www.linkedin.com/in/duc-tran-6a141a1b4/",
  },
  {
    name: "Twitter",
    logo: twitter,
    url: "https://twitter.com",
  },
  {
    name: "GitHub",
    logo: github,
    url: "https://github.com/dtran813",
  },
  {
    name: "Facebook",
    logo: facebook,
    url: "https://facebook.com",
  },
];

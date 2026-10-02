export const profile = {
  name: "Trinh Mach Huy Phu",
  title: "Middle/Senior React Native Developer",
  location: "Thu Duc, Ho Chi Minh City",
  phone: "0792571353",
  email: "trinhphu3504@gmail.com",
  linkedin: "linkedin.com/in/phu-trinh-03775a25b",
  linkedinUrl: "https://linkedin.com/in/phu-trinh-03775a25b",
  github: "github.com/trinhphu22",
  githubUrl: "https://github.com/trinhphu22",
  summary:
    "React Native Developer with 4+ years of experience building mobile applications across e-commerce, logistics, IoT, and e-learning. I've owned several features end to end, from a real-time chat module to a full in-app learning platform. I also led the spin-off of BHXWork from MWGWork, including the React Native 0.74 → 0.79 upgrade, the move to the New Architecture, and the Re.Pack 4 → 5 migration. I care about performance and clean, maintainable code, and I'm looking for a Middle/Senior role where I can take on more ownership and impact.",
};

export const education = {
  school: "Can Tho University (CTU)",
  period: "Sep 2018 – Mar 2023",
  major: "Software Engineering",
  description:
    "Focused on software development with a strong foundation in programming, data handling, and mobile technologies. Participated in team projects and completed a graduation thesis on mobile app development.",
};

export interface App {
  name: string;
  tagline?: string;
  note?: string;
  bullets: string[];
  stack?: string;
}

export interface Job {
  company: string;
  period: string;
  role: string;
  description?: string;
  apps: App[];
}

export const experience: Job[] = [
  {
    company: "BHX (Bach Hoa Xanh)",
    period: "Jul 2026 – Present",
    role: "React Native Developer",
    description:
      "On 1 July 2026, Bach Hoa Xanh was split from MWG into a separate company and I moved with it. Having owned the MWGWork internal app at MWG, I led its spin-off into BHXWork and took over the rest of the BHX mobile apps, and I now own the React Native platform for the BHX product line.",
    apps: [
      {
        name: "BHXWork App",
        tagline: "employee super-app spun off from MWGWork",
        note: "main developer",
        bullets: [
          "Main developer on the project: split BHXWork out of the MWGWork codebase into a standalone multi-module app dedicated to Bach Hoa Xanh, defining the module structure and shared layers of the new codebase.",
          "Led the architecture upgrade from React Native 0.74 to 0.79 and enabled the New Architecture (Fabric + TurboModules): migrated build configuration and native projects on both Android and iOS, resolved breaking changes across native modules and third-party libraries, and replaced or patched packages that were not yet compatible with the New Architecture.",
          "Upgraded the bundler from Re.Pack 4.0 to 5.0, reworking the webpack/Module Federation configuration so the app's modules keep building and loading independently on the new React Native version.",
          "Re-verified and stabilized the migrated modules (chat, e-learning, IoT, evaluation, e-contract) after the upgrade, keeping feature parity while improving startup time and build stability.",
        ],
        stack:
          "React Native 0.79, Re.Pack 5, TypeScript, Redux Thunk, Redux Saga, Firebase, WebSocket, REST APIs, Git",
      },
      {
        name: "Shared UI Component Library",
        tagline: "0.74 to 0.79 upgrade",
        note: "main developer",
        bullets: [
          "Main developer for the upgrade of the shared component library from React Native 0.74 to 0.79: updated deprecated APIs and dependencies, kept the public component API backward compatible, and released the new version so consuming apps could migrate without rewriting existing features.",
        ],
      },
      {
        name: "Purchasing App",
        bullets: [
          "Developed supplier-management features covering goods export, approval workflows, and inbound inspection.",
        ],
      },
      {
        name: "Logistics App",
        bullets: [
          "Owned delivery-related modules including standard delivery, cluster delivery (giao hàng cụm), and express/super-fast delivery.",
          "Order Chat: independently built a real-time chat feature between delivery staff and customers directly on the order tracking screen, including WebSocket-based online/offline presence, unread-message badges across the delivery/receiving/management screens, and push-notification deep linking straight into the right conversation.",
        ],
      },
      {
        name: "Bach Hoa Xanh E-commerce App",
        bullets: [
          "Developed the order detail feature and SIS (Shop in Shop) module for the customer-facing e-commerce app.",
        ],
      },
    ],
  },
  {
    company: "MWG (The Gioi Di Dong Group)",
    period: "May 2022 – Jun 2026",
    role: "React Native Developer",
    description:
      "Design and develop internal and external mobile applications using React Native and Mini App technology, with a strong focus on performance, scalability, and user experience.",
    apps: [
      {
        name: "4KFarm App",
        tagline: "agri-tech platform connecting engineers and farmers",
        bullets: [
          "Built features for crop care, fertilization, and harvesting schedule tracking, improving task scheduling efficiency for field teams.",
        ],
        stack: "React Native, Redux Thunk, GraphQL, Firebase",
      },
      {
        name: "MWGWork App",
        tagline: "internal employee super-app",
        bullets: [
          "E-Contract: enabled fully digital contract signing for employees.",
          "Evaluation Module: built and managed satisfaction surveys, inter-department feedback, and customer call feedback.",
          "IoT Features: digital price tag sync after barcode scanning; setup, testing, and remote control of in-store IoT devices (A/C, lighting, sensors); security monitoring (door control, radar, infrared sensors, alarms, AI cameras) — reduced manual operations and improved security coverage.",
          "Chat Module: independently designed and built the module end-to-end, including real-time messaging, in-app calling, and push notifications via Firebase Cloud Messaging and WebSocket, collaborating with backend engineers on protocol integration.",
          "Learning Module (E-Learning): independently built a Udemy-style in-app learning platform from the ground up, including course content delivery via video and documents with quizzes and automatic grading, a leaderboard/ranking system, community features for sharing lessons and discussion, and a gamified points system redeemable for rewards with certificate issuance.",
        ],
        stack:
          "React Native, Redux Thunk, Redux Saga, Firebase, WebSocket, REST APIs, TypeScript, Git",
      },
      {
        name: "Custom UI Component Library",
        tagline: "shared infrastructure",
        bullets: [
          "Built an internal reusable component system to ensure UI consistency and speed up feature development across teams.",
        ],
      },
      {
        name: "WebView Bridge System",
        tagline: "shared infrastructure",
        bullets: [
          "Designed and built a shared bridge between the native app and WebView, letting embedded web pages communicate with native app features.",
          "Used across multiple apps (4KFarm, MWGWork, Purchasing) so each app didn't need to build its own web-to-native integration from scratch.",
        ],
      },
      {
        name: "Performance Optimization",
        bullets: [
          "Improved load times and app responsiveness on Android and iOS through lazy loading, profiling, and memory management.",
        ],
      },
    ],
  },
];

export interface FreelanceProject {
  name: string;
  tagline: string;
  period: string;
  bullets: string[];
  stack: string;
}

export const freelanceNote =
  "React Native Developer — all three apps below released to the App Store and Google Play.";

export const freelancePeriod = "2024 – Present";

export const freelanceProjects: FreelanceProject[] = [
  {
    name: "FDS App",
    tagline: "crypto trading application",
    period: "2024 – 2025",
    bullets: [
      "Built wallet management, transfers, and transaction history tracking.",
    ],
    stack: "React Native, Redux Saga, WebSocket, Firebase, REST APIs, TypeScript",
  },
  {
    name: "Tiger Mobile",
    tagline: "stock trading support app",
    period: "2024 – 2025",
    bullets: [
      "Delivered real-time stock trends, portfolio monitoring, and market news; integrated charting libraries and push notification services.",
    ],
    stack: "React Native, Redux, GraphQL, Firebase, REST APIs, Push Notifications",
  },
  {
    name: "CommoT",
    tagline: "stock trading support app",
    period: "2026",
    bullets: [
      "Delivered a stock trading support app similar to Tiger Mobile, covering real-time stock trends, portfolio monitoring, and market news.",
    ],
    stack: "React Native, Redux, GraphQL, Firebase, REST APIs, Push Notifications",
  },
];

export const honors = [
  {
    title: "Outstanding Employee Award – MWG (2025)",
    description:
      "Recognized for independently building the core payment module and the core e-learning platform on the MWGWork app.",
  },
  {
    title: "IoT Security Recognition – MWG (2024)",
    description:
      "Recognized by MWG for the successful implementation of the IoT monitoring and anti-theft security module.",
  },
];

export const skills = {
  technical: [
    "React Native (incl. New Architecture – Fabric, TurboModules)",
    "React JS",
    "Redux Thunk",
    "Redux Saga",
    "GraphQL",
    "RESTful APIs",
    "WebSocket",
    "Firebase",
    "Push Notifications",
    "React Native version upgrade & migration",
    "Re.Pack / Module Federation",
    "multi-module architecture",
    "Android & iOS native project configuration",
    "App Store & Google Play release",
    "Performance profiling & debugging",
  ],
  languages: ["JavaScript", "TypeScript"],
  tools: ["Git", "GitHub Copilot", "ChatGPT", "Claude (AI-assisted development)"],
  soft: ["Teamwork", "Problem Solving", "Adaptability", "Time Management"],
  english:
    "Strong reading and writing — comfortable with technical documentation, specs, and written communication; listening and speaking still improving.",
};

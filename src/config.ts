export const siteConfig = {
  name: "Esha Munagala",
  title: "Developer",
  description: "Portfolio website of Esha Munagala",
  accentColor: "#0c6c82ff",
  social: {
    email: "munagala@umich.edu",
    linkedin: "https://www.linkedin.com/in/esha-munagala-9a627522a",
    github: "https://github.com/eshaready",
  },
  aboutMe:
    "Hello! I'm Esha, a developer with full-stack experience with a passion for video game development. I'm a University of Michigan graduate with a bachelor's and master's (in progress) degree in computer science.",
  skills: ["C++", "C#", "Python", "SQL", "Google Cloud", "Kafka", "Unity", "Azure Functions", "Git", "Agile methodology"],
  projects: [
    {
      name: "Open Catsket",
      description:
        "My capstone project, a 2D puzzle-platformer themed around Schrodinger's cat. Created in 6 weeks with 4 other people, using C# and Unity. I was a main developer and a game artist; I developed most of the code around the unique player tethering mechanic, death and destructible objects, level progression both linearly and through level select screens, the menu, unique environmental objects; contributed to level design; and created many of the in-game assets, including all backgrounds and environmental objects, half the player sprites, the logo, and code for animation.",
      link: "https://eshaready.itch.io/open-catsket",
      iframe: {
        src: "https://itch.io/embed/3165834",
      },
      skills: ["Unity", "C#", "Game design"],
    },
    {
      name: "Ready Game Engine",
      description:
        "A multi-platform (Mac, Windows, and Linux) game engine! Built in C++, with Lua scripting support. Includes a component-based architecture where game developers can use Lua to script; built-in, easy 2D rendering using SDL; a built-in physics engine using Box2D; a built-in particle rendering system; and the ability to use Tiled as a visual scene editor for easy game creation. Built in C++. Scripting support for Lua, integrated using LuaBridge. Rendering, audio and windowing done with the SDL libraries. Physics done with the Box2D library. GLM, RapidJson, and TinyXML libraries also used.",
      link: "https://github.com/eshaready/game_engine",
      skills: ["C++", "Lua"],
    },
    {
      name: "antigrav",
      description:
        "A gravity-flipping platformer. Created solo in 1.5 weeks, using C# and Unity. I was the sole and main developer and game artist, creating all the UI, gameplay, and sprite art.",
      link: "https://eshaready.itch.io/antigrav",
      iframe: {
        src: "https://itch.io/embed/3029236",
      },
      skills: ["Unity", "C#", "Game design"],
    },
  ],
  experience: [
    {
      company: "United Wholesale Mortgage",
      title: "Application Development Intern",
      dateRange: "May 2025 - Aug 2025",
      bullets: [
        "Migrated 4 legacy CRON jobs into C# Azure Functions, resulting in reduced operational overhead, increased maintainability, and more scalable cloud infrastructure",
        "Modernized old email-sending solution and architected a Kafka-based solution that automated email sending within an Azure Function",
        "Acquired hands-on experience in full-stack application development, version control and enterprise-grade software lifecycle processes, contributing to a production ready feature and maintaining 80%+ code coverage",
        "Delivered a live enterprise-wide demo of our development work to an audience of 500+ employees, showcasing key features and technical architecture"
      ],
    },
    {
      company: "Ford Motor Company",
      title: "Enterprise Technology Intern",
      dateRange: "May 2024 - Aug 2024",
      bullets: [
        "Refactored 500+ lines of code to comply with code maintenance standards and created test cases with 85% line coverage of the new code",
        "Created an interactive dashboard displaying and analyzing electric vehicle charging station reviews from across the United States with complex filtering abilities using Python libraries Dash & Plotly",
        "Participated in a team-wide hackathon, creating a dashboard to display the results of an AI model analyzing electric vehicle battery health",
        "Annotated 500+ pieces of data to enable aspect-based sentiment analysis for an AI model"
      ],
    },
    {
      company: "Ford Motor Company",
      title: "Enterprise Technology Intern",
      dateRange: "May 2023 - Aug 2023",
      bullets: [
        "Created 13 ETL pipelines in Google Cloud Data Fusion to process supply chain and bridge file data in Cloud Storage buckets, implementing complex data transformations, and storing them in BigQuery",
        "Collaborated with teams across the company and an outside vendor to identify and implement data mapping requirements",
        "Won honorable mention in the Enterprise Technology Intern Innovation Challenge by producing a business plan to reduce phone distraction and increase customer safety using existing technology",
      ],
    },
  ],
  education: [
    {
      school: "University of Michigan",
      degree: "Masters of Science in Engineering in Computer Science",
      dateRange: "2025-2026",
      achievements: [
      ],
    },
    {
      school: "University of Michigan",
      degree: "Bachelor of Science in Engineering in Computer Science",
      dateRange: "2021-2025",
      achievements: [
        "Graduated Summa Cum Laude with 3.96 GPA",
        "Dean's List & University Honors all semesters",
        "James B. Angell Scholar",
        "Minored in English"
      ],
    },
  ],
};

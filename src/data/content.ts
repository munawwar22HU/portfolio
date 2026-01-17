export const profile = {
  name: "Your Name",
  locationPill: "Atlanta, GA (Open to Relocate)",
  headlinePrimary: "Data Analyst",
  headlineSecondary: "Python & SQL Specialist",
  tagline:
    "Cloud & AI Solutions",
  subtag:
    "Transforming Complex Data into Actionable Insights",
  skillsPills: ["Data Analytics", "Data Engineering", "SQL", "Python", "Cloud Data Platforms"],
  metrics: [
    { value: "3+", label: "Years Experience" },
    { value: "95%", label: "Reporting Accuracy" },
    { value: "Z+", label: "Records / Data Processed" },
  ],
  links: {
    github: "#",
    linkedin: "#",
    email: "mailto:you@example.com",
    resumePdf: "/resume.pdf",
  },
};

export const about = {
  text: "Data Analyst and Computer Science graduate student with over three years of experience in data processing, database management, and analytics workflows, skilled in SQL and Python for transforming complex datasets into actionable insights.",
};

export const experience = [
  {
    company: "ABM Industries",
    role: "Data Analyst Intern",
    dates: "June 2025 – August 2025",
    location: "United States",
    bullets: [
      "Migrated two Oracle stored procedures to Azure SQL, improving execution time by 40% and enabling faster financial reporting through query rewrites and optimized indexing strategies.",
      "Reduced Oracle–Azure SQL discrepancies to under 5% by identifying mismatches with Python scripts and resolving data alignment issues through systematic SQL debugging.",
      "Built a 735 Q&A synthetic dataset from 30 SOPs to fine-tune an internal chatbot, ensuring accuracy with company terminology and compliance with legal standards.",
      "Developed an LLM chatbot prototype to handle SOP and work instruction queries, improving operational efficiency by reducing manual search dependence using Azure AI Foundry’s o4-mini model.",
    ],
  },
  {
    company: "Habib University",
    role: "Research Assistant",
    dates: " July 2022 – July 2024",
    location: "Pakistan",
    bullets: [
      "Led weekly Python and SQL labs for 30 students, improving assignment performance by 15% and deepening comprehension in Deep Learning, DSA, and Database Systems.",
      "Redesigned 34 assignments and labs across multiple courses, cutting debugging support requests by 20% and reinforcing applied understanding through implementation-based coursework.",
      "Mentored 10 research projects in Deep Learning and LLMs, guiding methodology and publication processes that led to two ICETST 2024 paper acceptances.",
    ],
  },
  {
    company: "Ismail Industries Limited",
    role: "IT Intern",
    dates: "July 2021 – August 2021",
    location: "Pakistan",
    bullets: [
      "Processed 100K+ daily Trend Micro syslog records, classifying security events and field structures to enhance ingestion design for data-driven dashboards.",
      "Transformed parsed syslog data into an MS SQL database using Python-based ETL, enabling efficient querying of high-volume security events for analysis.",
      "Developed a prototype Power BI dashboard to visualize categorized events and trends, helping leadership assess antivirus activity and feasibility of centralized monitoring.",
    ],
  },
];


export const skillGroups = [
  {
    title: "Programming & Query Languages",
    icon: "💻",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "C++"],
  },
  {
    title: "Databases & Cloud Platforms",
    icon: "🗄️",
    items: ["PostgreSQL", "MS SQL Server", "Azure SQL Database", "MongoDB"],
  },
  {
    title: "Data Visualization",
    icon: "📊",
    items: ["Power BI", "Matplotlib", "D3.js"],
  },
  {
    title: "Machine Learning & AI",
    icon: "🤖",
    items: ["TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    title: "Software Engineering & Tools",
    icon: "🛠️",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "React", "Git", "GitHub", "VS Code"],
  },
];

export type ProjectTag =
  | "All"
  | "Machine Learning"
  | "SQL"
  | "Visualization"
  | "ETL"
  | "Full Stack";

export type Project = {
  id: string;
  icon: string;
  title: string;
  date: string;
  summary: string;
  tags: Exclude<ProjectTag, "All">[];
  detail: {
    problem: string;
    approach: string[];
    results: string[];
    stack: string[];
    links: { label: string; href: string }[];
  };
};

export const projectFilters: ProjectTag[] = [
  "All",
  "Machine Learning",
  "SQL",
  "Visualization",
  "ETL",
  "Full Stack",
];

export const projects: Project[] = [
  {
    id: "nyc-taxi",
    icon: "🚕",
    title: "NYC Yellow Taxi Analytics Platform",
    date: "Aug 2025 – Dec 2025",
    summary:
      "Built a PostgreSQL-backed platform for analyzing 20M+ NYC taxi trips (Jan–Aug 2025), enabling insights on demand, fare patterns, and vendor performance using optimized schemas and Python processing.",
    tags: ["SQL", "ETL", "Visualization"],
    detail: {
      problem:
        "Enable analysis of 20M+ NYC taxi trips (Jan–Aug 2025) to surface insights on demand, fare patterns, and vendor performance.",
      approach: [
        "Modeled data in PostgreSQL with optimized schemas to support analytics queries at scale.",
        "Processed and prepared data using Python to make analysis reproducible and consistent.",
        "Enabled exploration of demand, fares, and vendor performance through the platform workflows.",
      ],
      results: [
        "Analyzed 20M+ NYC taxi trips (Jan–Aug 2025).",
        "Enabled insights on demand, fare patterns, and vendor performance.",
      ],
      stack: ["PostgreSQL", "Python"],
      links: [
        // fill these when you have them
        { label: "GitHub", href: "#" },
        { label: "Demo", href: "#" },
      ],
    },
  },
  {
    id: "wage-gap",
    icon: "📊",
    title: "Gender Wage Gap Scrollytelling",
    date: "Jan 2025 – May 2025",
    summary:
      "Designed an interactive visualization analyzing 50,000 wage records (1981–2013) to reveal gender pay disparities across demographics using D3.js narrative storytelling.",
    tags: ["Visualization"],
    detail: {
      problem:
        "Communicate gender pay disparities across demographics using an interactive narrative backed by wage data (1981–2013).",
      approach: [
        "Designed a scrollytelling flow to guide users through key findings.",
        "Built interactive visuals in D3.js to support exploration across demographics.",
        "Structured the narrative around the dataset to keep insights grounded in the data.",
      ],
      results: [
        "Analyzed 50,000 wage records (1981–2013).",
        "Revealed gender pay disparities across demographics through narrative storytelling.",
      ],
      stack: ["D3.js"],
      links: [
        { label: "GitHub", href: "#" },
        { label: "Live Site", href: "#" },
      ],
    },
  },
  {
    id: "school-mgmt",
    icon: "🏫",
    title: "School Management Website",
    date: "Aug 2021 – May 2022",
    summary:
      "Built a school management system for 10 teachers and 30 students, digitizing records and automating data access via RESTful APIs and MongoDB for daily operations.",
    tags: ["Full Stack"],
    detail: {
      problem:
        "Digitize school records and streamline daily operations for teachers and students through a web-based system.",
      approach: [
        "Built RESTful APIs to automate data access and reduce manual workflows.",
        "Used MongoDB to store and manage school records in a centralized system.",
        "Designed the system to support daily operations for teachers and students.",
      ],
      results: [
        "Supported 10 teachers and 30 students.",
        "Digitized records and automated access through RESTful APIs and MongoDB.",
      ],
      stack: ["RESTful APIs", "MongoDB"],
      links: [
        { label: "GitHub", href: "#" },
        { label: "Demo", href: "#" },
      ],
    },
  },
];


export const resume = {
  tabs: ["Current Role", "Education", "Certifications"] as const,
  tabCards: {
    "Current Role": { title: "Current Role", subtitle: "Placeholder summary." },
    Education: { title: "Education", subtitle: "Placeholder summary." },
    Certifications: {
      title: "Certifications",
      subtitle: "Placeholder summary.",
    },
  },
  pdfUrl: "/resume.pdf",
};

export const contact = {
  blurb:
    "Interested in collaborating on data analytics projects or discussing opportunities? I'd love to hear from you. Let's connect and explore how we can work together.",

  info: {
    emailLabel: "Email",
    emailText: "munawwaradam@gmail.com", // display text (what shows on the page)
    phoneLabel: "Phone",
    phoneText: "(943) 241-3640", // display text
    locationLabel: "Location",
    // uses profile.locationPill by default in Contact.tsx unless you override
  },

  social: {
    githubLabel: "GitHub",
    githubText: "github.com/munawwar22HU",
    linkedinLabel: "LinkedIn",
    linkedinText: "linkedin.com/in/munawwar-anwar",
  },

  quick: [
    "I typically respond within 24 hours.",
    "Best times: Mon–Fri, 9 AM – 6 PM.",
  ],

  responseTimeText: "Response time: Usually within 24 hours",
};
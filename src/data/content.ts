export const profile = {
  name: "Muhammad Munawwar Anwar",
  locationPill: "Atlanta, GA (Open to Relocate)",
  headlinePrimary: "Data Analyst",
  headlineSecondary: "Data Engineer",
  tagline: "Python & SQL Specialist",
  subtag: "Transforming Complex Data into Actionable Insights",
  skillsPills: [
    "Data Analytics",
    "Data Engineering",
    "SQL",
    "Python",
    "Cloud Data Platforms",
  ],
  metrics: [
    { value: "3+", label: "Years Experience" },
    { value: "95%", label: "Reporting Accuracy" },
    { value: "100K+", label: "Records Processed" },
  ],
  links: {
    github: "https://github.com/munawwar22HU",
    linkedin: "https://www.linkedin.com/in/munawwar-anwar/",
    email: "mailto:munawwaradam@gmail.com",
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
    company: "Parents Voice Association – UJALA Centre",
    role: "Web Developer (Part-time & Remote)",
    dates: "June 2021 – May 2022",
    location: "Pakistan",
    bullets: [
      "Built a full-stack web app for Ujala School replacing manual records, improving data access and reporting for daily operations.",
      "Developed backend with Node.js, ExpressJS, and MongoDB, creating modular APIs for students, teachers, payments, and donations to streamline data retrieval.",
      "Implemented JWT authentication and role-based authorization, improving data protection and user-level access control.",
      "Designed ReactJS-based interfaces and deployed the system for 30–40 users, supporting real-world nonprofit workflows.",
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
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "React",
      "Git",
      "GitHub",
      "VS Code",
    ],
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
    id: "pharmacy-mgmt",
    icon: "🏥",
    title: "Pharmacy Management System",
    date: "Aug 2023 – Dec 2023",
    summary:
      "Built a full-stack pharmacy operations system with role-based workflows, dual Angular frontends (admin + customer), REST APIs, and MongoDB-backed inventory and ordering.",
    tags: ["Full Stack"],
    detail: {
      problem:
        "Build a role-based web system to manage pharmacy operations including inventory, ordering, user administration, and complaints across distinct user types.",
      github: "https://github.com/munawwar22HU/Pharmacy-Management-System",
      approach: [
        "Implemented role-based access control for Admin, Pharmacist, Manager, and Customer across the application.",
        "Built a Node.js/Express REST API with MongoDB/Mongoose models to support inventory, orders, complaints, and logs.",
        "Developed two Angular 9 applications (admin and customer) with distinct workflows, including shopping cart and checkout.",
        "Added file upload handling with Multer for medicine images and user profiles.",
      ],
      results: [
        "Implemented 4 user roles with role-based authentication and workflows.",
        "Delivered 8 REST API route modules with complete CRUD for medicine inventory management.",
        "Built shopping cart + order processing with checkout flow and complaint management.",
        "Integrated MongoDB with 5 core models: User, Medicine, Order, Complain, and Log.",
      ],
      stack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Angular 9",
        "TypeScript",
        "Restful APIs",
      ],
    },
  },
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
      github: "https://github.com/munawwar22HU/Database-Project",
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
      github: "https://github.com/munawwar22HU/genderpaygap.io",
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
    },
  },
  {
    id: "fake-news-detection",
    icon: "📰",
    title: "Fake News Detection Using NLP Models",
    date: "2024",
    summary:
      "Trained and evaluated four NLP models on the ISOT Fake News Dataset (44,898 articles) to classify real and fake news, achieving up to 100% accuracy using transformer-based architectures.",
    tags: ["Machine Learning"],
    detail: {
      problem:
        "Accurately classify news articles as real or fake using supervised machine learning and deep learning models trained on labeled textual data.",
      github: "https://github.com/munawwar22HU/CS_534_Fake_News_Classifier",
      approach: [
        "Preprocessed and utilized the ISOT Fake News Dataset containing 44,898 labeled news articles.",
        "Trained traditional and deep learning models including Logistic Regression, LSTM, BERT, and RoBERTa.",
        "Evaluated models using accuracy, precision, recall, and F1-score to compare performance across architectures.",
      ],
      results: [
        "Logistic Regression achieved 96.27% testing accuracy with a weighted F1-score of 0.96.",
        "LSTM achieved 97% testing accuracy with a weighted F1-score of 0.97.",
        "BERT achieved 99.55% evaluation accuracy with a weighted F1-score of 1.00.",
        "RoBERTa achieved 100% accuracy, precision, recall, and F1-score on the evaluation set.",
      ],
      stack: ["Python", "Scikit-learn", "LSTM", "BERT", "RoBERTa"],
    },
  },
  {
    id: "crypto-fraud-gnn",
    icon: "🔗",
    title: "Graph-Based Fraud Detection in Cryptocurrency Networks",
    date: "Jan 2025 – Apr 2025",
    summary:
      "Conducted a comparative study of traditional and graph-based machine learning models for detecting illicit cryptocurrency transactions using the Elliptic and Ethereum blockchain datasets.",
    tags: ["Machine Learning", "Visualization"],
    detail: {
      problem:
        "Detect illicit cryptocurrency transactions by modeling blockchain data as graphs and evaluating whether graph-based learning methods outperform traditional machine learning under class imbalance.",
      github: "",
      approach: [
        "Formulated fraud detection as a binary node classification problem on transaction graphs.",
        "Analyzed Elliptic and Ethereum datasets using both transactional features and graph structural features.",
        "Trained and evaluated traditional models (Logistic Regression, Random Forest, Decision Tree, Gradient Boosting) and graph-based models (GCN, GAT, GraphSAGE, Graph Transformers).",
        "Applied temporal train–validation–test splits to preserve chronological integrity of blockchain transactions.",
        "Compared models using accuracy, AUC, macro F1, precision, and recall to account for class imbalance.",
      ],
      results: [
        "On the Elliptic dataset, Random Forest achieved the highest performance with 0.97 accuracy and 0.88 macro F1, outperforming graph-based models.",
        "Graph-based models on Elliptic achieved lower macro F1 scores, with GCN at 0.72 and GraphSAGE at 0.72.",
        "On the Ethereum dataset, GraphSAGE achieved the highest performance with 0.9857 accuracy and 0.9312 macro F1.",
        "Results demonstrated that graph-based models are more effective on datasets where relational structure provides additional predictive signal.",
      ],
      stack: [
        "Python",
        "Scikit-learn",
        "PyTorch Geometric",
        "GCN",
        "GAT",
        "GraphSAGE",
        "Graph Transformers",
      ],
    },
  },
  {
    "id": "camouflaged-animal-detection",
    "icon": "🦎",
    "title": "Camouflaged Animal Detection Using YOLOv5",
    "date": "2023",
    "summary": "Built a data-centric camouflaged object detection pipeline by unifying multiple COD datasets and training a YOLOv5 model to detect camouflaged animals under extreme visual similarity conditions.",
    "tags": ["Machine Learning", "ETL"],
    "detail": {
      "problem": "Detect camouflaged animals that visually blend into their environment, a challenging object detection task due to low foreground–background contrast and limited annotated data.",
      "github": "",
      "approach": [
        "Merged COD10K and MoCA datasets into a unified dataset of 12,683 RGB images spanning 126 animal categories.",
        "Converted segmentation masks to bounding boxes using minimum enclosure methods and standardized annotations into YOLO format.",
        "Performed an 80–20 train–test split while preserving dataset balance and temporal relationships in video-derived data.",
        "Trained a YOLOv5s object detector using PyTorch with tuned hyperparameters on an NVIDIA TITAN RTX GPU.",
        "Evaluated model performance using mean Average Precision (mAP), precision, and recall across individual and merged datasets."
      ],
      "results": [
        "On the MoCA dataset, YOLOv5s achieved 69.78% mAP@0.5 and 47.36% mAP@0.5:0.95.",
        "On the COD10K dataset, YOLOv5s achieved 4.62% mAP@0.5 due to extremely low recall caused by strong camouflage.",
        "On the merged MoCA + COD10K dataset, YOLOv5s achieved 41.86% mAP@0.5 and 27.25% mAP@0.5:0.95.",
        "Results showed that temporal redundancy in video-based data significantly improves camouflaged object detection performance."
      ],
      "stack": [
        "Python",
        "PyTorch",
        "YOLOv5",
        "Computer Vision",
        "OpenCV"
      ]
    }
  },
  {
    "id": "gan-textile-design",
    "icon": "🧵",
    "title": "Textile Design Generation Using Generative Adversarial Networks",
    "date": "2023",
    "summary": "Explored deep generative models for automated textile pattern generation by training and comparing DCGAN, StyleGAN, and VAE architectures on culturally inspired fabric designs.",
    "tags": ["Machine Learning"],
    "detail": {
      "problem": "Automate the generation of textile patterns using deep generative models to reduce manual design effort and explore culturally inspired fabric design synthesis.",
      "github": "",
      "approach": [
        "Collected and augmented a textile dataset containing approximately 15,000 fabric images across six pattern categories.",
        "Implemented and compared DCGAN, StyleGAN, and Variational Autoencoder (VAE) architectures for image generation.",
        "Evaluated models on low-resolution (64×64) images and identified DCGAN as the most stable and visually coherent generator.",
        "Trained a DCGAN on higher-resolution images (256×256) to improve visual fidelity and reduce noise in generated patterns.",
        "Analyzed model behavior with respect to variance, overfitting, and aesthetic quality of generated designs."
      ],
      "results": [
        "VAE-generated images were blurry and lacked distinct structure.",
        "StyleGAN outputs showed high noise and weak pattern coherence on the available dataset.",
        "DCGAN produced sharper and more consistent textile patterns with lower noise compared to VAE and StyleGAN.",
        "Training DCGAN on 256×256 images improved resolution and reduced artifacts relative to prior 64×64 GAN outputs."
      ],
      "stack": [
        "Python",
        "PyTorch",
        "DCGAN",
        "StyleGAN",
        "Variational Autoencoder"
      ]
    }
  }


];

export const resume = {
  currentRole: "Data Analyst with 3+ Years Experience",

  education: [
    "M.S. Computer Science, Emory University",
    "B.S. Computer Science, Habib University",
  ],

  pdfUrl: "/resume.pdf",
};

export const contact = {
  blurb:
    "Interested in collaborating on data analytics projects or discussing opportunities? I'd love to hear from you. Let's connect and explore how we can work together.",

  info: {
    emailLabel: "Email",
    emailText: "munawwaradam@gmail.com",
    phoneLabel: "Phone",
    phoneText: "(943) 241-3640",
    locationLabel: "Location",
    locationText: "Atlanta, GA",
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

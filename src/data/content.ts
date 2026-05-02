export const profile = {
  name: "Muhammad Munawwar Anwar",
  locationPill: "Atlanta, GA",
  headlinePrimary: "Data Analyst",
  tagline: "SQL · Python · ETL Pipelines · Power BI",
  subtag: "M.S. CS, Emory University (4.0 GPA)",
  skillsPills: [
   "SQL",
    "Python",
    "ETL Pipelines",
    "PostgreSQL",
    "Power BI",
  ],
  metrics: [
    { value: "4.0", label: "M.S. GPA — Emory" },
    { value: "2", label: "IEEE Publications" },
    { value: "20M+", label: "Records Processed" },
  ],
  links: {
    github: "https://github.com/munawwar22HU",
    linkedin: "https://www.linkedin.com/in/manwar99/",
    email: "mailto:munawwaradam@gmail.com",
    resumePdf: "/resume.pdf",
  },
};

export const about = {
  text: "I'm a data analyst with a background in SQL optimization, ETL pipeline development, and Python-based data validation. Most recently at ABM Industries, I worked on migrating enterprise FP&A queries from Oracle Fusion to Azure SQL and validating 200K financial records during a live cloud migration — work that required both technical precision and an understanding of how data quality affects downstream reporting. I recently completed my M.S. in Computer Science at Emory University with a 4.0 GPA. I'm currently looking for full-time Data Analyst roles in Atlanta or remotely across the US.",
};
export const experience = [
  {
    company: "ABM Industries",
    role: "Data Analyst Intern",
    dates: "June 2025 – August 2025",
    location: "Atlanta, GA",
    bullets: [
      "Migrated AR Cash Received and AR Aging FP&A queries from Oracle Fusion to Azure SQL, reducing query runtime by 50% and saving 3 hours per close cycle, enabling the data team to build downstream financial dashboards, by converting PL/SQL to T-SQL and applying indexing optimization.",
      "Validated 200K financial records during Oracle-to-Azure SQL migration, reducing data mismatches from 12K to 1.5K and improving accounts receivable reconciliation accuracy, by developing Python validation scripts and SQL reconciliation logic.",
      "Built an Azure OpenAI-powered Q&A prototype over 30 SOP documents using Python parsing, reducing policy lookup time from 30 minutes to under 5 minutes in internal testing.",
    ],
  },{
    company: "Habib University",
    role: "Research Assistant — Computer Science",
    dates: "July 2022 – July 2024",
    location: "Karachi, Pakistan",
    bullets: [
      "Designed and validated lab curriculum for Database Systems across two semesters, covering relational modeling, query optimization, and schema design for 30+ students per cohort, including pre-solving all assignments to identify edge cases before distribution.",
      "Developed assessments for Algorithms, Data Structures I/II, and Nature of Computation, requiring formal correctness validation and edge case analysis on each problem set prior to student release.",
      "Built and evaluated coursework for Deep Learning (two semesters) and an inaugural LLM course, maintaining technical currency across transformer architectures and prompt engineering methods.",
      "Contributed to research design and weekly code reviews across 10 Deep Learning projects, resulting in 2 IEEE conference acceptances including a Best Paper Award.",
    ],
  },
{
    company: "Parents Voice Association – UJALA Centre",
    role: "Web Developer",
    dates: "June 2021 – May 2022",
    location: "Karachi, Pakistan",
    bullets: [
      "Built and deployed a full-stack MERN application for a special education NGO, digitizing records for 30 students and 10 teachers with role-based authentication across admin, student, and finance users.",
    ],
  },{
    company: "Ismail Industries Limited",
    role: "IT Intern",
    dates: "July 2021 – August 2021",
    location: "Karachi, Pakistan",
    bullets: [
      "Converted 100K+ daily Trend Micro security logs into structured CSVs using Python automation and loaded into SQL Server via ETL pipeline, reducing alert review time from 5 hours to 1 hour.",
      "Built a Power BI dashboard from SQL Server data, reducing reporting time from 2 hours to 10 minutes and enabling IT leadership to implement timely policy updates.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "💻",
    items: ["SQL", "Python", "JavaScript"],
  },
  {
    title: "Python Libraries",
    icon: "🐍",
    items: ["Pandas", "NumPy", "Matplotlib", "Flask"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    items: ["PostgreSQL", "Azure SQL", "Oracle Database", "SQL Server", "MongoDB"],
  },
  {
    title: "Data Engineering",
    icon: "⚙️",
    items: [
      "ETL Pipelines",
      "Data Modeling",
      "Data Warehousing",
      "API Integration",
      "Query Optimization",
      "Data Quality",
    ],
  },
  {
    title: "Data Visualization",
    icon: "📊",
    items: ["Tableau", "D3.js"],
  },
  {
    title: "Business Intelligence",
    icon: "📈",
    items: [
      "Power BI",
      "Excel (PivotTables, Power Query, XLOOKUP, INDEX/MATCH)",
      "Dashboard Building",
    ],
  },
  {
    title: "Analytics",
    icon: "🔎",
    items: ["Statistical Analysis", "A/B Testing"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    items: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Postman"],
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
    github: string;
    challenges: string[];
    outcomes: string[];
    stack: string[];
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
    id: "weather-etl-openweather",
    icon: "☁️",
    title: "Weather ETL & Dashboard",
    date: "2025 – Present",
    summary:
      "Eliminated 1.5 hours of daily manual data collection by automating weather ingestion from a public API every 10 minutes into SQLite across 5 cities, using Python and GitHub Actions for scheduling and monitoring.",
    tags: ["ETL", "Visualization"],
    detail: {
      problem:
        "Create a real-time pipeline to continuously ingest weather data from the OpenWeatherMap API, store it in a queryable database, and provide an interactive dashboard for trend analysis.",
      github: "https://github.com/munawwar22HU/weather-etl",
      challenges: [
        "Designing a reliable ETL pipeline that runs on a schedule using GitHub Actions.",
        "Handling API rate limits, JSON parsing, error resilience, and idempotent data loads.",
        "Storing time-series weather data efficiently in SQLite and enabling analytical queries.",
        "Building an interactive Streamlit dashboard that supports multi-city trend analysis with Plotly charts.",
      ],
      outcomes: [
        "Eliminated 1.5 hours of daily manual data collection across 5 cities.",
        "Automated weather ingestion every 10 minutes into SQLite using Python and GitHub Actions.",
      ],
      stack: [
        "Python",
        "SQLite",
        "GitHub Actions",
        "Streamlit",
        "Plotly",
        "OpenWeatherMap API",
      ],
    },
  },
  {
    id: "nyc-taxi",
    icon: "🚕",
    title: "NYC Yellow Taxi Analytics Platform",
    date: "August 2025 – December 2025",
    summary:
      "Reduced fare and demand analysis from 7 hours to 15 minutes across 20M+ NYC taxi trips by ingesting 8 months of Parquet files into a normalized PostgreSQL schema, building a Flask REST API, and deploying an interactive React dashboard across 256 taxi zones.",
    tags: ["SQL", "ETL", "Visualization"],
    detail: {
      problem:
        "Enable analysis of 20M+ NYC taxi trips (Jan–Aug 2025) to surface insights on demand, fare patterns, and vendor performance.",
      github: "https://github.com/munawwar22HU/Database-Project",
      challenges: [
        "Modeling large-scale taxi trip data in PostgreSQL with schemas optimized for analytical query performance.",
        "Processing and preparing high-volume trip records using Python while ensuring reproducibility and consistency.",
        "Supporting exploratory analysis across demand trends, fare distributions, and vendor-level performance.",
      ],
      outcomes: [
        "Reduced fare and demand analysis from 7 hours to 15 minutes across 20M+ NYC taxi trips.",
        "Ingested 8 months of Parquet files into a normalized PostgreSQL schema with a Flask REST API and React dashboard across 256 taxi zones.",
      ],
      stack: ["Python", "PostgreSQL", "Flask", "React", "ETL"],
    },
  },
  {
    id: "wage-gap",
    icon: "📊",
    title: "Gender Wage Gap Scrollytelling",
    date: "Jan 2025 – May 2025",
    summary:
      "Enabled real-time exploration of wage disparities across 344K records spanning 1981 to 2013, reducing manual analysis from 1.5 hours to 15 minutes across 6 demographic dimensions including age, education, and occupation, using an interactive D3.js scrollytelling interface.",
    tags: ["Visualization"],
    detail: {
      problem:
        "Communicate gender pay disparities across demographics using an interactive narrative backed by wage data (1981–2013).",
      github: "https://github.com/munawwar22HU/genderpaygap.io",
      challenges: [
        "Designing a scrollytelling structure that clearly guides users through complex wage data insights.",
        "Building interactive D3.js visualizations that support exploration across demographic dimensions.",
        "Balancing narrative flow with data-driven accuracy to keep insights grounded in the underlying dataset.",
      ],
      outcomes: [
        "Reduced manual analysis from 1.5 hours to 15 minutes across 344K wage records spanning 1981 to 2013.",
        "Enabled disparity exploration across 6 demographic dimensions including age, education, and occupation.",
      ],
    stack: ["Python", "D3.js", "JavaScript"],
    },
  },
  {
    id: "crypto-fraud-gnn",
    icon: "🔗",
    title: "Graph-Based Fraud Detection in Cryptocurrency Networks",
    date: "Jan 2025 – Apr 2025",
    summary:
      "Conducted a comparative study of traditional and graph-based machine learning models for detecting illicit cryptocurrency transactions, achieving up to 0.97 accuracy and 0.88 macro F1 on the Elliptic dataset and 0.9857 accuracy with 0.9312 macro F1 on the Ethereum dataset.",
    tags: ["Machine Learning", "Visualization"],
    detail: {
      problem:
        "Detect illicit cryptocurrency transactions by modeling blockchain data as graphs and evaluating whether graph-based learning methods outperform traditional machine learning under class imbalance.",
      github:
        "https://github.com/munawwar22HU/Graph-Based-Fraud-Detection-in-Cryptocurrency-Networks",
      challenges: [
        "Formulating illicit transaction detection as a binary node classification problem on large-scale blockchain transaction graphs.",
        "Handling severe class imbalance while leveraging both transactional features and graph structural information.",
        "Training and fairly comparing traditional machine learning models and graph-based models across heterogeneous blockchain datasets.",
        "Designing temporal train–validation–test splits to preserve the chronological integrity of blockchain transactions.",
        "Selecting evaluation metrics, including accuracy, AUC, macro F1, precision, and recall, to reflect performance under class imbalance.",
      ],
      outcomes: [
        "Achieved highest performance on the Elliptic dataset using Random Forest with 0.97 accuracy and 0.88 macro F1, outperforming graph-based models.",
        "Observed lower macro F1 scores for graph-based models on Elliptic, with GCN and GraphSAGE each achieving 0.72 macro F1.",
        "Demonstrated superior performance of graph-based learning on the Ethereum dataset, with GraphSAGE reaching 0.9857 accuracy and 0.9312 macro F1.",
        "Established that graph-based models are more effective when relational structure provides additional predictive signal beyond transactional features.",
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
    id: "fake-news-detection",
    icon: "📰",
    title: "Fake News Detection Using NLP Models",
    date: "August 2024 – December 2024",
    summary:
      "Trained and evaluated NLP models on the ISOT Fake News Dataset (44,898 articles), achieving up to 100% accuracy, precision, recall, and F1-score using RoBERTa for real versus fake news classification.",
    tags: ["Machine Learning"],
    detail: {
      problem:
        "Accurately classify news articles as real or fake using supervised machine learning and deep learning models trained on labeled textual data.",
      github: "https://github.com/munawwar22HU/CS_534_Fake_News_Classifier",
      challenges: [
        "Preprocessing and managing a large-scale textual dataset containing 44,898 labeled news articles.",
        "Designing a fair comparison between traditional machine learning and transformer-based NLP models.",
        "Evaluating model performance across multiple metrics, including accuracy, precision, recall, and F1-score, to capture classification quality.",
      ],
      outcomes: [
        "Achieved 96.27% testing accuracy and a weighted F1-score of 0.96 using Logistic Regression.",
        "Improved performance with LSTM, reaching 97% testing accuracy and a weighted F1-score of 0.97.",
        "Attained 99.55% evaluation accuracy with a weighted F1-score of 1.00 using BERT.",
        "Reached 100% accuracy, precision, recall, and F1-score on the evaluation set using RoBERTa.",
      ],
      stack: ["Python", "Scikit-learn", "LSTM", "BERT", "RoBERTa"],
    },
  },
  {
    id: "personalized-dp-mia",
    icon: "🔐",
    title:
      "Membership Inference Attacks on Personalized Differential Privacy Models",
    date: "August 2024 – December 2024",
    summary:
      "Evaluated empirical privacy risks of Personalized Differential Privacy using membership inference attacks, achieving up to 98.59% test accuracy on MNIST while observing AUC values closely aligned with individualized privacy budgets across MNIST, CIFAR-10, and SVHN.",
    tags: ["Machine Learning"],
    detail: {
      problem:
        "Evaluate whether personalized privacy budgets in Personalized Differential Privacy align with empirical privacy risks by measuring membership inference attack success across different user groups.",
      github: "https://github.com/munawwar22HU/MIAs_on_Personalized_DP_models",
      challenges: [
        "Designing experiments to measure empirical privacy risk across multiple user groups with different privacy budgets.",
        "Implementing and comparing Standard DP-SGD, IDP-SGD Sample, and IDP-SGD Scale methods under varying group ratios and privacy allocations.",
        "Balancing privacy protection and model utility while preserving chronological integrity and class distributions across MNIST, CIFAR-10, and SVHN datasets.",
      ],
      outcomes: [
        "Demonstrated that IDP-SGD improves utility while respecting personalized privacy preferences, with Sample and Scale methods achieving higher accuracy than Standard DP-SGD on MNIST and CIFAR-10.",
        "Observed that AUC values from membership inference attacks aligned with assigned privacy budgets, indicating effective personalized privacy protection.",
        "Achieved up to 98.59% test accuracy on MNIST using the Scale method under varied privacy budgets, outperforming Sample and Standard methods.",
        "Identified the Scale method as providing stronger privacy protection and higher accuracy than the Sample method across evaluated datasets.",
      ],
      stack: [
        "Python",
        "PyTorch",
        "Differential Privacy",
        "IDP-SGD",
        "CNN",
        "Membership Inference Attacks",
      ],
    },
  },
  {
    id: "camouflaged-animal-detection",
    icon: "🦎",
    title: "Camouflaged Animal Detection Using YOLOv5",
    date: "January 2022 – May 2022",
    summary:
      "Built a data-centric object detection pipeline for camouflaged animals, achieving up to 69.78% mAP@0.5 on real-world wildlife data despite extreme foreground–background similarity.",
    tags: ["Machine Learning"],
    detail: {
      problem:
        "Detect animals that visually blend into their environment, a challenging object detection task due to low contrast, strong camouflage, and limited annotated training data.",
      github: "https://github.com/munawwar22HU/Camouflage-Animal-Detection",
      challenges: [
        "Handling extremely low foreground–background contrast caused by natural camouflage.",
        "Unifying multiple camouflaged object detection datasets with inconsistent annotation formats.",
        "Maintaining model performance under severe class imbalance and low recall conditions.",
      ],
      outcomes: [
        "Unified COD10K and MoCA into a single dataset of 12,683 images across 126 animal categories.",
        "Achieved 69.78% mAP@0.5 and 47.36% mAP@0.5:0.95 on the MoCA dataset using YOLOv5s.",
        "Observed low performance on COD10K (4.62% mAP@0.5) due to extreme camouflage, highlighting dataset difficulty.",
        "Demonstrated that temporal redundancy in video-derived data significantly improves camouflaged object detection performance.",
      ],
      stack: ["Python", "PyTorch", "YOLOv5", "Computer Vision", "OpenCV"],
    },
  },
  {
    id: "compression-based-perceiver",
    icon: "🧠",
    title: "Compression-Based Perceiver for Image Classification",
    date: "August 2021 – May 2022",
    summary:
      "Evaluated a Perceiver model trained on compressed image embeddings instead of raw pixels, achieving up to 94.4% classification accuracy while reducing the computational cost of vision transformers.",
    tags: ["Machine Learning"],
    detail: {
      problem:
        "Reduce the quadratic computational cost of transformer-based vision models by evaluating whether a Perceiver can achieve comparable classification accuracy when trained on compressed latent image representations instead of raw image inputs.",
      github: "https://github.com/munawwar22HU/Compression-Based-Perceiver",
      challenges: [
        "Mitigating quadratic scaling of vision transformers while preserving classification performance.",
        "Learning semantically meaningful compressed image representations suitable for downstream classification.",
        "Evaluating model performance across datasets with varying resolution and class complexity.",
      ],
      outcomes: [
        "Achieved up to 94.4% test accuracy on CIFAR-10 using supervised contrastive embeddings versus 53.3% with autoencoder embeddings.",
        "Reached 66.3% accuracy on CIFAR-100 with supervised contrastive embeddings, while autoencoder-based representations failed to generalize.",
        "Obtained 84.2% accuracy on ImageNet-10 despite high-resolution inputs (224×224).",
        "t-SNE analysis showed clear class separation for supervised contrastive embeddings, confirming their effectiveness under strong input compression.",
      ],
      stack: [
        "Python",
        "PyTorch",
        "Perceiver",
        "Autoencoders",
        "Supervised Contrastive Learning",
        "ResNet",
      ],
    },
  },
  {
    id: "gan-textile-design",
    icon: "🧵",
    title: "Textile Design Generation Using Generative Adversarial Networks",
    date: "August 2021 - December 2021",
    summary:
      "Trained and compared DCGAN, StyleGAN, and VAE models on approximately 15,000 textile images across six pattern categories, generating designs at 64×64 and 256×256 resolutions for automated pattern synthesis.",
    tags: ["Machine Learning"],
    detail: {
      problem:
        "Automate the generation of textile patterns using deep generative models to reduce manual design effort and explore culturally inspired fabric design synthesis.",
      github:
        "https://github.com/munawwar22HU/Synthetic-Textile-Fabric-Pattern-Generation-using-GAN",
      challenges: [
        "Collecting and augmenting a textile dataset of approximately 15,000 fabric images spanning six pattern categories.",
        "Implementing and stabilizing multiple generative architectures, including DCGAN, StyleGAN, and Variational Autoencoders, on a limited dataset.",
        "Evaluating generative performance across low-resolution (64×64) and higher-resolution (256×256) image settings.",
        "Managing training instability, noise, and overfitting while preserving visual coherence and aesthetic quality in generated designs.",
      ],
      outcomes: [
        "Identified DCGAN as the most stable and visually coherent model when trained on 64×64 textile images compared to VAE and StyleGAN.",
        "Observed that VAE-generated images were blurry and lacked distinct structural patterns.",
        "Found that StyleGAN outputs exhibited high noise and weak pattern coherence on the available dataset.",
        "Improved visual fidelity by training DCGAN on 256×256 images, reducing artifacts and enhancing resolution relative to 64×64 outputs.",
      ],
      stack: [
        "Python",
        "PyTorch",
        "DCGAN",
        "StyleGAN",
        "Variational Autoencoder",
      ],
    },
  },
  {
    id: "pharmacy-mgmt",
    icon: "🏥",
    title: "Pharmacy Management System",
    date: "January 2021 – August 2021",
    summary:
      "Built a full-stack pharmacy management system implementing 4 role-based workflows, 8 REST API modules, and 5 MongoDB data models using dual Angular frontends and a Node.js backend.",
    tags: ["Full Stack"],
    detail: {
      problem:
        "Build a role-based web system to manage pharmacy operations including inventory, ordering, user administration, and complaints across distinct user types.",
      github: "https://github.com/munawwar22HU/Pharmacy-Management-System",
      challenges: [
        "Designing role-based access control to support Admin, Pharmacist, Manager, and Customer workflows within a single system.",
        "Implementing a scalable Node.js and Express REST API backed by MongoDB and Mongoose for inventory, orders, complaints, and logs.",
        "Developing and maintaining two Angular 9 frontends with distinct admin and customer workflows, including shopping cart and checkout.",
        "Handling file uploads for medicine images and user profiles using Multer while maintaining data consistency.",
      ],
      outcomes: [
        "Implemented 4 user roles with authenticated, role-specific workflows across the application.",
        "Delivered 8 REST API route modules supporting complete CRUD operations for medicine inventory management.",
        "Built shopping cart and order processing workflows with checkout and complaint management features.",
        "Integrated MongoDB using 5 core data models: User, Medicine, Order, Complain, and Log.",
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
    id: "cardiac-arrest-risk-predictor",
    icon: "❤️",
    title: "Cardiac Arrest Risk Prediction Using Decision Trees",
    date: "August 2020 – December 2020",
    summary:
      "Built a decision tree classifier from scratch to predict cardiac arrest risk, achieving 81.11% accuracy on real clinical data with an interactive diagnostic interface.",
    tags: ["Machine Learning"],
    detail: {
      problem:
        "Predict cardiac arrest risk using patient clinical features to support early diagnosis and informed medical decision-making.",
      github: "https://github.com/munawwar22HU/CS-351-AI-Project",
      challenges: [
        "Implementing a Decision Tree algorithm from scratch with support for entropy and Gini impurity.",
        "Handling heterogeneous clinical data sourced from multiple medical institutions.",
        "Designing an interface usable by non-technical users for real-time risk prediction.",
      ],
      outcomes: [
        "Achieved 81.11% testing accuracy using a 70–30 train-test split on the UCI Heart Disease Dataset.",
        "Recorded precision of 81.11% and recall of 89.36% for positive cardiac risk classification.",
        "Successfully classified patients into risk categories using 14 clinical features.",
        "Delivered an interactive Tkinter-based GUI displaying predictions alongside model performance metrics.",
      ],
      stack: [
        "Python",
        "NumPy",
        "Pandas",
        "Decision Trees",
        "Tkinter",
        "Matplotlib",
        "Seaborn",
      ],
    },
  },
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
    locationText: "Atlanta, GA (Open to Relocate)",
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

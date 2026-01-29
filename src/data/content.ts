export const profile = {
  name: "Muhammad Munawwar Anwar",
  locationPill: "Atlanta, GA (Open to Relocate)",
  headlinePrimary: "Entry-Level Data Analyst",
  tagline: "Python, SQL, & Power BI",
  subtag: "Turning Raw Data into Clear Business Insights",
  skillsPills: [
    "Data Analysis",
    "SQL",
    "Python",
    "Microsoft Power BI",
    "Tableau",
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
  text: "Data Analyst with 3+ years of experience working across analytics, data pipelines, and reporting workflows in finance, IT, and academic environments. Skilled in Python, SQL, Power BI, and Excel to support data-driven decision-making and operational insights.",
};

export const experience = [
  {
    company: "ABM Industries",
    role: "Data Analyst Intern",
    dates: "June 2025 – August 2025",
    location: "United States",
    bullets: [
      "Migrated and optimized Oracle stored procedures from Oracle  Fusion to Azure SQL, improving performance by 50% from 1 hour to 30 minutes and reducing FP&A close-cycle delays through PL/SQL-to-T-SQL conversion, query rewrites, and indexing strategies.",
      "Validated 200K financial records during Oracle-to-Azure SQL migration, reducing data discrepancies from 35% to under 5% and enabling production deployment for FP&A reporting through Python validation scripts and systematic SQL mismatch resolution",
      "Developed automated pipeline for ABM operational documentation, generating 735 Q&A pairs from 30 unstructured PDFs into structured training data and enabling future Azure OpenAI chatbot training through PDF text extraction, document chunking, and GPT-4o-mini prompt engineering.",
    ],
  },
  {
    company: "Habib University",
    role: "Research Assistant",
    dates: " July 2022 – July 2024",
    location: "Pakistan",
    bullets: [
      "Designed 34 Python and SQL lab assignments and exercises, reducing TA workload from 8 to 4 hours per week and lowering instructional support costs across 100+ students through structured documentation, modular code templates, and iterative design refinements.",
      "Facilitated weekly 3-hour Python and SQL labs for 30+ students, achieving 95%+ lab assignment completion rates and preparing students for advanced coursework and technical projects through hands-on coding guidance, troubleshooting, and personalized feedback.",
      "Mentored 10 student research projects in Deep Learning as Research Assistant across two course offerings, resulting in two first-time IEEE conference paper acceptances and establishing a reusable research pipeline for future student cohorts through weekly checkpoint meetings, Python code reviews, experimental methodology guidance, technical debugging, and iterative documentation feedback.",
    ],
  },
  {
    company: "Parents Voice Association – UJALA Centre",
    role: "Web Developer (Part-time & Remote)",
    dates: "June 2021 – May 2022",
    location: "Pakistan",
    bullets: [
      "Built full-stack management system for special education NGO, digitizing student/teacher records, fee tracking, sponsorships, and certificate workflows into centralized database and replacing manual paper-based administrative processes with web-based CRUD interface through MERN stack with MongoDB, role-based authentication, and RESTful API design.",
    ],
  },
  {
    company: "Ismail Industries Limited",
    role: "IT Intern",
    dates: "July 2021 – August 2021",
    location: "Pakistan",
    bullets: [
      "Parsed 100K+ daily unstructured Trend Micro syslog records into six CSV files by security event category, replacing vendor-limited reports with structured datasets and enabling custom analysis of firewall, malware, and monitoring events through Python-based signature classification.",
      "Built automated Python ETL pipeline loading parsed security event CSV files into an MS SQL database daily, replacing manual file searches with instant SQL queries and enabling cross-category trend analysis through relational data modeling and scheduled batch processing.",
      "Developed Power BI dashboard connected to SQL security database, automating daily security reporting for IT leadership to monitor threats, investigate incidents, and inform antivirus security policy decisions through interactive visualizations and event filtering.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: "💻",
    items: ["Python", "SQL", "R", "JavaScript", "TypeScript", "C++"],
  },
  {
    title: "Data Analysis Tools",
    icon: "📈",
    items: ["Excel", "Power BI", "Tableau"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    items: ["PostgreSQL", "MS SQL Server", "Azure SQL Database", "MongoDB", "SQLite"],
  },
  {
    title: "Data Processing",
    icon: "⚙️",
    items: ["Data Cleaning", "Data Validation", "Data Ingestion", "Data Migrations"],
  },
  {
    title: "Statistical Analysis",
    icon: "🔎",
    items: ["Descriptive Statistics","Hypothesis Testing","Regression Analysis"],
  },
  {
    title: "Data Visualization",
    icon: "📊",
    items: ["Matplotlib", "D3.js"],
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
    id: "nyc-taxi",
    icon: "🚕",
    title: "NYC Yellow Taxi Analytics Platform",
    date: "August 2025 – December 2025",
    summary:
      "Built full-stack analytics platform ingesting 20M+ NYC taxi trip records from January to August 2025 into PostgreSQL, implementing five materialized views and eleven strategic indexes to enable interactive analysis of fare trends, peak demand patterns, and vendor performance.",
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
        "Analyzed over 20M NYC Yellow Taxi trips spanning Jan–Aug 2025 using a PostgreSQL-backed analytics platform.",
        "Enabled analysis of demand patterns, fare behavior, and vendor performance through structured queries and data workflows.",
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
      "Built wage visualization platform processing 344K records, creating multi-dimensional aggregations across year, age, occupation, race, and education, and delivering comparative gender and racial pay-gap insights through an interactive scrollytelling interface using Python and D3.js.",
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
        "Analyzed 50,000 wage records spanning 1981–2013 to quantify gender pay disparities.",
        "Revealed demographic-specific wage gaps through interactive, narrative-driven visualizations.",
      ],
      stack: ["D3.js"],
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
      github:
        "https://github.com/munawwar22HU/Camouflage-Animal-Detection",
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
      github: "https://github.com/munawwar22HU/Synthetic-Textile-Fabric-Pattern-Generation-using-GAN",
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

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
  | "NLP"
  | "Computer Vision"
  | "SQL"
  | "Visualization"
  | "ETL"
  | "Statistics";

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
  "NLP",
  "Computer Vision",
  "SQL",
  "Visualization",
  "ETL",
  "Statistics",
];

export const projects: Project[] = [
{
    id: "card-transaction-dashboard",
    icon: "💳",
    title: "Card Transaction Analysis Dashboard",
    date: "March 2026 – April 2026",
    summary:
      "Built an Excel-based dashboard tracking $38.6M in spend across 55.7K transactions, using PivotTables, slicers, timeline filters, and KPI cards to surface fraud patterns, category performance, and weekly transaction trends.",
    tags: ["Visualization"],
    detail: {
      problem:
        "Analyze $38.6M in card transaction data to surface fraud patterns, spending trends by category, and weekly behavioral shifts across 55.7K transactions spanning June 2020 to December 2021.",
      github: "",
      challenges: [
        "Structuring raw transaction data into a PivotTable-driven model supporting multi-dimensional filtering by fraud status, state, and category.",
        "Designing KPI cards that surface key metrics — total spend, transaction count, average spend, and fraud percentage — at a glance.",
        "Building timeline and slicer controls that enable non-technical stakeholders to explore data without manual filtering.",
        "Identifying and communicating a non-obvious insight: fraud represented only 0.39% of transactions but 2.94% of total spend value.",
      ],
      outcomes: [
        "Tracked $38.6M in spend across 55.7K transactions with interactive filtering by fraud status, state, and category.",
        "Surfaced that fraud was 0.39% of transactions but 2.94% of total spend — a disproportionate financial impact not visible in volume metrics alone.",
        "Identified Shopping and Grocery as the dominant categories by both transaction count and total spend.",
        "Revealed a significant spending spike in December, consistent with seasonal consumer behavior patterns.",
      ],
      stack: [
        "Microsoft Excel",
        "PivotTables",
        "Power Query",
      ],
    },
  },
{
    id: "nyc-taxi",
    icon: "🚕",
    title: "NYC Taxi Analytics Platform",
    date: "August 2025 – December 2025",
    summary:
      "Engineered a normalized PostgreSQL analytics platform ingesting 20M+ taxi records through Parquet ETL, a modular Flask REST API, and an interactive React dashboard, reducing fare and demand analysis from 7 hours to 15 minutes.",
    tags: ["SQL", "ETL", "Visualization"],
    detail: {
      problem:
        "Enable scalable analysis of 20M+ NYC taxi trips to surface insights on demand patterns, fare distributions, and vendor performance across 256 taxi zones.",
      github: "https://github.com/munawwar22HU/Database-Project",
      challenges: [
        "Designing a normalized PostgreSQL schema optimized for analytical query performance at 20M+ record scale.",
        "Building a reproducible Parquet ETL pipeline to ingest and process 8 months of high-volume trip records.",
        "Exposing analytical queries through a modular Flask REST API consumed by a React dashboard.",
      ],
      outcomes: [
        "Reduced fare and demand analysis from 7 hours to 15 minutes across 20M+ NYC taxi trips.",
        "Ingested 8 months of Parquet files into a normalized PostgreSQL schema with indexing strategies and materialized views.",
        "Deployed an interactive React dashboard enabling real-time exploration across 256 taxi zones.",
      ],
      stack: [
  "Python",
  "PostgreSQL",
  "Flask",
  "React",
  "Pandas",
  "PyArrow",
],
    },
  },
  {
    id: "genai-vs-interactive-viz",
    icon: "🎓",
    title: "AI Learning Effectiveness Study",
    date: "January 2025 – April 2025",
    summary:
      "Investigated ChatGPT and interactive visualizations as AI learning tools across 36 participants, finding interactive visualization yielded 27% higher knowledge gains by applying paired and independent-samples t-tests on pre/post-test scores.",
    tags: ["Visualization","Statistics"],
    detail: {
      problem:
        "Determine whether interactive visualizations or generative AI tools like ChatGPT produce greater knowledge gains when used as AI literacy learning tools, using a controlled user study with pre and post-test scoring.",
      github: "",
      challenges: [
        "Designing a controlled study with 36 participants that fairly compared ChatGPT and interactive visualization as learning interventions.",
        "Building pre and post-test instruments that accurately measured knowledge gains across both conditions.",
        "Selecting appropriate statistical tests — paired and independent-samples t-tests — to account for within-group and between-group comparisons.",
        "Controlling for confounding variables including prior AI familiarity, engagement levels, and self-reported confidence.",
      ],
      outcomes: [
        "Interactive visualization yielded 27% higher average knowledge gains than ChatGPT (5.94 vs 4.68 out of 11).",
        "Paired t-tests confirmed statistically significant knowledge gains within the interactive visualization group.",
        "Interactive visualization group reported stronger engagement, confidence, and satisfaction scores than the ChatGPT group.",
        "Findings suggest interactive visualizations are more effective than generative AI for structured AI literacy learning.",
      ],
      stack: [
        "Python",
        "Pandas",
        "Matplotlib",
        "SciPy",
        "StatsModels",
      ],
    },
  },
  {
    id: "wage-gap",
    icon: "📊",
    title: "Gender Wage Gap Analysis Platform",
    date: "January 2025 – April 2025",
    summary:
      "Designed an interactive D3.js platform processing 344K wage records across 6 demographic dimensions spanning 32 years, reducing manual analysis from 1.5 hours to 15 minutes.",
    tags: ["Visualization"],
    detail: {
      problem:
        "Enable interactive exploration of gender pay disparities across 344K wage records spanning 32 years and 6 demographic dimensions including age, education, and occupation.",
      github: "https://github.com/munawwar22HU/genderpaygap.io",
      challenges: [
        "Designing a scrollytelling structure that clearly guides users through complex wage disparity insights without losing analytical accuracy.",
        "Building interactive D3.js visualizations that support real-time filtering across 6 demographic dimensions.",
        "Processing and structuring 344K records in Python for efficient client-side rendering in D3.js.",
      ],
      outcomes: [
        "Reduced manual analysis from 1.5 hours to 15 minutes across 344K wage records spanning 32 years.",
        "Enabled real-time disparity exploration across 6 demographic dimensions including age, education, and occupation.",
        "Deployed as an interactive web platform accessible at munawwar22hu.github.io/genderpaygap.io",
      ],
      stack: ["Python", "Pandas", "JavaScript", "D3.js"],
    },
  },
  
 {
    id: "crypto-fraud-gnn",
    icon: "🔗",
    title: "Graph-Based Fraud Detection in Cryptocurrency Networks",
    date: "January 2025 – April 2025",
    summary:
      "Benchmarked 8 traditional and graph-based ML models for illicit transaction detection on Elliptic (203K nodes) and Ethereum datasets. GraphSAGE achieved 98.57% accuracy and 93% Macro F1 on Ethereum while Random Forest achieved 97% accuracy and 88% Macro F1 on Elliptic.",
    tags: ["Machine Learning"],
    detail: {
      problem:
        "Detect illicit cryptocurrency transactions by modeling blockchain data as graphs and evaluating whether graph-based learning methods outperform traditional machine learning under class imbalance.",
      github:
        "https://github.com/munawwar22HU/Graph-Based-Fraud-Detection-in-Cryptocurrency-Networks",
      challenges: [
        "Formulating illicit transaction detection as a binary node classification problem on large-scale blockchain transaction graphs.",
        "Handling severe class imbalance while leveraging both transactional features and graph structural information.",
        "Training and fairly comparing traditional ML and graph-based models across heterogeneous blockchain datasets.",
        "Designing temporal train-validation-test splits to preserve the chronological integrity of blockchain transactions.",
        "Selecting evaluation metrics including accuracy, AUC, macro F1, precision, and recall to reflect performance under class imbalance.",
      ],
      outcomes: [
        "Random Forest achieved 97% accuracy and 88% Macro F1 on the Elliptic dataset, outperforming all graph-based models.",
        "GraphSAGE achieved 98.57% accuracy and 93% Macro F1 on the Ethereum dataset, demonstrating the value of relational structure.",
        "Established that graph-based models outperform traditional ML when relational structure provides additional predictive signal.",
        "Benchmarked 8 models total including GCN, GAT, GraphSAGE, Graph Transformers, and Random Forest across two datasets.",
      ],
    stack: [
  "Python",
  "PyTorch",
  "PyTorch Geometric",
  "Scikit-Learn",
],
    },
  },
 {
    id: "fake-news-detection",
    icon: "📰",
    title: "Fake News Classifier",
    date: "August 2024 – December 2024",
    summary:
      "Benchmarked Logistic Regression, LSTM, BERT, and RoBERTa on 44,898 ISOT articles. RoBERTa achieved 99.91% accuracy and 99.92% AUC, with systematic ablation across model families informing architecture selection.",
    tags: ["Machine Learning","NLP"],
    detail: {
      problem:
        "Accurately classify news articles as real or fake by benchmarking traditional ML and transformer-based NLP models on a large-scale labeled dataset.",
      github: "https://github.com/munawwar22HU/CS_534_Fake_News_Classifier",
      challenges: [
        "Preprocessing and managing a large-scale textual dataset containing 44,898 labeled news articles.",
        "Designing a fair comparison framework across traditional ML, LSTM, and transformer-based models.",
        "Evaluating model performance across accuracy, precision, recall, F1, and AUC to capture classification quality under different thresholds.",
      ],
      outcomes: [
        "Logistic Regression achieved 96.27% accuracy and 0.96 weighted F1.",
        "LSTM improved to 97% accuracy and 0.97 weighted F1.",
        "BERT reached 99.55% accuracy and 1.00 weighted F1.",
        "RoBERTa achieved 99.91% accuracy and 99.92% AUC — best performer across all model families.",
      ],
      stack: [
  "Python",
  "PyTorch",
  "Scikit-Learn",
  "Transformers",
],
    },
  },
  {
    id: "personalized-dp-mia",
    icon: "🔐",
    title: "Membership Inference Attack on Personalized Differential Privacy Models",
    date: "August 2024 – December 2024",
    summary:
      "Evaluated privacy risks of Individualized DP-SGD models using black-box membership inference attacks on CNNs trained on CIFAR-10, SVHN, and MNIST, analyzing ROC-AUC scores across privacy budget groups.",
    tags: ["Machine Learning"],
    detail: {
      problem:
        "Evaluate whether personalized privacy budgets in Individualized DP-SGD align with empirical privacy risks by measuring membership inference attack success across different user groups.",
      github: "https://github.com/munawwar22HU/MIAs_on_Personalized_DP_models",
      challenges: [
        "Designing experiments to measure empirical privacy risk across multiple user groups with different individualized privacy budgets.",
        "Implementing and comparing Standard DP-SGD, IDP-SGD Sample, and IDP-SGD Scale methods under varying group ratios and privacy allocations.",
        "Balancing privacy protection and model utility across MNIST, SVHN, and CIFAR-10 datasets with heterogeneous class distributions.",
      ],
      outcomes: [
        "IDP-SGD Scale achieved 98.59% accuracy on MNIST, outperforming Standard DP-SGD and IDP-SGD Sample across all datasets.",
        "AUC values from membership inference attacks aligned with assigned privacy budgets, validating effective personalized privacy protection.",
        "Identified IDP-SGD Scale as providing both stronger privacy protection and higher accuracy than the Sample method.",
        "Demonstrated that personalized privacy budgets improve utility without compromising empirical privacy guarantees.",
      ],
      stack: [
        "Python",
        "PyTorch",
        "Opacus",
      ],
    },
  },
 {
    id: "camouflaged-animal-detection",
    icon: "🦎",
    title: "Camouflaged Animal Detection",
    date: "January 2022 – May 2022",
    summary:
      "Merged MoCA, Chameleon, and COD10K datasets into a unified benchmark and trained YOLOv5 for camouflaged animal detection, establishing baseline results across the combined dataset.",
    tags: ["Machine Learning","Computer Vision"],
    detail: {
      problem:
        "Detect animals that visually blend into their environment — a challenging object detection task due to low contrast, strong camouflage, and limited annotated training data.",
      github: "https://github.com/munawwar22HU/Camouflage-Animal-Detection",
      challenges: [
        "Handling extremely low foreground–background contrast caused by natural camouflage patterns.",
        "Unifying multiple camouflaged object detection datasets with inconsistent annotation formats into a single benchmark.",
        "Maintaining model performance under severe class imbalance and low recall conditions.",
      ],
      outcomes: [
        "Unified COD10K, MoCA, and Chameleon into a single dataset of 12,683 images across 126 animal categories.",
        "Achieved 69.78% mAP@0.5 and 47.36% mAP@0.5:0.95 on the MoCA dataset using YOLOv5s.",
        "Observed low performance on COD10K (4.62% mAP@0.5), highlighting the extreme difficulty of static camouflage detection.",
        "Demonstrated that temporal redundancy in video-derived data significantly improves camouflaged object detection performance.",
      ],
      stack: ["Python", "PyTorch", "YOLOv5", "OpenCV"],
    },
  },
 {
    id: "compression-based-perceiver",
    icon: "🧠",
    title: "Compression-Based Perceiver",
    date: "August 2021 – May 2022",
    summary:
      "Undergraduate capstone — generated latent embeddings for CIFAR-10, CIFAR-100, and ImageNet using Supervised Contrastive Learning and Autoencoders, and trained the Perceiver architecture on limited compute.",
    tags: ["Machine Learning","Computer Vision"],
    detail: {
      problem:
        "Reduce the quadratic computational cost of transformer-based vision models by evaluating whether a Perceiver can achieve comparable classification accuracy when trained on compressed latent representations instead of raw image inputs.",
      github: "https://github.com/munawwar22HU/Compression-Based-Perceiver",
      challenges: [
        "Mitigating quadratic scaling of vision transformers while preserving classification performance on limited compute.",
        "Learning semantically meaningful compressed image representations suitable for downstream classification.",
        "Evaluating model performance across datasets with varying resolution and class complexity — CIFAR-10, CIFAR-100, and ImageNet.",
      ],
      outcomes: [
        "Achieved 94.4% test accuracy on CIFAR-10 using supervised contrastive embeddings vs. 53.3% with autoencoder embeddings.",
        "Reached 66.3% accuracy on CIFAR-100 with supervised contrastive embeddings — autoencoder representations failed to generalize.",
        "Obtained 84.2% accuracy on ImageNet-10 despite high-resolution 224×224 inputs.",
        "t-SNE analysis confirmed clear class separation for supervised contrastive embeddings under strong input compression.",
      ],
      stack: [
        "Python",
        "PyTorch",
        "React",
        "Heroku"
      ],
    },
  },
  {
    id: "gan-textile-design",
    icon: "🧵",
    title: "GAN-Based Textile Design Generation",
    date: "August 2021 – December 2021",
    summary:
      "Built a custom dataset of Pakistani textile prints via web scraping and trained generative models including DCGAN, StyleGAN, and VAE to synthesize fabric patterns across 6 pattern categories.",
    tags: ["Machine Learning","Computer Vision"],
    detail: {
      problem:
        "Automate the generation of Pakistani textile patterns using deep generative models, exploring culturally inspired fabric design synthesis from a custom scraped dataset.",
      github:
        "https://github.com/munawwar22HU/Synthetic-Textile-Fabric-Pattern-Generation-using-GAN",
      challenges: [
        "Building a custom dataset of approximately 15,000 Pakistani textile fabric images via web scraping across six pattern categories.",
        "Implementing and stabilizing multiple generative architectures including DCGAN, StyleGAN, and VAE on a limited custom dataset.",
        "Evaluating generative performance across low-resolution (64×64) and higher-resolution (256×256) image settings.",
        "Managing training instability and overfitting while preserving visual coherence and aesthetic quality in generated designs.",
      ],
      outcomes: [
        "DCGAN produced the most stable and visually coherent outputs at 64×64 resolution, outperforming VAE and StyleGAN.",
        "VAE-generated images were blurry with weak structural patterns — unsuitable for textile design synthesis.",
        "StyleGAN exhibited high noise and poor pattern coherence on the available dataset size.",
        "Training DCGAN on 256×256 images reduced artifacts and improved visual fidelity over 64×64 outputs.",
      ],
      stack: [
  "Python",
  "PyTorch",
  "BeautifulSoup",
  "Pillow",
],
    },
  },
  {
    id: "neural-networks-ufa",
    icon: "🔬",
    title: "Neural Networks as Universal Function Approximators",
    date: "January 2021 – May 2021",
    summary:
      "Analyzed universal approximation theory and exponential depth advantages in neural networks, validating theoretical results through experimental implementation.",
    tags: ["Machine Learning"],
    detail: {
      problem:
        "Analyze the theoretical foundations of neural networks as universal function approximators and empirically validate the exponential advantage of deeper networks over shallow networks through controlled experiments.",
      github: "",
      challenges: [
        "Understanding and communicating the mathematical proofs behind universal approximation theory for neural networks.",
        "Designing controlled experiments that empirically validate theoretical depth-width tradeoffs.",
        "Implementing neural network architectures of varying depth and width to compare approximation capacity under constrained parameters.",
        "Analyzing the gap between theoretical guarantees and practical performance across different function families.",
      ],
      outcomes: [
        "Validated that neural networks can approximate any continuous function to arbitrary precision given sufficient capacity.",
        "Demonstrated empirically that deeper networks achieve equivalent approximation with exponentially fewer parameters than shallow networks.",
        "Confirmed theoretical depth-width tradeoffs through controlled experimental comparisons across multiple function families.",
        "Produced a research report analyzing proofs and experimental findings on universal approximation and depth advantages.",
      ],
      stack: [
  "Python",
  "TensorFlow",
  "NumPy",
  "Matplotlib",
],
    },
  },
  {
    id: "madness-of-markets",
    icon: "📈",
    title: "Madness of Markets",
    date: "January 2021 – May 2021",
    summary:
      "Modeled human decision-making and cascading behavior using network models and game theory, applied to panic buying during COVID-19 in Pakistan and volatility in the Karachi Stock Exchange.",
    tags: ["Visualization","Statistics"],
    detail: {
      problem:
        "Analyze the Madness of Crowds phenomenon by modeling how external factors influence human decision-making, applying network models and game theory to real-world cases of panic buying during COVID-19 and Karachi Stock Exchange volatility.",
      github: "",
      challenges: [
        "Modeling cascading behavior and herd mentality using network theory and game-theoretic frameworks.",
        "Applying abstract theoretical models to real-world financial and behavioral data from Pakistan.",
        "Analyzing KSE volatility and COVID-19 panic buying as parallel case studies with different but related dynamics.",
        "Communicating complex network and game theory concepts through clear data visualizations.",
      ],
      outcomes: [
        "Demonstrated how cascading behavior and information contagion drive panic buying and market volatility.",
        "Applied network models to COVID-19 panic buying in Pakistan, identifying key tipping points in consumer behavior.",
        "Analyzed KSE volatility through a game-theoretic lens, surfacing structural patterns in market decision-making.",
        "Produced data visualizations and statistical analysis supporting the theoretical findings.",
      ],
      stack: [
        "Python",
        "Microsoft Excel",
        "Matplotlib",
      ],
    },
  },
  
];

export const resume = {
  currentRole: "Data Analyst | M.S. CS, Emory University (4.0 GPA)",
  education: [
    "M.S. Computer Science, Emory University (GPA: 4.0)",
    "B.S. Computer Science (Minor: Mathematics), Habib University (GPA: 3.85)",
  ],
  pdfUrl: "/resume.pdf",
};

export const contact = {
  blurb:
    "Open to full-time Data Analyst roles in Atlanta or remotely across the US. Feel free to reach out to discuss opportunities or connect.",
  info: {
    emailLabel: "Email",
    emailText: "[munawwaradam@gmail.com](mailto:munawwaradam@gmail.com)",
    phoneLabel: "Phone",
    phoneText: "(943) 241-3640",
    locationLabel: "Location",
    locationText: "Atlanta, GA",
  },
  social: {
    githubLabel: "GitHub",
    githubText: "github.com/munawwar22HU",
    linkedinLabel: "LinkedIn",
    linkedinText: "linkedin.com/in/manwar99",
  },
  quick: [
    "I typically respond within 24 hours.",
    "Best times: Mon–Fri, 9 AM – 6 PM.",
  ],
  responseTimeText: "Response time: Usually within 24 hours",
};


export const publications = [
  {
    id: "punjabi-poet-attribution",
    title: "Deep Learning based Poet Attribution model for Punjabi Poetry",
    authors: "F. Tariq, R. Gopchandani, R. H. Nizamani, A. Samad, M. M. Anwar",
    conference: "2024 International Conference on Emerging Trends in Smart Technologies (ICETST)",
    location: "Karachi, Pakistan",
    year: 2024,
    pages: "1-6",
    doi: "10.1109/ICETST62952.2024.10737982",
    url: "https://ieeexplore.ieee.org/document/10737982",
    abstract: "A Deep Learning model for Poet Attribution for Punjabi poetry using Shahmukhi, Gurmukhi, and Roman scripts. Dataset consists of 830 poems from 11 poets. Using Multilingual DistilBERT with Bi-LSTM and Bi-GRU, achieved 91.57% accuracy on Roman script.",
    award: "Best Paper Award",
    stack: ["Python", "PyTorch", "DistilBERT", "Bi-LSTM", "Bi-GRU"],
  },
  {
    id: "sindhi-poet-classification",
    title: "A Deep Learning based Approach for Sindhi Poet Classification using Couplets",
    authors: "A. Samad, M. M. Anwar, R. K. Kataria, M. Murtaza, F. Ali",
    conference: "2024 International Conference on Emerging Trends in Smart Technologies (ICETST)",
    location: "Karachi, Pakistan",
    year: 2024,
    pages: "1-6",
    doi: "10.1109/ICETST62952.2024.10737966",
    url: "https://ieeexplore.ieee.org/document/10737966",
    abstract: "A Deep Learning model for automatic classification of Sindhi poets based on couplets. Dataset consists of 3000 couplets from five poets. Using Word2Vec, MuRIL, and 1D CNNs, achieved 87.2% test accuracy — the first study to focus on Sindhi poetry.",
    award: null,
    stack: ["Python", "PySpark", "BERT", "Keras", "CNN"],
  },
];

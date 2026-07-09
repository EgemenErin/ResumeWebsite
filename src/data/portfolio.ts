export type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  outcome: string;
  tools: string[];
  status: string;
  href?: string;
  image?: string;
};

export type Metric = {
  label: string;
  value: number;
  suffix: string;
  context: string;
  group: "product" | "geo" | "credential" | "trends";
};

export const projects: Project[] = [
  {
    title: "Athena",
    eyebrow: "Open source personal project",
    summary:
      "A natural-language CSV analytics assistant that runs a Planner → Analyst → Reviewer agent pipeline, turning plain-English questions into pandas code, Plotly charts, and narrative summaries — all with fully local LLM inference.",
    problem:
      "How can someone explore and clean a dataset end-to-end using plain English, without writing code or sending sensitive data to an external API?",
    outcome:
      "Shipped a sandboxed code-execution layer for safe LLM-generated pandas, an AI-assisted cleaning module that reviews every column in batches of 30 with full undo, and zero-cost unlimited analysis via local Ollama inference.",
    tools: ["Python", "Streamlit", "Pandas", "Plotly", "Ollama", "LLM agents"],
    status: "Open source · Jan 2026 – Present",
    href: "https://github.com/EgemenErin/Athena",
    image: "/images/athena.png",
  },
  {
    title: "Emerging Trends in Software",
    eyebrow: "IBM analytics report / Cognos dashboard",
    summary:
      "A Stack Overflow Developer Survey analysis that turns technology adoption signals into hiring and learning priorities.",
    problem:
      "Which programming languages, databases, and platforms are stable today, desired tomorrow, and worth investing in?",
    outcome:
      "Built a Cognos-backed report covering language demand, database shifts, cloud adoption, and developer demographics.",
    tools: ["IBM Cognos", "Stack Overflow Survey", "Data wrangling", "Dashboards", "Trend analysis"],
    status: "Presentation project",
    href: "https://drive.google.com/file/d/1xZEhXQDpwWc3qmTcQue6HCnMO8QvQe4Q/view?usp=sharing",
    image: "/images/emerging-trends.png",
  },
  {
    title: "Customer Churn & Revenue Analytics",
    eyebrow: "Data Analysis Project",
    summary:
      "Built an automated reusable ETL pipeline in Pandas to clean and transform a 7,000+ row telecom dataset, handling hidden nulls, type casting, target binarization, and tenure cohort engineering. Built an interactive Power BI dashboard to analyze customer churn trends.",
    problem:
      "How can we identify customers who are likely to churn and take proactive measures to retain them? What are the most important factors that influence churn?",
    outcome:
      "Quantified $139K in at-risk monthly recurring revenue and identified Month-to-Month contracts as the primary churn driver, producing 4 actionable retention recommendations.",
    tools: ["Power BI", "Data Analysis", "Data Visualization", "Dashboard Design", "Pandas", "Python"],
    status: "Presentation project",
    href: "https://canva.link/ixiil8971bf7phi",
    image: "/images/customeranalysis.png",
  },
  {
    title: "US Equity Volatility Analysis",
    eyebrow: "Data engineering project",
    summary:
      "A scheduled ETL pipeline that ingests daily equity data from the Alpha Vantage API, loads it into Azure SQL, and surfaces risk through an interactive Power BI monitoring dashboard.",
    problem:
      "How can we track and compare the daily risk profile of multiple equities in near real time, from raw API data all the way to a decision-ready dashboard?",
    outcome:
      "Built a Python ETL pipeline for 5 tickers automated via GitHub Actions, engineered a 7-day rolling volatility feature (NVDA: 0.37 vs JNJ: 0.08), and delivered a DAX-driven dashboard tracking price, returns, and volatility across $29bn in total volume.",
    tools: ["Power BI", "Python", "SQL", "Azure", "Alpha Vantage API", "GitHub Actions"],
    status: "Data engineering project",
    href: "https://github.com/EgemenErin/US-Equity-Volatility-Monitor",
    image: "/images/us-equity-volatility.png",
  },
  {
    title: "Muscledia",
    eyebrow: "Product analytics / diploma project",
    summary:
      "A gamified fitness tracking app where workouts become quests and user progress becomes a measurable retention loop.",
    problem:
      "How can a fitness app make daily training feel rewarding enough that users return without being pushed?",
    outcome:
      "Analyzed engagement and feedback signals tied to a 40% lift in daily adherence, 30% stronger active session participation, and 25% better goal consistency.",
    tools: ["React Native", "Expo", "TypeScript", "Node.js", "MongoDB", "MySQL", "AI recommendations"],
    status: "Closed source",
    href: "https://github.com/Muscledia/Muscledia-Frontend",
    image: "/images/muscledia.png",
  },
];

export const metrics: Metric[] = [
  {
    label: "Workout adherence lift",
    value: 40,
    suffix: "%",
    context: "Muscledia engagement analysis",
    group: "product",
  },
  {
    label: "Active session boost",
    value: 30,
    suffix: "%",
    context: "Reward-loop participation",
    group: "product",
  },
  {
    label: "Goal consistency gain",
    value: 25,
    suffix: "%",
    context: "Personalized recommendation impact",
    group: "product",
  },
  {
    label: "Deepness audience",
    value: 150,
    suffix: "+",
    context: "Researchers and practitioners",
    group: "geo",
  },
  {
    label: "IBM certificate courses",
    value: 11,
    suffix: "",
    context: "Data analytics professional certificate",
    group: "credential",
  },
  {
    label: "JavaScript current users",
    value: 8687,
    suffix: "",
    context: "Stack Overflow trend sample",
    group: "trends",
  },
  {
    label: "PostgreSQL desired users",
    value: 4328,
    suffix: "",
    context: "Database trend signal",
    group: "trends",
  },
];

export const skillGroups = [
  {
    title: "Analysis",
    skills: ["Data wrangling", "Exploratory analysis", "Reporting", "Trend analysis", "Dashboard design"],
  },
  {
    title: "Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Data Stack",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Jupyter", "Excel", "Cognos Analytics", "Power BI"],
  },
  {
    title: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Model evaluation"],
  },
  {
    title: "Engineering",
    skills: ["MongoDB", "MySQL", "Git", "GitHub Actions", "Azure", "Node.js"],
  },
];

export const credentials = [
  {
    name: "IBM Data Analyst Professional Certificate",
    issuer: "IBM",
    logoSrc: "/images/logo-ibm.png",
  },
  {
    name: "IBM Generative AI for Data Analytics",
    issuer: "IBM",
    logoSrc: "/images/logo-ibm.png",
  },
  {
    name: "Google Foundations of Project Management",
    issuer: "Google",
    logoSrc: "/images/logo-google.png",
  },
  {
    name: "IELTS Academic B2",
    issuer: "IELTS",
    logoSrc: "/images/logo-ielts.png",
  },
  {
    name: "London App Brewery 100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "London App Brewery",
    logoSrc: "/images/logo-lab.png",
  },
];

export const processSteps = [
  {
    title: "Frame the question",
    body: "Start with the decision, not the chart. Define the stakeholder, constraint, and signal worth tracking.",
  },
  {
    title: "Clean the evidence",
    body: "Normalize messy inputs, document assumptions, and make the dataset trustworthy enough to argue from.",
  },
  {
    title: "Model the pattern",
    body: "Use statistical analysis, dashboards, or applied ML to expose what is changing and where it matters.",
  },
  {
    title: "Tell the story",
    body: "Turn results into a recommendation with visuals, context, and the next measurable action.",
  },
];

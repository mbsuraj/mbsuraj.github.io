export interface WorkEntry {
  company: string;
  title: string;
  dateRange: string;
  accomplishments: string[];
}

export const workExperience: WorkEntry[] = [
  {
    company: "Amazon Inc.",
    title: "Data Scientist II",
    dateRange: "2023 – Present",
    accomplishments: [
      "Developed probabilistic forecasting models to optimize supply chain demand planning across multiple fulfillment centers",
      "Built scalable ML pipelines processing terabytes of data using AWS SageMaker and Spark",
      "Designed A/B testing frameworks to measure the impact of algorithmic improvements on key business metrics",
    ],
  },
  {
    company: "Circle K",
    title: "Senior Data Scientist",
    dateRange: "2022 – 2023",
    accomplishments: [
      "Led development of demand forecasting systems for fuel pricing optimization across 7,000+ store locations",
      "Mentored junior data scientists and established best practices for model development and deployment",
      "Implemented real-time anomaly detection pipelines to identify pricing irregularities",
    ],
  },
  {
    company: "Circle K",
    title: "Data Scientist",
    dateRange: "2021 – 2022",
    accomplishments: [
      "Built machine learning models for customer segmentation and targeted promotion strategies",
      "Automated reporting dashboards reducing manual analysis time by 40%",
    ],
  },
  {
    company: "ProviderTrust",
    title: "ETL Specialist",
    dateRange: "2020 – 2021",
    accomplishments: [
      "Designed and maintained ETL pipelines for healthcare compliance data processing",
      "Optimized data ingestion workflows reducing processing time by 60%",
    ],
  },
  {
    company: "Cairn Oil and Gas",
    title: "Engineer",
    dateRange: "2015 – 2018",
    accomplishments: [
      "Analyzed production data to optimize well performance and reservoir management strategies",
      "Developed automated reporting tools for field operations monitoring",
    ],
  },
];

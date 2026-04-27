export type ProjectCategory = "application" | "research";

export interface Project {
  name: string;
  fullName: string;
  description: string;
  category: ProjectCategory;
  url?: string;
  demoUrl?: string;
  paperUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  field: string;
}

export const projects: Project[] = [
  {
    name: "MIC",
    fullName: "Make-it-Certain",
    description:
      "An open-source data science platform for small businesses — currently supports time-series forecasting, with what-if scenario testing and classification coming soon.",
    category: "application",
    url: "https://github.com/mbsuraj/mic",
    demoUrl: "https://make-it-certain.streamlit.app/",
  },
  {
    name: "StationarityToolkit",
    fullName: "StationarityToolkit",
    description:
      "A researcher's toolkit to run all time-series stationarity tests at once — handles frequency context automatically so you don't miss anything relevant.",
    category: "research",
    url: "https://github.com/mbsuraj/StationarityToolkit",
    paperUrl: "https://arxiv.org/abs/2604.08676",
  },
];

export interface Presentation {
  title: string;
  venue: string;
  location: string;
  date: string;
  abstract: string;
  keywords: string[];
  upcoming?: boolean;
}

export const presentations: Presentation[] = [
  {
    title: "Do Stationarity Transformations Actually Improve Time Series Forecasts?",
    venue: "International Symposium on Forecasting",
    location: "Montreal, Canada",
    date: "July 2, 2026",
    upcoming: true,
    abstract:
      "Stationarity transformations are among the most widely recommended preprocessing steps in time series forecasting, yet their actual impact on forecast accuracy across different non-stationarity types, model families, and forecast horizons has received surprisingly little controlled evaluation. This study investigates whether achieving stationarity through preprocessing transformations translates into improved forecast accuracy. Results across 2,352 experimental configurations reveal a clear disconnect: transformations significantly increase trend stationarity, but higher stationarity ratios are associated with worse forecast accuracy. The one consistent exception is variance stabilization — log and Box-Cox transforms on heteroscedastic data reliably improve accuracy.",
    keywords: [
      "stationarity",
      "transformations",
      "forecast accuracy",
      "time series preprocessing",
      "mediation analysis",
      "fractional differencing",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "M.S.",
    institution: "Arizona State University",
    field: "Business Analytics",
  },
  {
    degree: "B.Tech",
    institution: "IIT India",
    field: "Petroleum Engineering with Finance",
  },
];

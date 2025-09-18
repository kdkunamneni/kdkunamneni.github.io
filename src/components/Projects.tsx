import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  TrendingUp,
  Database,
  Heart,
  Users,
  Shield,
  Eye,
} from "lucide-react";
import "./Projects.css";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "30-Day Readmissions Analytics Pipeline",
      description:
        "Developed and automated a comprehensive readmissions prediction system using AWS Redshift and XGBoost to identify high-risk patients in rural healthcare facilities.",
      image:
        "https://via.placeholder.com/400x250/2c5aa0/ffffff?text=Readmissions+Analytics",
      technologies: ["Python", "XGBoost", "AWS Redshift", "HL7v2", "Tableau"],
      features: [
        "Real-time risk scoring for 30-day readmissions",
        "Interactive dashboard for healthcare providers",
        "80% reduction in manual report preparation",
        "Integration with HL7v2 HIE data sources",
      ],
      impact:
        "Reduced manual report preparation by 80% and enabled targeted interventions to lower readmission rates",
      github: "#",
      demo: "#",
      category: "Healthcare Analytics",
    },
    {
      title: "OMOP CDM Data Mapping & Standardization",
      description:
        "Automated terminology standardization pipeline for healthcare data using OMOP Common Data Model, Athena, and IMO APIs to accelerate population health analytics.",
      image:
        "https://via.placeholder.com/400x250/4a90e2/ffffff?text=OMOP+CDM+Mapping",
      technologies: [
        "Python",
        "OMOP CDM",
        "Athena",
        "Usagi",
        "IMO APIs",
        "PostgreSQL",
      ],
      features: [
        "Automated ICD, CPT, LOINC, SNOMED mapping",
        "70% reduction in manual mapping time",
        "Improved data consistency across sources",
        "Scalable terminology management system",
      ],
      impact:
        "Reduced manual mapping time by 70% and improved data consistency for population health analytics",
      github: "#",
      demo: "#",
      category: "Data Engineering",
    },
    {
      title: "HEDIS Measures Dashboard",
      description:
        "Built an automated system to compute HEDIS measures including breast and colon cancer screenings, MME, and opioid mortality rates with real-time validation.",
      image:
        "https://via.placeholder.com/400x250/2c5aa0/ffffff?text=HEDIS+Dashboard",
      technologies: ["SQL", "AWS S3", "JSON", "Tableau", "Python"],
      features: [
        "Automated HEDIS measure computation",
        "Real-time dashboard with JSON outputs",
        "30% reduction in query latency",
        "Validation against national benchmarks",
      ],
      impact:
        "Reduced query latency by 30% and ensured compliance with less than 5% variance from benchmarks",
      github: "#",
      demo: "#",
      category: "Quality Metrics",
    },
    {
      title: "Behavioral Health Trends Visualization",
      description:
        "Created a comprehensive Tableau dashboard visualizing behavioral health trends and pediatric ED visits across 93 Nebraska counties for resource allocation.",
      image:
        "https://via.placeholder.com/400x250/4a90e2/ffffff?text=Behavioral+Health+Dashboard",
      technologies: [
        "Tableau",
        "PostgreSQL",
        "Geospatial Analysis",
        "Choropleth Maps",
      ],
      features: [
        "Interactive geospatial visualizations",
        "County-level health trend analysis",
        "Resource allocation insights",
        "Stakeholder-friendly interface",
      ],
      impact:
        "Enabled stakeholders to identify high-need areas and allocate resources effectively across 93 counties",
      github: "#",
      demo: "#",
      category: "Data Visualization",
    },
    {
      title: "Breast Cancer Prognosis ML Model",
      description:
        "Developed machine learning models for breast cancer prognosis using genetic datasets and clinical data to support oncology registries and treatment planning.",
      image:
        "https://via.placeholder.com/400x250/2c5aa0/ffffff?text=Cancer+Prognosis+ML",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Machine Learning",
      ],
      features: [
        "Predictive analysis on genetic datasets",
        "Clinical data integration",
        "Oncology registry support",
        "Treatment outcome prediction",
      ],
      impact:
        "Facilitated breast cancer prognosis and supported clinical decision-making for 100k+ patient records",
      github: "#",
      demo: "#",
      category: "Machine Learning",
    },
    {
      title: "Drug Safety Signal Detection",
      description:
        "Implemented social media mining and sentiment analysis system to detect emerging drug safety signals from patient forums and real-world data sources.",
      image:
        "https://via.placeholder.com/400x250/4a90e2/ffffff?text=Drug+Safety+Detection",
      technologies: [
        "Python",
        "NLP",
        "Sentiment Analysis",
        "Web Scraping",
        "MedDRA",
      ],
      features: [
        "Real-world evidence collection",
        "Automated signal detection",
        "99.8% data accuracy",
        "Regulatory compliance reporting",
      ],
      impact:
        "Achieved 99.8% accuracy in translating 10,000+ adverse event narratives and identified emerging safety signals",
      github: "#",
      demo: "#",
      category: "Pharmacovigilance",
    },
  ];

  const getCategoryIcon = (category: string): React.ReactElement => {
    switch (category) {
      case "Healthcare Analytics":
        return <TrendingUp />;
      case "Data Engineering":
        return <Database />;
      case "Quality Metrics":
        return <Shield />;
      case "Data Visualization":
        return <Eye />;
      case "Machine Learning":
        return <Heart />;
      case "Pharmacovigilance":
        return <Users />;
      default:
        return <TrendingUp />;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Healthcare data science projects that drive real-world impact
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-category">
                  <span className="category-icon">
                    {getCategoryIcon(project.category)}
                  </span>
                  <span className="category-text">{project.category}</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-impact">
                  <h4>Impact:</h4>
                  <p>{project.impact}</p>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

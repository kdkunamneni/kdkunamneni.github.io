import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Cloud, Brain, Eye, Database, TrendingUp
} from 'lucide-react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming & Databases',
      skills: [
        { name: 'Python', level: 95, description: 'pandas, numpy, polars, Scikit-learn, Matplotlib, spaCy, PyTorch, boto3' },
        { name: 'R', level: 85, description: 'dplyr, ggplot2, Shiny' },
        { name: 'SQL', level: 90, description: 'PostgreSQL, TrinoSQL, MySQL' },
        { name: 'MongoDB', level: 75, description: 'NoSQL database management' },
        { name: 'SAS', level: 80, description: 'Statistical analysis software' },
        { name: 'STATA/SPSS', level: 70, description: 'Statistical analysis tools' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', level: 90, description: 'Redshift, S3, HealthLake, SageMaker, Athena' },
        { name: 'Azure', level: 70, description: 'Cloud computing platform' },
        { name: 'Docker', level: 65, description: 'Containerization' },
        { name: 'Git', level: 85, description: 'GitHub, GitLab version control' }
      ]
    },
    {
      title: 'Machine Learning',
      skills: [
        { name: 'XGBoost', level: 90, description: 'Gradient boosting framework' },
        { name: 'Random Forest', level: 85, description: 'Ensemble learning' },
        { name: 'SVM', level: 80, description: 'Support Vector Machines' },
        { name: 'NLP', level: 75, description: 'Natural Language Processing' },
        { name: 'LLM', level: 70, description: 'Large Language Models' },
        { name: 'Federated Learning', level: 65, description: 'Distributed ML approach' }
      ]
    },
    {
      title: 'Data Visualization',
      skills: [
        { name: 'Tableau', level: 90, description: 'Business intelligence and analytics' },
        { name: 'PowerBI', level: 80, description: 'Microsoft analytics platform' },
        { name: 'R Shiny', level: 75, description: 'Interactive web applications' },
        { name: 'Streamlit', level: 70, description: 'Python web apps' },
        { name: 'Apache Superset', level: 65, description: 'Open source BI' },
        { name: 'Choropleth Maps', level: 80, description: 'Geospatial visualization' }
      ]
    },
    {
      title: 'Healthcare Tools',
      skills: [
        { name: 'HL7v2', level: 95, description: 'Health Level 7 messaging' },
        { name: 'FHIR', level: 90, description: 'Fast Healthcare Interoperability Resources' },
        { name: 'OMOP CDM', level: 85, description: 'Observational Medical Outcomes Partnership' },
        { name: 'MedDRA', level: 90, description: 'Medical Dictionary for Regulatory Activities' },
        { name: 'Usagi', level: 80, description: 'OMOP vocabulary mapping' },
        { name: 'IMO APIs', level: 75, description: 'Intelligent Medical Objects' }
      ]
    },
    {
      title: 'Analytics Tools',
      skills: [
        { name: 'ARGUS', level: 85, description: 'Pharmacovigilance software' },
        { name: 'FreeSurfer', level: 70, description: 'Neuroimaging analysis' },
        { name: 'Salesforce', level: 75, description: 'CRM platform' },
        { name: 'Jira', level: 80, description: 'Project management' },
        { name: 'Perseus', level: 70, description: 'Proteomics analysis' },
        { name: 'Web Scraping', level: 85, description: 'Data extraction techniques' }
      ]
    }
  ];

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Code />;
      case 1: return <Cloud />;
      case 2: return <Brain />;
      case 3: return <Eye />;
      case 4: return <Database />;
      case 5: return <TrendingUp />;
      default: return <Code />;
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Comprehensive expertise in healthcare data science and analytics
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {getCategoryIcon(categoryIndex)}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: skillIndex * 0.1 + 0.5, duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="skill-description">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Core Competencies</h3>
          <div className="competencies-grid">
            <div className="competency-item">
              <h4>Healthcare Data Standards</h4>
              <p>HL7v2, FHIR, OMOP CDM, ICD-10, CPT, LOINC, SNOMED CT</p>
            </div>
            <div className="competency-item">
              <h4>Machine Learning & AI</h4>
              <p>Predictive modeling, risk stratification, NLP, deep learning</p>
            </div>
            <div className="competency-item">
              <h4>Data Engineering</h4>
              <p>ETL pipelines, data warehousing, cloud infrastructure</p>
            </div>
            <div className="competency-item">
              <h4>Clinical Analytics</h4>
              <p>HEDIS measures, quality metrics, population health analytics</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, TrendingUp, Database, User } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const features = [
    {
      title: 'Healthcare Analytics',
      description: 'Specialized in healthcare data analysis, population health metrics, and clinical outcomes research.'
    },
    {
      title: 'Machine Learning',
      description: 'Expert in predictive modeling, risk stratification, and automated analytics pipelines for healthcare.'
    },
    {
      title: 'Data Engineering',
      description: 'Proficient in HL7v2, FHIR, OMOP CDM, and building scalable healthcare data infrastructure.'
    },
    {
      title: 'Clinical Expertise',
      description: 'PharmD background with deep understanding of clinical workflows and healthcare regulations.'
    }
  ];

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Heart />;
      case 1: return <TrendingUp />;
      case 2: return <Database />;
      case 3: return <User />;
      default: return <Heart />;
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about transforming healthcare through data science and technology
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Healthcare Data Scientist & Informatics Specialist</h3>
            <p>
              I am a dedicated healthcare data scientist with a unique combination of clinical 
              expertise (PharmD) and advanced technical skills in data science and health informatics. 
              My passion lies in leveraging data-driven insights to improve patient outcomes and 
              healthcare delivery systems.
            </p>
            <p>
              With experience spanning from clinical pharmacy practice to advanced analytics at 
              leading healthcare organizations, I bring a comprehensive understanding of both 
              the clinical and technical aspects of healthcare data. My work focuses on developing 
              innovative solutions that bridge the gap between complex healthcare data and 
              actionable insights.
            </p>
            <p>
              I specialize in building automated analytics pipelines, implementing machine learning 
              models for risk prediction, and creating interactive dashboards that enable healthcare 
              providers to make data-driven decisions. My expertise includes working with various 
              healthcare data standards including HL7v2, FHIR, and OMOP CDM.
            </p>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon">
                  {getIcon(index)}
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <h3>4+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Healthcare Projects</p>
          </div>
          <div className="stat-item">
            <h3>80%</h3>
            <p>Process Improvement</p>
          </div>
          <div className="stat-item">
            <h3>99.8%</h3>
            <p>Data Accuracy</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

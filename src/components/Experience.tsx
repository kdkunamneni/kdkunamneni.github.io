import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import "./Experience.css";

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "CyncHealth Advisors, Inc.",
      position: "Data Scientist",
      location: "La Vista, NE",
      duration: "Mar 2023 – Present",
      achievements: [
        "Automated a 30-day readmissions pipeline using AWS Redshift and XGBoost, reducing manual reporting by 80% and supporting targeted interventions.",
        "Mapped HL7v2 and FHIR data to OMOP CDM, standardized terminology, and improved data consistency for population health analytics.",
        "Optimized SQL scripts for HEDIS measures and opioid mortality rates, reducing query latency by 30% and ensuring compliance with benchmarks.",
        "Designed cohort structures, deidentified PHI, and integrated EHR, PDMP, and Claims data for disease registries and analytics.",
        "Created Tableau dashboards to visualize behavioral health trends and pediatric ED visits, enabling resource allocation across Nebraska counties.",
        "Maintained version-controlled analytics codebase using GitHub/GitLab for collaborative development and continuous integration.",
      ],
    },
    {
      company: "Health Catalyst",
      position: "Clinical Data Curation Intern",
      location: "Salt Lake City, UT",
      duration: "Jan 2022 – Jul 2022",
      achievements: [
        "Curated breast cancer lab data and applied machine learning for predictive analysis, aiding oncology registry development.",
        "Performed terminology analysis and standardized COVID-19 lab data, improving clinical data interpretation.",
      ],
    },
    {
      company: "PPD (Pharmaceutical Product Development India Pvt Ltd)",
      position: "Associate Safety Specialist",
      location: "Hyderabad, India",
      duration: "Nov 2019 – Dec 2020",
      achievements: [
        "Used Python and sentiment analysis to detect emerging drug safety signals from social media platforms.",
        "Translated adverse event narratives into structured data with 99.8% accuracy and prepared regulatory safety reports.",
      ],
    },
    {
      company: "Apollo Hospitals",
      position: "PharmD Clerkship and Internship, Clinical Pharmacist",
      location: "Hyderabad, India",
      duration: "Aug 2017 – Aug 2019",
      achievements: [
        "Developed protocols and dosing algorithms to improve adherence to clinical guidelines and reduce medication-related incidents.",
        "Provided drug information and therapeutic recommendations, optimizing medication therapy management and patient outcomes.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A journey through healthcare data science and clinical practice
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>

              <div className="timeline-content">
                <motion.div
                  className="experience-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="experience-header">
                    <div className="company-info">
                      <h3 className="company-name">{exp.company}</h3>
                      <h4 className="position">{exp.position}</h4>
                    </div>
                    <div className="experience-meta">
                      <div className="meta-item">
                        <Calendar className="meta-icon" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin className="meta-icon" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

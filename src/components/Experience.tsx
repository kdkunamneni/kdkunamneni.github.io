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
        "Developed and automated a 30-day readmissions analytics pipeline in AWS Redshift using HL7v2 HIE data, applied XGBoost in Python to predict risk scores. Delivered near-real-time results via an interactive dashboard to rural healthcare facilities to identify high-risk patients, reducing manual report preparation by 80% and supporting targeted interventions to lower readmission rates.",
        "Mapped HL7v2 and FHIR data elements to the OMOP Common Data Model and automated terminology standardization (ICD, CPT, LOINC, SNOMED) using Athena, Usagi, and IMO APIs with Python scripts (pandas, numpy). Reduced manual mapping time by 70% and improved data consistency to accelerate population health analytics across multiple data sources.",
        "Developed and optimized SQL scripts to compute HEDIS measures (breast and colon cancer screenings), MME, and Opioid mortality rates. Stored JSON outputs in AWS S3 to support a real-time dashboard, reducing query latency by 30% and validating outputs against national benchmarks with less than 5% variance to ensure compliance and data accuracy.",
        "Designed and implemented cohort structures in PostgreSQL, deidentified PHI using SHA-256 hashing technique, and automated daily refreshes via stored procedures. Integrated millions of records from EHR, PDMP, Claims, NESIIS and NPPES data to support disease registries, population health analytics and reporting.",
        "Developed a Tableau dashboard to visualize behavioral health trends and pediatric ED visits across 93 Nebraska counties, enabling stakeholders to identify high-need areas and allocate resources effectively to address behavioral health gaps.",
        "Maintained version-controlled analytics codebase using GitHub/GitLab, enabling collaborative development, code reviews, and continuous integration for healthcare data pipelines and models.",
      ],
    },
    {
      company: "Health Catalyst",
      position: "Clinical Data Curation Intern",
      location: "Salt Lake City, UT",
      duration: "Jan 2022 – Jul 2022",
      achievements: [
        "Identified, curated, and structured breast cancer lab data from a dataset of 100k patient records and supported the clinical architecture of oncology registries. Employed Python-based machine learning models to conduct predictive analysis on genetic dataset, thereby facilitating the prognosis of breast cancer.",
        "Engineered SQL queries to perform comprehensive terminology analysis and data quality assessment of COVID-19 laboratory data. Designed a terminology information model for oxygen use and developed a detailed glossary of oxygen delivery system characteristics to standardize clinical data interpretation.",
      ],
    },
    {
      company: "PPD (Pharmaceutical Product Development India Pvt Ltd)",
      position: "Associate Safety Specialist",
      location: "Hyderabad, India",
      duration: "Nov 2019 – Dec 2020",
      achievements: [
        "Conducted social media mining on patient forums and other platforms to detect real-world mentions of drug side effects, using Python and sentiment analysis to identify emerging safety signals ahead of formal reporting.",
        "Translated 10,000+ unstructured adverse event narratives into structured, coded data using MedDRA and WHO Drug dictionaries with 99.8% accuracy. Prepared regulatory safety reports and performed literature-based signal surveillance to identify drug safety trends using advanced analytics and domain expertise.",
      ],
    },
    {
      company: "Apollo Hospitals",
      position: "PharmD Clerkship and Internship, Clinical Pharmacist",
      location: "Hyderabad, India",
      duration: "Aug 2017 – Aug 2019",
      achievements: [
        "Analyzed prescribing patterns and high-alert medication use within EHR/CPOE systems, and developed standardized protocols and evidence-based dosing algorithms, leading to improved adherence to clinical guidelines and a reduction in medication-related safety incidents across diverse patient populations in a high-volume hospital.",
        "Collaborated with healthcare teams to provide drug information, medication counseling, and therapeutic recommendations, optimizing medication therapy management and improving patient outcomes.",
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

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import './Education.css';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Master of Science, Health Informatics',
      institution: 'Northeastern University',
      location: 'Boston, MA',
      duration: 'Jan 2021 – Dec 2022',
      description: 'Advanced studies in health informatics, data science, and healthcare technology. Focused on clinical data analysis, healthcare information systems, and population health analytics.',
      highlights: [
        'Healthcare Data Analytics',
        'Clinical Information Systems',
        'Population Health Management',
        'Healthcare Data Standards (HL7, FHIR)',
        'Machine Learning in Healthcare'
      ]
    },
    {
      degree: 'Doctor of Pharmacy (PharmD)',
      institution: 'Osmania University',
      location: 'Hyderabad, India',
      duration: 'Sep 2013 – Aug 2019',
      description: 'Comprehensive pharmaceutical education with clinical training, drug therapy management, and healthcare system integration. Strong foundation in clinical practice and patient care.',
      highlights: [
        'Clinical Pharmacy Practice',
        'Drug Therapy Management',
        'Pharmacology & Therapeutics',
        'Healthcare Systems',
        'Patient Care & Counseling'
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic foundation in healthcare and informatics
          </p>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="education-header">
                <div className="degree-icon">
                  <GraduationCap />
                </div>
                <div className="degree-info">
                  <h3 className="degree-title">{edu.degree}</h3>
                  <h4 className="institution">{edu.institution}</h4>
                </div>
              </div>

              <div className="education-meta">
                <div className="meta-item">
                  <MapPin className="meta-icon" />
                  <span>{edu.location}</span>
                </div>
                <div className="meta-item">
                  <Calendar className="meta-icon" />
                  <span>{edu.duration}</span>
                </div>
              </div>

              <p className="education-description">{edu.description}</p>

              <div className="education-highlights">
                <h5>Key Focus Areas:</h5>
                <div className="highlights-grid">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <span key={highlightIndex} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certifications"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Professional Certifications & Training</h3>
          <div className="cert-grid">
            <div className="cert-item">
              <span className="cert-name">AWS Certified Cloud Practitioner</span>
              <span className="cert-year">2023</span>
            </div>
            <div className="cert-item">
              <span className="cert-name">HL7 FHIR Fundamentals</span>
              <span className="cert-year">2022</span>
            </div>
            <div className="cert-item">
              <span className="cert-name">OMOP Common Data Model</span>
              <span className="cert-year">2022</span>
            </div>
            <div className="cert-item">
              <span className="cert-name">Tableau Desktop Specialist</span>
              <span className="cert-year">2023</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

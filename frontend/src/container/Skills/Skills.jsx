import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import ReactTooltip from 'react-tooltip';

import './Skills.scss';

const formatDate = (date) => {
  if (!date) return 'Present';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
};

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const experiencesQuery = '*[_type == "experiences"] | order(_createdAt desc) { '
      + '_id, title, works[] }';
    const skillsQuery = '*[_type == "skills"] | order(name asc)';

    console.log('Fetching with experiencesQuery:', experiencesQuery);
    console.log('Fetching with skillsQuery:', skillsQuery);

    Promise.all([
      client.fetch(experiencesQuery),
      client.fetch(skillsQuery),
    ])
      .then(([experiencesData, skillsData]) => {
        console.log('Experiences raw data:', experiencesData);
        // Flatten works from all experiences and filter out nulls
        const allWorks = experiencesData.flatMap((exp) => exp.works || [])
          .filter((work) => work !== null);
        console.log('All works after flatten:', allWorks);
        // Sort by startDate descending
        const sortedWorks = allWorks.sort((a, b) =>
          new Date(b.startDate) - new Date(a.startDate)
        );
        console.log('Sorted works:', sortedWorks);
        setExperiences([{ works: sortedWorks }]);
        setSkills(skillsData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to load skills and experiences');
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      <>
        <h2 className='head-text'>Skills & Experiences</h2>
        <div className='app__skills-container'>
          <p className='p-text' style={{ color: '#e74c3c' }}>Error: {error}</p>
        </div>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <h2 className='head-text'>Skills & Experiences</h2>
        <div className='app__skills-container'>
          <p className='p-text'>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className='head-text'>Skills & Experiences</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.length > 0 ? (
            skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-item app__flex'
                key={skill._id}
              >
                <div
                  className='app__flex'
                  style={{ backgroundColor: skill.bgColor }}
                >
                  {skill.icon && <img src={urlFor(skill.icon)} alt={skill.name} />}
                </div>
                <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))
          ) : (
            <p className='p-text'>No skills available</p>
          )}
        </motion.div>
        <div className='app__skills-exp'>
          {experiences[0]?.works && experiences[0].works.length > 0 ? (
            experiences[0].works.map((work, index) => (
              <motion.div className='app__skills-exp-item' key={work._key || `work-${index}`}>
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>
                    {formatDate(work.startDate)} - {formatDate(work.endDate)}
                  </p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='app__skills-exp-work'
                    data-tip
                    data-for={`work-${work._key || index}`}
                  >
                    <h4 className='bold-text'>{work.name}</h4>
                    <p className='p-text'>{work.company}</p>
                  </motion.div>
                  <ReactTooltip
                    id={`work-${work._key || index}`}
                    effect='solid'
                    arrowColor='#fff'
                    className='skills-tooltip'
                  >
                    {work.desc}
                  </ReactTooltip>
                </motion.div>
              </motion.div>
            ))
          ) : (
            <p className='p-text'>No experience data</p>
          )}
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line new-cap
export default AppWrap(
  // eslint-disable-next-line new-cap
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);

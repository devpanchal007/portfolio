import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Central University of Haryana, Mahendergarh',
    period: '2022 - 2026',
    score: 'present',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Haryana Public School and College, Palwal',
    period: '2019 - 2021',
    score: '94%',
  },
  {
    degree: 'Secondary (X)',
    institution: "Haryana Public School and College, Palwal",
    period: '2017 - 2019',
    score: '79%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { SUBJECTS } from '../constants';

const SubjectList: React.FC = () => {
  return (
    <section id="subjects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Subjects We Cover</h2>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUBJECTS.map((subject, index) => (
            <div
              key={index}
              className="group bg-white rounded-md p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
                <img
                  src={subject.image}
                  alt={subject.subject}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out scale-90 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold">{subject.subject}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectList;

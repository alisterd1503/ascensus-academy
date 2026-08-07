import React from 'react';
import { Reveal } from './Reveal';
import { urlFor } from '../lib/sanity';
import { HomeStory, HomeModel } from '../types';

interface Props {
  story: HomeStory;
  model: HomeModel;
}

const About: React.FC<Props> = ({ story, model }) => {
  return (
    <section id="about">
      <div className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <Reveal>
                <div className="absolute top-6 -left-6 w-full h-full bg-gray-100 rounded-md -z-10"></div>
                <img
                  src={story.image ? urlFor(story.image).url() : '/uploads/our-story.webp'}
                  alt="Student reading book"
                  className="rounded-md shadow-2xl w-full h-[200px] sm:h-[200px] md:h-[400px] object-cover"
                />
              </Reveal>
            </div>
            
            <div className="w-full lg:w-1/2">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 md:mb-8">Our Story</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light"
                  dangerouslySetInnerHTML={{ __html: story.text }}
                />
                <a href="/about-us"
                  className="mt-10 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-md font-medium transition-all shadow-lg hover:shadow-xl inline-block text-center"
                >
                  {story.buttonLabel}
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary py-10 sm:py-10 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h3 className="text-2xl sm:text-2xl md:text-4xl font-bold text-white mb-3 sm:mb-3 md:mb-10 tracking-wide">{model.heading}</h3>
            <p className="text-xl sm:text-xl md:text-4xl text-blue-100 italic leading-relaxed">
              {model.quote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
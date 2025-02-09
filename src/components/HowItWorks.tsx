import React from 'react';
import { CheckSquare, Users, Award } from 'lucide-react';

const steps = [
  {
    icon: CheckSquare,
    title: 'Choose Your Standard',
    description: 'Select from our comprehensive range of compliance certifications.'
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Work with our compliance experts to implement necessary controls.'
  },
  {
    icon: Award,
    title: 'Get Certified',
    description: 'Achieve certification quickly with our streamlined process.'
  }
];

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our simple three-step process to achieving compliance
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-medium text-gray-900">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
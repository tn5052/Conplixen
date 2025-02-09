import React from 'react';
import { Shield, Lock, Clock, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Comprehensive Compliance',
    description: 'Get certified in multiple frameworks with our integrated compliance solutions.'
  },
  {
    icon: Lock,
    title: 'Enhanced Security',
    description: 'Protect your business with industry-leading security measures and best practices.'
  },
  {
    icon: Clock,
    title: 'Fast Implementation',
    description: 'Achieve compliance quickly with our streamlined certification process.'
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: 'Save time and money with our efficient compliance management solutions.'
  }
];

const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose ComplianceGuard?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We make compliance simple, efficient, and affordable for businesses of all sizes.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
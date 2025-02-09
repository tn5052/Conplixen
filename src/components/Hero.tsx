import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const certifications = [
  'ISO 27001', 'SOC 2', 'HIPAA', 'GDPR', 'PCI DSS', 'ISO 27701'
];

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Simplify Compliance.</span>
            <span className="block text-blue-600">Secure Your Business.</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Fast, hassle-free, and affordable compliance solutions for ISO 27001, SOC 2, HIPAA, GDPR, and more.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Get a Free Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <p className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Trusted Certifications
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
            {certifications.map((cert) => (
              <div key={cert} className="col-span-1 flex justify-center items-center">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-900 font-medium">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center space-x-6">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="ml-2 text-gray-600">ISO Certified</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="ml-2 text-gray-600">100% Success Rate</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="ml-2 text-gray-600">24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import React from 'react';

const features = [
  {
    title: "Expert Solutions",
    description: "We provide top-notch solutions tailored to meet your specific needs, ensuring maximum efficiency and effectiveness."
  },
  {
    title: "Customer-Centric Approach",
    description: "Our services are designed with the client in mind, ensuring a seamless experience from start to finish."
  },
  {
    title: "Innovative Technology",
    description: "We leverage cutting-edge technology to drive innovation and deliver high-quality results for your business."
  },
  {
    title: "24/7 Support",
    description: "Our team is available around the clock to assist you with any questions or issues you may encounter."
  },
  {
    title: "Affordable Pricing",
    description: "We offer competitive pricing without compromising on quality, ensuring value for your investment."
  },
  {
    title: "Modify elements",
    description: "We provide top-notch elements tailored to meet your specific needs, ensuring maximum efficiency and effectiveness."
  },
];

const Home3 = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home3;


import log1 from '../assets/IMAGES/Blog 3.jpg';
import log3 from '../assets/IMAGES/Blog 4.jpg';
import log4 from '../assets/IMAGES/Blog 5.jpg';
import log5 from '../assets/IMAGES/Blog 6.jpg';

const Services3 = () => {
  // Data array for services with links
  const servicesData = [
    {
      img: log1,
      title: 'Service One',
      description: 'This service helps with XYZ. Click the image to learn more.',
      url: 'https://example.com/service1', // Replace with your URL
    },
    {
      img: log3,
      title: 'Service Two',
      description: 'This service focuses on ABC. Click the image to discover more.',
      url: 'https://example.com/service2', // Replace with your URL
    },
    {
      img: log4,
      title: 'Service Three',
      description: 'This service is designed for DEF. Click the image for more info.',
      url: 'https://example.com/service3', // Replace with your URL
    },
    {
      img: log5,
      title: 'Service Four',
      description: 'This service provides GHI solutions. Click to learn more.',
      url: 'https://example.com/service4', // Replace with your URL
    },
  ];

  return (
    <div className="services3-container p-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Our Latest Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <div key={index} className="service-item bg-white border rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={() => window.open(service.url, '_blank')}>
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services3;

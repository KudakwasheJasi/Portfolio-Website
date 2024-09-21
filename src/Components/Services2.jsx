import slide1 from '../assets/IMAGES/services2 image1.jpg';
import slide2 from '../assets/IMAGES/services2 image2.jpg';
import slide3 from '../assets/IMAGES/services2 image3.jpg';
import slide4 from '../assets/IMAGES/services2 image4.jpg';
import slide5 from '../assets/IMAGES/services2 image5.jpg';
import slide6 from '../assets/IMAGES/services2 image6.jpg';

const Services2 = () => {
  // Data array for images with additional information
  const serviceData = [
    {
      img: slide1,
      title: 'Premium Car Maintenance',
      description: 'Keep your vehicle in top shape with our comprehensive maintenance services.',
    },
    {
      img: slide2,
      title: 'Vehicle Diagnostics',
      description: 'State-of-the-art diagnostic tools to ensure your car’s performance is optimal.',
    },
    {
      img: slide3,
      title: 'Tire Services',
      description: 'From tire rotations to replacements, we’ve got all your tire needs covered.',
    },
    {
      img: slide4,
      title: 'Car Wash and Detailing',
      description: 'Get your car sparkling clean with our thorough wash and detailing packages.',
    },
    {
      img: slide5,
      title: 'Engine Tune-Up',
      description: 'Ensure maximum efficiency and longevity with a complete engine tune-up.',
    },
    {
      img: slide6,
      title: 'Brake and Suspension Services',
      description: 'Stay safe on the road with our brake and suspension inspection and repair services.',
    },
  ];

  return (
    <div className="services2-container p-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
      <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceData.map((service, index) => (
          <div key={index} className="service-item bg-white border rounded-lg shadow-lg overflow-hidden">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover" // Set a fixed height for all images
            />
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

export default Services2;

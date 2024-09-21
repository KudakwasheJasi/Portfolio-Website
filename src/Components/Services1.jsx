import Slider from 'react-slick';  // Import the react-slick carousel component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic1 from '../assets/IMAGES/lab 1.jpg';
import pic2 from '../assets/IMAGES/lab 3.jpg';
import pic3 from '../assets/IMAGES/lab 6.jpg';
import pic4 from '../assets/IMAGES/home 1.jpg';
import pic5 from '../assets/IMAGES/blog 11.jpg';
import pic6 from '../assets/IMAGES/blog 12.jpg';

// Sample data for services
const Services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and scalable web applications using modern technologies like React, Tailwind CSS, and JavaScript.',
    imageUrl: pic1,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Designing intuitive and aesthetically pleasing user interfaces that provide an excellent user experience.',
    imageUrl: pic2,
  },
  {
    id: 3,
    title: 'Mobile Development',
    description: 'Creating mobile-responsive designs and applications that function seamlessly on different devices.',
    imageUrl: pic3,
  },
  {
    id: 4,
    title: 'SEO Optimization',
    description: 'Improving the visibility of websites by implementing search engine optimization strategies to increase traffic.',
    imageUrl: pic4,
  },
  {
    id: 5,
    title: 'Content Management',
    description: 'Managing content for blogs, portfolios, and e-commerce websites using content management systems like WordPress and custom-built solutions.',
    imageUrl: pic5,
  },
  {
    id: 6,
    title: 'E-commerce Development',
    description: 'Creating and managing online stores with integrated payment gateways, product catalogs, and user-friendly interfaces.',
    imageUrl: pic6,
  },
];

const Services1 = () => {
  // Settings for the react-slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="services-container p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">My Services</h1>
      <Slider {...settings}>
        {Services.map((service) => (
          <div key={service.id} className="p-4">
            <div className="service-item bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
              <div className="relative w-full h-64"> {/* Set a fixed height for all images */}
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover" // Use object-cover for uniformity
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services1;

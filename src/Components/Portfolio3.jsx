import React, { useState, useEffect } from 'react';

// Extended project data with more entries
const projectDetails = [
  {
    id: 1,
    title: 'Eco Project',
    description: 'A sustainable eco-friendly initiative.',
    technologies: ['React', 'Tailwind CSS', 'Node.js'],
    challenges: 'Reducing carbon footprints while scaling the platform.',
    features: 'Real-time monitoring, carbon footprint calculator, eco-friendly resources.',
    impact: 'Successfully raised awareness and helped reduce emissions for users by 20%.',
  },
  {
    id: 2,
    title: 'Nyamatusi Tourism Website',
    description: 'Showcasing the beauty of Zimbabwe’s Nyamatusi.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    challenges: 'Capturing the essence of the destination while maintaining fast load times.',
    features: 'Interactive map, gallery, and booking integration.',
    impact: 'Increased tourism inquiries by 30% after launch.',
  },
  {
    id: 3,
    title: 'Travela Tourism Website',
    description: 'A fully-fledged tourism website template.',
    technologies: ['React', 'Redux', 'Bootstrap'],
    challenges: 'Ensuring seamless booking functionality and user-friendly navigation.',
    features: 'Booking system, user accounts, dynamic tour packages.',
    impact: 'Deployed for multiple travel agencies, boosting their online presence.',
  },
  {
    id: 4,
    title: 'Flexbox Layout Project',
    description: 'A responsive layout built with Flexbox.',
    technologies: ['CSS', 'Flexbox'],
    challenges: 'Ensuring cross-browser compatibility and responsiveness.',
    features: 'Flexible grid layout, responsive design, dynamic alignment.',
    impact: 'Enhanced understanding of Flexbox in web design and improved mobile experience.',
  },
  {
    id: 5,
    title: 'Roots Agriculture Platform',
    description: 'Innovative farming solutions using root vegetables.',
    technologies: ['React', 'Firebase'],
    challenges: 'Integrating real-time data and optimizing performance.',
    features: 'Farm management, crop tracking, data analysis.',
    impact: 'Increased crop yield for participating farmers by 15%.',
  },
  {
    id: 6,
    title: 'Food Delivery App',
    description: 'An app for ordering and delivering food.',
    technologies: ['React Native', 'Express.js', 'MongoDB'],
    challenges: 'Handling multiple concurrent orders and delivery tracking.',
    features: 'Order tracking, real-time updates, in-app messaging.',
    impact: 'Reduced delivery times by 25%, increasing customer satisfaction.',
  },
  {
    id: 7,
    title: 'E-Commerce Platform',
    description: 'An online store for selling products.',
    technologies: ['Next.js', 'GraphQL', 'Stripe API'],
    challenges: 'Optimizing checkout flow and increasing conversion rates.',
    features: 'Dynamic product catalog, secure checkout, recommendation system.',
    impact: 'Increased online sales by 40% in the first quarter.',
  },
  {
    id: 8,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase projects.',
    technologies: ['React', 'Tailwind CSS'],
    challenges: 'Designing a clean and responsive interface.',
    features: 'Project showcase, interactive elements, resume download.',
    impact: 'Attracted new clients and job offers within the tech industry.',
  },
  {
    id: 9,
    title: 'Chat App',
    description: 'A real-time messaging application.',
    technologies: ['Socket.io', 'React', 'Node.js'],
    challenges: 'Ensuring low latency and secure communication.',
    features: 'Real-time messaging, private chat rooms, notifications.',
    impact: 'Improved team communication and project collaboration.',
  },
  {
    id: 10,
    title: 'AI Art Generator',
    description: 'A platform to generate art using AI.',
    technologies: ['Python', 'TensorFlow', 'Flask'],
    challenges: 'Training the model on large datasets and optimizing performance.',
    features: 'Image generation, art style selection, AI-driven design suggestions.',
    impact: 'Empowered artists to explore new creative possibilities.',
  },
];

const Portfolio3 = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // This effect changes the project every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectDetails.length);
    }, 2000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const currentProject = projectDetails[currentProjectIndex];

  return (
    <div className="portfolio3-container p-8 bg-gray-200">
      <h1 className="text-3xl font-bold text-center mb-8">Project Highlights</h1>

      {/* Render only the current project with smaller container and background color */}
      <div className="project-item border rounded-lg shadow-lg p-6 bg-white max-w-md mx-auto transition-opacity duration-1000 ease-in-out">
        <h2 className="text-xl font-semibold mb-2">{currentProject.title}</h2>
        <p className="text-gray-700">{currentProject.description}</p>
        <p className="mt-2"><strong>Technologies Used:</strong> {currentProject.technologies.join(', ')}</p>
        <p className="mt-2"><strong>Challenges:</strong> {currentProject.challenges}</p>
        <p className="mt-2"><strong>Key Features:</strong> {currentProject.features}</p>
        <p className="mt-2"><strong>Impact:</strong> {currentProject.impact}</p>
      </div>

      {/* Navigation dots for indicating the current project */}
      <div className="text-center mt-4">
        {projectDetails.map((_, index) => (
          <span
            key={index}
            className={`inline-block w-3 h-3 rounded-full mx-1 ${index === currentProjectIndex ? 'bg-blue-500' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Portfolio3;

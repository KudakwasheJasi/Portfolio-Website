import React, { useState } from 'react';

// Sample blog posts
const posts = [
  {
    title: "Understanding React Hooks",
    content: "A comprehensive guide on how to use hooks in your React applications.",
  },
  {
    title: "CSS Grid vs Flexbox",
    content: "Exploring the differences and use cases for CSS Grid and Flexbox.",
  },
  {
    title: "Building Responsive Websites",
    content: "Techniques and best practices for creating responsive designs.",
  },
];

const Blog2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  };

  return (
    <div className="blog-container p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Blog 2</h1>
      <p className="mb-4 text-center">
        In this blog, I share insights, experiences, and tips related to web development, technology trends, and my journey as a developer. 
      </p>

      <div className="carousel mb-6 bg-white p-6 rounded-lg shadow-md text-center">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h2 className="text-2xl font-semibold">{posts[currentIndex].title}</h2>
            <p className="mb-4">{posts[currentIndex].content}</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4"> {/* Added space between buttons */}
          <button onClick={handlePrev} className="bg-blue-500 text-white px-4 py-2 rounded-l">Previous</button>
          <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-r">Next</button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-center">What You Can Expect:</h2>
      <ul className="list-none mb-4 text-center"> {/* Added list-style: none */}
        <li className="mb-2">In-depth tutorials on various web technologies.</li>
        <li className="mb-2">Tips for improving your coding skills and efficiency.</li>
        <li className="mb-2">Insights into the latest trends in the tech industry.</li>
        <li className="mb-2">Personal experiences and lessons learned from my projects.</li>
      </ul>
      
      <div className="max-w-2xl mx-auto text-center mt-6">
        <p>
          I encourage you to join the conversation by leaving comments or sharing your thoughts on the topics discussed. Your feedback is invaluable and helps create a vibrant community of learners and creators.
        </p>
        <p className="mt-4">
          Stay tuned for upcoming posts and thank you for visiting Blog 2 on my portfolio website!
        </p>
      </div>
    </div>
  );
};

export default Blog2;

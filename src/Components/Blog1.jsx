
import blod from '../assets/IMAGES/Blog 1.jpg';
import blod1 from '../assets/IMAGES/Blog 4.jpg';
import blod2 from '../assets/IMAGES/Blog 6.jpg';
import blod3 from '../assets/IMAGES/Blog 2.jpg';
import blod4 from '../assets/IMAGES/Blog 5.jpg';
import blod5 from '../assets/IMAGES/Blog 8.jpg';


// Sample data for blogs
const blogs = [
  {
    id: 1,
    title: 'Exploring the Future of Web Development',
    description: 'A deep dive into modern web technologies and the trends shaping the future of web development.',
    imageUrl: blod,
    date: 'January 10, 2024',
  },
  {
    id: 2,
    title: 'UI/UX Design Best Practices for 2024',
    description: 'How to create user-friendly designs with the latest tools and techniques.',
    imageUrl: blod1,
    date: 'February 5, 2024',
  },
  {
    id: 3,
    title: 'Optimizing Websites for Mobile Devices',
    description: 'Techniques to ensure your website performs well on mobile devices.',
    imageUrl: blod2,
    date: 'March 12, 2024',
  },
  {
    id: 4,
    title: 'SEO Strategies for 2024: Staying Ahead of the Game',
    description: 'Tips on improving your site’s ranking on search engines using modern SEO techniques.',
    imageUrl: blod3,
    date: 'April 22, 2024',
  },
  {
    id: 5,
    title: 'Building Scalable Applications with React and Tailwind CSS',
    description: 'A guide to building applications that scale using React and Tailwind CSS.',
    imageUrl: blod4,
    date: 'May 15, 2024',
  },
  {
    id: 6,
    title: 'Content Creation for E-commerce: What Works',
    description: 'How to create compelling content that drives sales for your online store.',
    imageUrl: blod5,
    date: 'June 7, 2024',
  }
];

const Blog1 = () => {
  return (
    <div className="blog-container p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="blog-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item border rounded-lg p-4 shadow-lg">
            <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-700">{blog.description}</p>
            <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog1;

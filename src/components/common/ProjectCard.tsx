import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

const ProjectCard = ({ title, description, image, link, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-secondary-600 mb-4 line-clamp-3">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  batch?: string;
  linkedin?: string;
  email?: string;
  currentStatus?: string;
  index: number;
  isAlumni?: boolean;
}

const MemberCard = ({ 
  name, 
  role, 
  image, 
  batch, 
  linkedin, 
  email, 
  currentStatus,
  index,
  isAlumni = false
}: MemberCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-primary-600 text-sm mb-2">{role}</p>
        
        {batch && <p className="text-secondary-500 text-sm mb-2">Batch: {batch}</p>}
        
        {isAlumni && currentStatus && (
          <p className="text-secondary-600 text-sm mb-3">
            Currently: {currentStatus}
          </p>
        )}
        
        <div className="flex space-x-3 mt-3">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-500 hover:text-primary-600 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
          {email && (
            <a 
              href={`mailto:${email}`} 
              className="text-secondary-500 hover:text-primary-600 transition-colors"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;
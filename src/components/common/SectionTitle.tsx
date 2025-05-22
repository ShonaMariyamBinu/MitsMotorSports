import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold relative inline-block ${centered ? 'after:left-1/2 after:-translate-x-1/2' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
        <span className="absolute -bottom-3 left-0 h-1 w-12 bg-primary-600"></span>
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="mt-6 text-secondary-600 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
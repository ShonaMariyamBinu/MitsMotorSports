import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Aethon V4',
      description: 'Our flagship GoKart project designed for optimal performance and handling. Features a custom chassis, advanced suspension system, and efficient power delivery.',
      image: 'https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/projects/aethon'
    },
    {
      title: 'EBaja',
      description: 'An electric off-road vehicle designed to compete in the BAJA SAE competitions. Focuses on sustainability, performance, and innovative electric drivetrain solutions.',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/projects/ebaja'
    }
  ];

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container-custom">
        <SectionTitle 
          title="Our Projects"
          subtitle="We design and build innovative vehicles for various competitions. Each project involves extensive research, design, testing, and manufacturing phases."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary-700 mb-6">
            Our projects are the result of teamwork, innovation, and dedication from all our members.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import MemberCard from '../components/common/MemberCard';
import { ArrowLeft, Clock, Award, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AethonPage = () => {
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const teamMembers = [
    {
      name: 'Arjun Menon',
      role: 'Project Lead',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: 'https://linkedin.com',
      email: 'arjun@example.com'
    },
    {
      name: 'Priya Sharma',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: 'https://linkedin.com',
      email: 'priya@example.com'
    },
    {
      name: 'Rohan Desai',
      role: 'Mechanical Designer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: 'https://linkedin.com',
      email: 'rohan@example.com'
    },
  ];

  const specs = [
    { label: 'Engine', value: '125cc 4-stroke' },
    { label: 'Power', value: '15 HP' },
    { label: 'Weight', value: '165 kg' },
    { label: 'Top Speed', value: '80 km/h' },
    { label: 'Acceleration', value: '0-60 in 4.5s' },
    { label: 'Chassis', value: 'Tubular steel frame' },
    { label: 'Suspension', value: 'Double wishbone' },
    { label: 'Brakes', value: 'Hydraulic disc' },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center bg-secondary-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 to-secondary-900/80"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Aethon V4</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Our flagship GoKart project designed for optimal performance and handling on the track.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Aethon V4" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            
            <div>
              <SectionTitle 
                title="Project Overview"
                subtitle="Aethon V4 is our latest generation GoKart, designed and built to compete in national motorsport competitions. It represents the culmination of our team's engineering knowledge and experience."
              />
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mr-4 mt-1 p-2 bg-primary-50 rounded-md">
                    <Clock className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Development Time</h4>
                    <p className="text-sm text-secondary-600">8 months</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="mr-4 mt-1 p-2 bg-primary-50 rounded-md">
                    <Award className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Achievements</h4>
                    <p className="text-sm text-secondary-600">2nd in National Finals</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="mr-4 mt-1 p-2 bg-primary-50 rounded-md">
                    <Users className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Team Size</h4>
                    <p className="text-sm text-secondary-600">15 members</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="mr-4 mt-1 p-2 bg-primary-50 rounded-md">
                    <BarChart className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Performance</h4>
                    <p className="text-sm text-secondary-600">Top-tier in class</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Specifications */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <SectionTitle 
            title="Technical Specifications"
            subtitle="Aethon V4 is equipped with cutting-edge components and technologies to ensure optimal performance on the track."
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h4 className="text-sm font-medium text-secondary-500 mb-1">{spec.label}</h4>
                <p className="text-lg font-semibold">{spec.value}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Design Highlights</h3>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Custom-designed tubular space frame chassis for optimal rigidity and low weight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Double wishbone suspension system with adjustable dampers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Hydraulic disc brakes for reliable stopping power</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Custom-tuned exhaust system for optimized power delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Ergonomic driver-focused cockpit design</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Performance Features</h3>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Optimized weight distribution for superior handling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Advanced aerodynamic package for increased downforce</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Customizable gear ratios for different track conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Data acquisition system for real-time performance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Specially developed racing tires for maximum grip</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Project Gallery"
            subtitle="Follow the journey of Aethon V4 from design to competition."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              className="md:col-span-2 rounded-lg overflow-hidden shadow-md h-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Aethon on Track" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              className="rounded-lg overflow-hidden shadow-md h-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Working" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              className="rounded-lg overflow-hidden shadow-md h-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3787179/pexels-photo-3787179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Design Phase" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              className="md:col-span-1 rounded-lg overflow-hidden shadow-md h-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/1571730/pexels-photo-1571730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Engine Detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <SectionTitle 
            title="Project Team"
            subtitle="Meet the talented individuals behind the Aethon V4 project."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                linkedin={member.linkedin}
                email={member.email}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AethonPage;
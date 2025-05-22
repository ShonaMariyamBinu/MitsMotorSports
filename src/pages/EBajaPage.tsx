import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import MemberCard from '../components/common/MemberCard';
import { ArrowLeft, Battery, Zap, Truck, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const EBajaPage = () => {
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
      name: 'Divya Patel',
      role: 'Project Lead',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: 'https://linkedin.com',
      email: 'divya@example.com'
    },
    {
      name: 'Karthik Iyer',
      role: 'Electrical Lead',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: 'https://linkedin.com',
      email: 'karthik@example.com'
    },
    {
      name: 'Leela Verma',
      role: 'Mechanical Engineer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: 'https://linkedin.com',
      email: 'leela@example.com'
    },
  ];

  const specs = [
    { label: 'Motor', value: '10 kW BLDC' },
    { label: 'Battery', value: '48V 100Ah Li-ion' },
    { label: 'Weight', value: '190 kg' },
    { label: 'Top Speed', value: '60 km/h' },
    { label: 'Range', value: '100 km' },
    { label: 'Chassis', value: 'Lightweight aluminum' },
    { label: 'Suspension', value: 'Long-travel off-road' },
    { label: 'Brakes', value: 'Regenerative + Disc' },
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
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-40"></div>
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
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">EBaja</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Our electric off-road vehicle designed to compete in the BAJA SAE competitions with a focus on sustainability and performance.
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
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="EBaja" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            
            <div>
              <SectionTitle 
                title="Project Overview"
                subtitle="EBaja is our innovative electric off-road vehicle designed to compete in the challenging BAJA SAE competitions. It represents our commitment to sustainable engineering and high-performance electric mobility."
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
                    <Battery className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Battery Life</h4>
                    <p className="text-sm text-secondary-600">4 hours continuous</p>
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
                    <Zap className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Power Output</h4>
                    <p className="text-sm text-secondary-600">10 kW peak</p>
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
                    <Truck className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Terrain Capability</h4>
                    <p className="text-sm text-secondary-600">All-terrain</p>
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
                    <Settings className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Development Phase</h4>
                    <p className="text-sm text-secondary-600">Testing & Optimization</p>
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
            subtitle="EBaja is equipped with advanced electric powertrain technology and rugged off-road components."
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
                <h3 className="text-2xl font-semibold mb-4">Electric Powertrain</h3>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Custom-designed high-efficiency BLDC motor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Advanced motor controller with regenerative braking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>High-capacity lithium-ion battery pack with thermal management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Sophisticated battery management system (BMS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Multiple drive modes for different terrain conditions</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Off-Road Capabilities</h3>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Long-travel suspension for rough terrain absorption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>High ground clearance for obstacle navigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>All-terrain tires with optimized tread pattern</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Water-resistant electrical components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                    <span>Reinforced chassis design for durability</span>
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
            subtitle="See EBaja in action across various development stages and competitions."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              className="rounded-lg overflow-hidden shadow-md h-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="EBaja Design" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              className="md:col-span-2 rounded-lg overflow-hidden shadow-md h-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="EBaja Testing" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              className="md:col-span-2 rounded-lg overflow-hidden shadow-md h-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/163444/pexels-photo-163444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Working" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              className="rounded-lg overflow-hidden shadow-md h-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Components" 
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
            subtitle="Meet the skilled engineers behind the EBaja project."
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

export default EBajaPage;
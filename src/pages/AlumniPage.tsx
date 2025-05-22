import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import MemberCard from '../components/common/MemberCard';

const AlumniPage = () => {
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

  const alumni = [
    {
      name: 'Ajay Nair',
      role: 'Former Team Captain',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      batch: '2018-2022',
      linkedin: 'https://linkedin.com',
      email: 'ajay@example.com',
      currentStatus: 'Design Engineer at Tesla'
    },
    {
      name: 'Sneha Verma',
      role: 'Former Technical Lead',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      batch: '2017-2021',
      linkedin: 'https://linkedin.com',
      email: 'sneha@example.com',
      currentStatus: 'Graduate Student at MIT'
    },
    {
      name: 'Vikram Singh',
      role: 'Former Mechanical Engineer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      batch: '2018-2022',
      linkedin: 'https://linkedin.com',
      email: 'vikram@example.com',
      currentStatus: 'Engineer at Mahindra Racing'
    },
    {
      name: 'Meera Kumar',
      role: 'Former Electrical Lead',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      batch: '2016-2020',
      linkedin: 'https://linkedin.com',
      email: 'meera@example.com',
      currentStatus: 'Systems Engineer at Tata Motors'
    },
    {
      name: 'Raj Patel',
      role: 'Former Design Engineer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      batch: '2017-2021',
      linkedin: 'https://linkedin.com',
      email: 'raj@example.com',
      currentStatus: 'CAD Designer at Honda'
    },
    {
      name: 'Aisha Khan',
      role: 'Former Software Engineer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      batch: '2018-2022',
      linkedin: 'https://linkedin.com',
      email: 'aisha@example.com',
      currentStatus: 'Software Developer at Bosch'
    },
    {
      name: 'Ravi Menon',
      role: 'Former Team Manager',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      batch: '2016-2020',
      linkedin: 'https://linkedin.com',
      email: 'ravi@example.com',
      currentStatus: 'Project Manager at Royal Enfield'
    },
    {
      name: 'Deepa Sharma',
      role: 'Former Fabrication Lead',
      image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      batch: '2017-2021',
      linkedin: 'https://linkedin.com',
      email: 'deepa@example.com',
      currentStatus: 'Manufacturing Engineer at Bajaj Auto'
    }
  ];

  const currentMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Team Captain',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      batch: '2020-2024',
      linkedin: 'https://linkedin.com',
      email: 'rajesh@example.com'
    },
    {
      name: 'Priya Sharma',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      batch: '2020-2024',
      linkedin: 'https://linkedin.com',
      email: 'priya@example.com'
    },
    {
      name: 'Arjun Menon',
      role: 'Mechanical Engineer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      batch: '2021-2025',
      linkedin: 'https://linkedin.com',
      email: 'arjun@example.com'
    },
    {
      name: 'Divya Patel',
      role: 'Electrical Engineer',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      batch: '2021-2025',
      linkedin: 'https://linkedin.com',
      email: 'divya@example.com'
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center bg-secondary-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 to-secondary-900/80"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team & Alumni</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Meet the talented individuals who have contributed to the success of MITS Motorsports over the years.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Current Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Current Team"
            subtitle="Our current roster of dedicated engineering students leading MITS Motorsports projects."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {currentMembers.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                batch={member.batch}
                linkedin={member.linkedin}
                email={member.email}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Alumni */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Alumni"
            subtitle="Former members who have contributed significantly to MITS Motorsports and are now pursuing their careers in various industries."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {alumni.map((alumnus, index) => (
              <MemberCard
                key={index}
                name={alumnus.name}
                role={alumnus.role}
                image={alumnus.image}
                batch={alumnus.batch}
                linkedin={alumnus.linkedin}
                email={alumnus.email}
                currentStatus={alumnus.currentStatus}
                index={index}
                isAlumni={true}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
              <p className="text-lg text-secondary-700 mb-8">
                We're always looking for passionate and dedicated students to join our team. If you're interested in automotive engineering, design, or any related field, we'd love to hear from you.
              </p>
              <a href="#" className="btn btn-primary">
                Apply Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AlumniPage;
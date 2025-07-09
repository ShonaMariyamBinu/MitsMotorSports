import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import MemberCard from '../common/MemberCard';
import ClubAdvisor from '../../assets/NIKHIL_M_THOPPIL_.jpg'; // Adjust path based on your folder depth

const teamMembers = [
  {
    name: 'Nikhil M Thoppil',
    role: 'Club Advisor',
    image: ClubAdvisor,
    linkedin: 'https://linkedin.com',
    email: 'rajesh@example.com',
  },
  {
    name: 'Priya Sharma',
    role: 'Club Lead',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedin: 'https://linkedin.com',
    email: 'priya@example.com',
  },
  {
    name: 'Arjun Menon',
    role: 'Co Lead',
    image:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedin: 'https://linkedin.com',
    email: 'arjun@example.com',
  },
  {
    name: 'Divya Patel',
    role: 'Treasurer',
    image:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedin: 'https://linkedin.com',
    email: 'divya@example.com',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Team = () => {
  return (
    <motion.section
      className="pt-20 pb-35"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 bg-gradient-to-r from-red-900 via-black to-red-900 rounded-xl shadow-2xl overflow-hidden min-h-[700px] pt-20">
        <div className="pt-3">
          <SectionTitle
            title="Club Leads"
            subtitle="Our success is built on the dedication and expertise of our talented team leads."
            centered
            titleClassName="text-white"
            subtitleClassName="text-gray-300"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
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

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
         {/*} {<a href="/alumni" className="btn btn-primary">
            View All Members & Alumni
          </a>}*/}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Team;

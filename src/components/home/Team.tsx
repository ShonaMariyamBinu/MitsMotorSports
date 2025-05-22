import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import MemberCard from '../common/MemberCard';

const Team = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Team Captain',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: 'https://linkedin.com',
      email: 'rajesh@example.com'
    },
    {
      name: 'Priya Sharma',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: 'https://linkedin.com',
      email: 'priya@example.com'
    },
    {
      name: 'Arjun Menon',
      role: 'Mechanical Engineer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: 'https://linkedin.com',
      email: 'arjun@example.com'
    },
    {
      name: 'Divya Patel',
      role: 'Electrical Engineer',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: 'https://linkedin.com',
      email: 'divya@example.com'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Meet Our Team"
          subtitle="Our success is built on the dedication and expertise of our talented team members."
          centered
        />
        
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
          <a href="/alumni" className="btn btn-primary">
            View All Members & Alumni
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
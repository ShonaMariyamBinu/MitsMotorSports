import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { Award, Users, Target, Wrench } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-primary-600" />,
      title: 'Award-Winning Team',
      description: 'Multiple national awards for engineering excellence and innovation in motorsports.'
    },
    {
      icon: <Users className="h-6 w-6 text-primary-600" />,
      title: 'Diverse Expertise',
      description: 'Team members specializing in mechanical, electrical, and software engineering.'
    },
    {
      icon: <Target className="h-6 w-6 text-primary-600" />,
      title: 'Competitive Spirit',
      description: 'Participating in prestigious competitions across the country and internationally.'
    },
    {
      icon: <Wrench className="h-6 w-6 text-primary-600" />,
      title: 'Hands-on Learning',
      description: 'Practical experience in designing, building, and testing real-world vehicles.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="About MITS Motorsports"
          subtitle="MITS Motorsports is a student-run organization that designs, builds, and races vehicles for various competitions. Our team is composed of passionate engineering students who are dedicated to applying theoretical knowledge to practical challenges."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.pexels.com/photos/39501/lamborghini-brno-racing-car-39501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="MITS Motorsports Team" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-secondary-700">
                To provide students with hands-on experience in automotive engineering and create innovative solutions that push the boundaries of motorsport technology. We aim to nurture the next generation of engineering talent through practical application of classroom knowledge.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mr-4 mt-1 p-2 bg-primary-50 rounded-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-secondary-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
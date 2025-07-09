import { motion } from 'framer-motion';
import { Award, Users, Target, Wrench } from 'lucide-react';
import AboutBg from '../../assets/bg.png';

const bgFadeInVariant = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const features = [
  {
    icon: <Award className="h-6 w-6 text-red-600" />,
    title: 'Award-Winning Team',
    description: 'Multiple national awards for engineering excellence and innovation in motorsports.'
  },
  {
    icon: <Users className="h-6 w-6 text-red-600" />,
    title: 'Diverse Expertise',
    description: 'Team members specializing in mechanical, electrical, and computer science engineering.'
  },
  {
    icon: <Target className="h-6 w-6 text-red-600" />,
    title: 'Competitive Spirit',
    description: 'Participating in prestigious competitions across the country.'
  },
  {
    icon: <Wrench className="h-6 w-6 text-red-600" />,
    title: 'Hands-on Learning',
    description: 'Practical experience in designing, building, and testing real-world vehicles.'
  }
];



const About = () => {
  return (
    <section className="relative py-20 overflow-hidden rounded-xl shadow-2xl mx-auto max-w-7xl px-6 md:px-12">
      {/* Background Image with zoom + radial fade mask */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 rounded-xl"
        variants={bgFadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          backgroundImage: `url(${AboutBg})`,
          maskImage:
            'radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)',
          filter: 'blur(0.5px) brightness(0.85)',
          transformOrigin: 'center',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-black to-black opacity-75 z-10 rounded-xl" />

      {/* Foreground Content */}
      <div className="relative z-20 text-white">
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
          About MITS Motorsports
        </h2>
        <p className="text-gray-300 text-xl leading-relaxed drop-shadow-sm mb-10">
          MITS Motorsports is a student-run organization that designs, builds, and races vehicles for various competitions. Our team is composed of passionate engineering students dedicated to applying theoretical knowledge to practical challenges.
        </p>

        <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
        <p className="text-gray-300 text-xl leading-relaxed mb-8">
          To provide students with hands-on experience in automotive engineering and create innovative solutions that push the boundaries of motorsport technology. We aim to nurture the next generation of engineering talent through practical application of classroom knowledge.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start bg-black bg-opacity-40 rounded-xl p-5 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mr-4">{feature.icon}</div>
              <div>
                <h4 className="text-xl font-semibold mb-1 text-white">{feature.title}</h4>
                <p className="text-lg text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

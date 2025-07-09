import { Award, Users, Target, Wrench, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import ClubLogo from '../assets/faviconLogo (1).png';
import ClubAdvisor from '../assets/NIKHIL_M_THOPPIL_.jpg';

const About = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-[#7f1d1d]" />,
      title: 'Award-Winning Team',
      description: 'Multiple national awards for engineering excellence and innovation in motorsports.'
    },
    {
      icon: <Users className="h-6 w-6 text-[#7f1d1d]" />,
      title: 'Diverse Expertise',
      description: 'Team members specializing in mechanical, electrical, and computer science engineering.'
    },
    {
      icon: <Target className="h-6 w-6 text-[#7f1d1d]" />,
      title: 'Competitive Spirit',
      description: 'Participating in prestigious competitions across the country.'
    },
    {
      icon: <Wrench className="h-6 w-6 text-[#7f1d1d]" />,
      title: 'Hands-on Learning',
      description: 'Practical experience in designing, building, and testing real-world vehicles.'
    }
  ];

  const clubLeads = [
    {
      name: 'Nikhil M Thoppil',
      role: 'Club Advisor',
      image: ClubAdvisor,
      email: 'nikhilmthoppil@mgits.ac.in'
    },
    {
      name: '',
      role: 'Club Lead',
      image: '',
      email: ''
    },
    {
      name: '',
      role: 'Co-Lead',
      image: '',
      email: ''
    },
    {
      name: '',
      role: 'Treasurer',
      image: '',
      email: ''
    }
  ];

  // Animation variants for headings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        duration: 0.4
      }
    }
  };

  return (
    <>
      <style>
        {`
          .alumni-card {
            background-color: rgb(0, 0, 0);
            border: 1.5px solid #7f1d1d;
            border-radius: 12px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
            padding: 1rem;
            width: 220px;
            flex-shrink: 0;
            transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
            cursor: default;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .alumni-card:hover {
            border-color: #b91c1c;
            box-shadow: 0 0 14px #b91c1c;
            transform: translateY(-6px);
          }
          .alumni-image {
            width: 190px;
            height: 190px;
            border-radius: 10px;
            object-fit: cover;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
            margin-bottom: 0.75rem;
            border: 2px solid #2a2a2a;
            transition: border-color 0.3s ease;
          }
          .alumni-card:hover .alumni-image {
            border-color: #b91c1c;
            box-shadow: 0 0 15px #b91c1c;
          }
          .alumni-name {
            color: #eee;
            font-weight: 600;
            font-size: 1.15rem;
            text-align: center;
            position: relative;
          }
          .alumni-name::after {
            content: "";
            display: block;
            width: 40px;
            height: 3px;
            margin: 6px auto 0;
            background: #b91c1c;
            border-radius: 2px;
            opacity: 0.7;
            box-shadow: 0 0 6px #b91c1c;
          }
          .container-custom {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
          }
        `}
      </style>
      <div className="bg-black text-white min-h-screen overflow-x-hidden relative font-['Poppins']">
        {/* Geometric Background Pattern */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-80 h-80 border-2 border-[#7f1d1d]/50 rotate-45 rounded-3xl"></div>
          <div className="absolute top-20 right-20 w-96 h-96 border-2 border-[#7f1d1d]/45 rotate-12 rounded-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 border-2 border-[#7f1d1d]/55 -rotate-12 rounded-xl"></div>
          <div className="absolute bottom-40 right-1/3 w-88 h-88 border-2 border-[#7f1d1d]/50 rotate-45 rounded-2xl"></div>
          <div className="absolute top-1/3 left-1/2 w-64 h-64 border-2 border-[#7f1d1d]/45 rotate-30 rounded-lg"></div>
          <div className="absolute top-60 right-1/4 w-56 h-56 border-2 border-[#7f1d1d]/50 -rotate-45 rounded-xl"></div>
          <div className="absolute bottom-1/3 left-20 w-68 h-68 border-2 border-[#7f1d1d]/45 rotate-12 rounded-2xl"></div>
          <div className="absolute top-40 left-1/3 w-52 h-52 border-2 border-[#7f1d1d]/50 -rotate-30 rounded-lg"></div>
          <div className="absolute top-80 left-1/3 w-32 h-32 border-2 border-[#7f1d1d]/60 rotate-45 rounded-lg"></div>
          <div className="absolute top-1/4 right-40 w-40 h-40 border-2 border-[#7f1d1d]/55 -rotate-30 rounded-xl"></div>
          <div className="absolute bottom-60 right-10 w-36 h-36 border-2 border-[#7f1d1d]/50 rotate-60 rounded-lg"></div>
          <div className="absolute top-96 left-20 w-28 h-28 border-2 border-[#7f1d1d]/55 rotate-15 rounded-md"></div>
          <div className="absolute top-32 right-1/2 w-44 h-44 border-2 border-[#7f1d1d]/45 rotate-75 rounded-xl"></div>
          <div className="absolute bottom-80 left-1/2 w-48 h-48 border-2 border-[#7f1d1d]/50 -rotate-20 rounded-lg"></div>
          <div className="absolute top-1/2 right-20 w-60 h-60 border-2 border-[#7f1d1d]/45 rotate-50 rounded-2xl"></div>
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/35 to-transparent rotate-12"></div>
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/40 to-transparent -rotate-12"></div>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/30 to-transparent rotate-6"></div>
          <div className="absolute top-0 right-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/35 to-transparent -rotate-8"></div>
          <div className="absolute top-32 left-1/2 w-4 h-4 bg-[#7f1d1d]/70 rounded-full"></div>
          <div className="absolute top-96 right-1/4 w-5 h-5 bg-[#7f1d1d]/60 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-[#7f1d1d]/65 rounded-full"></div>
          <div className="absolute bottom-80 right-1/2 w-4 h-4 bg-[#7f1d1d]/70 rounded-full"></div>
          <div className="absolute top-64 left-20 w-3 h-3 bg-[#7f1d1d]/60 rounded-full"></div>
          <div className="absolute bottom-96 right-40 w-5 h-5 bg-[#7f1d1d]/65 rounded-full"></div>
          <div className="absolute top-20 left-1/2 w-24 h-2 bg-[#7f1d1d]/50 rotate-45"></div>
          <div className="absolute bottom-40 right-1/4 w-32 h-2 bg-[#7f1d1d]/45 -rotate-30"></div>
          <div className="absolute top-1/2 left-10 w-28 h-2 bg-[#7f1d1d]/50 rotate-60"></div>
          <div className="absolute bottom-20 left-1/2 w-20 h-2 bg-[#7f1d1d]/45 -rotate-45"></div>
          <div className="absolute top-5 left-5 w-16 h-16 border-2 border-[#7f1d1d]/60 rotate-45"></div>
          <div className="absolute top-5 right-5 w-20 h-20 border-2 border-[#7f1d1d]/55 -rotate-30"></div>
          <div className="absolute bottom-5 left-5 w-18 h-18 border-2 border-[#7f1d1d]/60 rotate-60"></div>
          <div className="absolute bottom-5 right-5 w-22 h-22 border-2 border-[#7f1d1d]/55 -rotate-15"></div>
          <div className="absolute top-1/4 left-10 w-36 h-36 border-2 border-[#7f1d1d]/40 rotate-25 rounded-lg"></div>
          <div className="absolute bottom-1/4 right-10 w-42 h-42 border-2 border-[#7f1d1d]/45 -rotate-35 rounded-xl"></div>
          <div className="absolute top-3/4 left-1/3 w-38 h-38 border-2 border-[#7f1d1d]/40 rotate-55 rounded-md"></div>
          <div className="absolute bottom-1/2 right-1/3 w-34 h-34 border-2 border-[#7f1d1d]/45 -rotate-25 rounded-lg"></div>
          <div className="absolute top-1/3 left-0 w-1 h-2/3 bg-gradient-to-b from-transparent via-[#7f1d1d]/25 to-transparent rotate-15"></div>
          <div className="absolute bottom-1/3 right-0 w-1 h-2/3 bg-gradient-to-t from-transparent via-[#7f1d1d]/30 to-transparent -rotate-15"></div>
          <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-[#7f1d1d]/50 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-[#7f1d1d]/55 rounded-full"></div>
          <div className="absolute top-2/3 left-3/4 w-5 h-5 bg-[#7f1d1d]/50 rounded-full"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-20 min-h-screen flex items-center justify-center">
          <div className="text-center px-6">
            <motion.h1
              className="mt-20 text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {Array.from("ABOUT US").map((char, idx) => (
                <motion.span
                  key={`${char}-${idx}`}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#7f1d1d] to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg mb-8">
              Discover the passion, innovation, and excellence that drives MITS Motorsports
            </p>
            <div className="flex justify-center items-center py-10">
              <img
                src={ClubLogo}
                alt="Club Logo"
                className="w-60 h-60 object-contain"
              />
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="relative z-20 py-5 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* About Section */}
            <div className="mb-20">
              <motion.h2
                className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-white drop-shadow-lg"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                {Array.from("About MITS Motorsports").map((char, idx) => (
                  <motion.span
                    key={`${char}-${idx}`}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h2>
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#7f1d1d]/30">
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
                  MITS Motorsports is a student-run organization that designs, builds, and races vehicles for various competitions. Our team is composed of passionate engineering students dedicated to applying theoretical knowledge to practical challenges.
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">Our Mission</h3>
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-12">
                  To provide students with hands-on experience in automotive engineering and create innovative solutions that push the boundaries of motorsport technology. We aim to nurture the next generation of engineering talent through practical application of classroom knowledge.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-black/40 rounded-xl p-6 border border-[#7f1d1d]/20 hover:border-[#7f1d1d]/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="mr-4 p-2 bg-[#7f1d1d]/20 rounded-lg">{feature.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                        <p className="text-gray-200">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Club Leads Section */}
            <div className="mb-20">
              <motion.h2
                className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-white drop-shadow-lg"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                {Array.from("Club Leads").map((char, idx) => (
                  <motion.span
                    key={`${char}-${idx}`}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {clubLeads.map((member, index) => (
                  <div
                    key={index}
                    className="alumni-card"
                    title={member.name}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="alumni-image"
                      loading="lazy"
                    />
                    <span className="alumni-name">{member.name}</span>
                    <p className="text-white text-xs font-bold uppercase tracking-widest mt-1">
                      {member.role}
                    </p>
                    <div className="flex justify-center mt-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-full border-2 border-[#7f1d1d] hover:border-[#b91c1c] hover:shadow-[0_0_14px_#b91c1c] transition-all duration-300"
                      >
                        <Mail className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
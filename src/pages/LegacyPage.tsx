import React from 'react';

const LegacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Image */}
      <div className="mb-8">
        <img
          src="/images/legacy-hero.jpg"
          alt="MITS Motorsports Legacy"
          className="w-full h-64 object-cover rounded-lg shadow-md md:h-96"
        />
      </div>

      {/* Heading */}
      <h1
        className="text-4xl font-bold text-[#7f1d1d] mb-6"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Our Legacy
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-6">
        MITS Motorsports has a rich history of innovation and excellence in automotive engineering. For over a decade, our team has pushed the boundaries of technology, building vehicles that have competed on national and international stages. Our legacy is built on dedication, teamwork, and a passion for engineering excellence.
      </p>

      {/* Achievements Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-grey p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#7f1d1d] mb-2">Past Achievements</h2>
          <p className="text-gray-600">
            From winning national competitions like Formula Bharat to achieving top ranks in international events, our past projects have set benchmarks in the industry. Our vehicles have been recognized for their innovative design and performance.
          </p>
        </div>
        <div className="bg-grey p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#7f1d1d] mb-2">Milestones</h2>
          <p className="text-gray-600">
            Key moments in our journey include the launch of iconic vehicles like Aethon V4 and EBaja, which showcased cutting-edge technology and engineering prowess.
          </p>
        </div>
      </div>

      {/* History Timeline */}
      <div className="mb-8">
        <h2
          className="text-3xl font-bold text-[#7f1d1d] mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Our History
        </h2>
        <div className="space-y-6">
          <div className="bg-grey p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">2010: Founding of MITS Motorsports</h3>
            <p className="text-gray-600">
              MITS Motorsports was established with a vision to innovate in the field of automotive engineering, starting with our first prototype vehicle.
            </p>
          </div>
          <div className="bg-grey p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">2015: First National Win</h3>
            <p className="text-gray-600">
              Our team secured its first major victory in a national competition, marking a significant milestone in our journey.
            </p>
          </div>
          <div className="bg-grey p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">2020: International Recognition</h3>
            <p className="text-gray-600">
              MITS Motorsports gained international acclaim for the Aethon V4, competing against top teams worldwide.
            </p>
          </div>
          <div className="bg-grey p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">2025: Continued Innovation</h3>
            <p className="text-gray-600">
              As of today, July 9, 2025, we continue to innovate with projects like EBaja, pushing the limits of electric vehicle technology.
            </p>
          </div>
        </div>
      </div>

      {/* Team Legacy */}
      <div>
        <h2
          className="text-3xl font-bold text-[#7f1d1d] mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Team Legacy
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our alumni have gone on to lead in the automotive industry, carrying forward the skills and passion developed at MITS Motorsports. Their contributions continue to inspire our current team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-grey p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">Innovative Designs</h3>
            <p className="text-gray-600">
              Our team has pioneered lightweight chassis designs and advanced aerodynamics, setting industry standards.
            </p>
          </div>
          <div className="bg-grey p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">Collaborative Spirit</h3>
            <p className="text-gray-600">
              Collaboration across disciplines has been key to our success, fostering a culture of innovation and teamwork.
            </p>
          </div>
          <div className="bg-grey p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">Sustainable Engineering</h3>
            <p className="text-gray-600">
              Recent projects focus on sustainability, with electric and hybrid vehicles leading the way in eco-friendly design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacyPage;
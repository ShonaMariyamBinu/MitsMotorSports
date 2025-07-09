import React from 'react';

const AlumniPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Image */}
      <div className="mb-8">
        <img
          src="/images/alumni-hero.jpg"
          alt="MITS Motorsports Alumni"
          className="w-full h-64 object-cover rounded-lg shadow-md md:h-96"
        />
      </div>

      {/* Heading */}
      <h1
        className="text-4xl font-bold text-[#7f1d1d] mb-6"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Our Alumni
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-6">
        The alumni of MITS Motorsports have made significant contributions to the automotive industry and beyond. Their work on groundbreaking projects like Aethon and EBaja has left a lasting impact, and they continue to inspire current team members with their achievements and expertise.
      </p>

      {/* Notable Alumni Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#7f1d1d] mb-2">Industry Leaders</h2>
          <p className="text-gray-600">
            Many of our alumni have gone on to hold leadership positions in top automotive companies, driving innovation in vehicle design and technology.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#7f1d1d] mb-2">Entrepreneurs</h2>
          <p className="text-gray-600">
            Several alumni have founded successful startups, leveraging their experience from MITS Motorsports to create cutting-edge solutions.
          </p>
        </div>
      </div>

      {/* Alumni Stories */}
      <div className="mb-8">
        <h2
          className="text-3xl font-bold text-[#7f1d1d] mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Alumni Stories
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">Jane Doe (2015)</h3>
            <p className="text-gray-600">
              As a lead engineer on the Aethon project, Jane now heads the R&D department at a global automotive firm, focusing on electric vehicle technology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">John Smith (2018)</h3>
            <p className="text-gray-600">
              John founded a startup specializing in autonomous driving systems, inspired by his work on EBaja’s control systems.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">Priya Sharma (2020)</h3>
            <p className="text-gray-600">
              Priya contributed to the aerodynamics of Aethon V4 and now works as a consultant for sustainable engineering solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">Rahul Patel (2023)</h3>
            <p className="text-gray-600">
              Rahul led the EBaja team to a national championship and is currently pursuing a PhD in automotive engineering.
            </p>
          </div>
        </div>
      </div>

      {/* Contributions to MITS */}
      <div>
        <h2
          className="text-3xl font-bold text-[#7f1d1d] mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Contributions to MITS Motorsports
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our alumni continue to support MITS Motorsports through mentorship, sponsorships, and guest lectures, helping shape the next generation of engineers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">Mentorship Programs</h3>
            <p className="text-gray-600">
              Alumni provide guidance to current team members, sharing industry insights and technical expertise.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">Sponsorships</h3>
            <p className="text-gray-600">
              Many alumni contribute resources and funding to support our ongoing projects and competitions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#7f1d1d] mb-2">Guest Lectures</h3>
            <p className="text-gray-600">
              Alumni frequently return to share their experiences and inspire students through workshops and talks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
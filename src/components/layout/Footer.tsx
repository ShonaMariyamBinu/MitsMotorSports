import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://images.pexels.com/photos/5119838/pexels-photo-5119838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="MITS Motorsports Logo" 
                className="h-12 w-auto mr-3"
              />
              <span className="font-bold text-2xl text-white">MITS Motorsports</span>
            </div>
            <p className="text-secondary-300 mb-6">
              Building innovation through engineering excellence. MITS Motorsports is dedicated to pushing the boundaries of automotive design and performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/projects/aethon" className="text-secondary-300 hover:text-white transition-colors">Aethon V4</Link>
              </li>
              <li>
                <Link to="/projects/ebaja" className="text-secondary-300 hover:text-white transition-colors">EBaja</Link>
              </li>
              <li>
                <Link to="/alumni" className="text-secondary-300 hover:text-white transition-colors">Alumni</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-300">
                  MITS Engineering College Campus, Kochi, Kerala, India
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary-500 flex-shrink-0" />
                <a href="mailto:info@mitsmotorsports.edu" className="text-secondary-300 hover:text-white transition-colors">
                  info@mitsmotorsports.edu
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-secondary-300 hover:text-white transition-colors">
                  +91 987 654 3210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} MITS Motorsports. All rights reserved.
            </p>
            <div className="text-secondary-400 text-sm">
              <a href="#" className="hover:text-white transition-colors mr-6">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
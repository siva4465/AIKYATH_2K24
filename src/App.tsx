import React, { useState } from 'react';
import { Calendar, MapPin, PartyPopper, Mail, Instagram, Facebook, Twitter, ChevronDown, ChevronUp } from 'lucide-react';
import EventCard from './components/EventCard';
import { events } from './data/events';
import RegisterModal from './components/RegisterModal';
import ScrollButton from './components/ScrollButton';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const RegisterButton = () => (
    <button 
      onClick={() => setIsModalOpen(true)}
      className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity active:scale-95 transform mx-auto md:mx-0"
    >
      Register Now
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-6 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            AIKYATH 2K24
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
              Swarnandhra College of Engineering and Technology
            </span>
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl mb-8">
            Organized by{' '}
            <span className="text-purple-400 font-semibold">MCA</span>
            {' '}&{' '}
            <span className="text-pink-400 font-semibold">BCA</span>
            {' '}Departments
          </h3>
          
          {/* Mobile View */}
          <div className="flex flex-col items-center gap-4 md:hidden mb-8">
            <div className="flex flex-col items-center">
              <Calendar className="w-6 h-6 mb-2" />
              <span>November 21-23, 2024</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 mb-2" />
              <span>College Campus</span>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-center gap-4 text-xl md:text-2xl mb-8">
            <Calendar className="w-6 h-6" />
            <span>November 21-23, 2024</span>
            <MapPin className="w-6 h-6 ml-4" />
            <span>College Campus</span>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-8">
            Join us for three days of excitement, creativity, and celebration at the biggest college fest of the year!
          </p>

          <div className="flex justify-center">
            <RegisterButton />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 space-y-4">
          <PartyPopper className="w-8 h-8 animate-bounce" />
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </div>
      </header>

      {/* Events Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Featured Events
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          <div className="flex justify-center">
            <RegisterButton />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <div className="text-4xl font-bold mb-2">Nov 21</div>
              <div className="text-gray-300">Day 1</div>
            </div>
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-pink-400" />
              <div className="text-4xl font-bold mb-2">Nov 22</div>
              <div className="text-gray-300">Day 2</div>
            </div>
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <div className="text-4xl font-bold mb-2">Nov 23</div>
              <div className="text-gray-300">Day 3</div>
            </div>
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
              <PartyPopper className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-300">Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Mail className="w-6 h-6 text-purple-400" />
                <a href="mailto:contact@aikyath2024.com" className="hover:text-purple-400 transition-colors">
                  contact@aikyath2024.com
                </a>
              </div>
              <div className="flex gap-6 justify-center md:justify-start">
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl mb-4">Ready to join the celebration?</p>
              <div className="flex justify-center">
                <RegisterButton />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-20 text-sm text-gray-400">
          © 2024 AIKYATH. Developed by Siva Magapu ~ MCA-A.
        </div>
      </footer>

      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} events={events} />
      <ScrollButton />
    </div>
  );
}

export default App;

import React from 'react';
import { X } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  coordinator: string;
  coordinatorDetails: {
    class: string;
    contact: string;
  };
}

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  events: Event[];
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, events }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 touch-none">
      <div 
        className="bg-white/10 backdrop-blur-lg rounded-xl w-full max-w-3xl max-h-[80vh] overflow-y-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">Event Registration Details</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white active:scale-95 transform transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{event.title}</h3>
                <div className="space-y-1 text-gray-300 text-sm sm:text-base">
                  <p>Coordinator: {event.coordinator}</p>
                  <p>Class: {event.coordinatorDetails.class}</p>
                  <p>Contact: {event.coordinatorDetails.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
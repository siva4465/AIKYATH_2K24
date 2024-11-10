import React from 'react';
import { Calendar, MapPin, User } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  venue: string;
  coordinator: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  image,
  date,
  venue,
  coordinator,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 active:scale-[0.98] touch-manipulation">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl sm:text-2xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-300 text-sm sm:text-base">{description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-purple-400 flex-shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-purple-400 flex-shrink-0" />
            <span>{venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-purple-400 flex-shrink-0" />
            <span>{coordinator}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
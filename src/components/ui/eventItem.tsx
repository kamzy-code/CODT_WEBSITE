import React from 'react';
import Image from 'next/image';
import { EventDocument,  BranchSchedule } from '@/types';
import { MapPin, Calendar, Clock } from 'lucide-react';

// Helper component to display dates/times for a single branch
const ScheduleDisplay: React.FC<{ title: string; schedule: BranchSchedule }> = ({ title, schedule }) => {
  if (schedule.length === 0) return null;

  return (
    <div className="mt-2">
      <h4 className="font-semibold text-sm text-dark">{title} Schedule:</h4>
      {schedule.map((item, index) => (
        <div key={index} className="flex items-center space-x-2 text-sm font-medium text-gray-600">
          <Calendar size={12} className="text-primary-600" />
          <span>{item.date.toString()}</span>
          <Clock size={12} className="text-primary-600" />
          <span>{item.time}</span>
        </div>
      ))}
    </div>
  );
};

export const EventItem: React.FC<{ event: EventDocument }> = ({ event }) => {
  return (
    <div className="w-full overflow-hidden flex flex-col md:flex-row border-b border-b-gray-200 pb-6">

      <div className="relative w-full md:w-1/3 min-h-[200px] md:min-h-full">
        <Image
          src={event.imageUrl}
          alt={`Image for ${event.title}`}
          // Use 'fill' to make the image fit the container
          fill
          className="object-contain" 
          sizes="(max-width: 768px) 100vw, 33vw"
          priority 
        />
      </div>

      {/* 📜 Event Info Container (Right Side) */}
      <div className="p-5 md:w-2/3">
        <h2 className="text-xl font-bold text-dark mb-2">{event.title}</h2>
        
        <div className="flex items-center text-sm font-semibold text-gray-500 mb-4">
          <MapPin size={16} className="mr-1 text-red-500" />
          <span>{event.venue}</span>
        </div>

        <hr className="my-3" />

        <h3 className="text-base font-semibold text-dark mb-2">Event Times:</h3>
        
        {/* Branch Schedules */}
        <div className="space-y-4">
          <ScheduleDisplay title="USA" schedule={event.schedule.usa as BranchSchedule} />
          <ScheduleDisplay title="Owerri" schedule={event.schedule.owerri as BranchSchedule} />
        </div>
        
        {/* Fallback if no schedule is found */}
        {event.schedule.usa && event.schedule.usa.length === 0 && event.schedule.owerri && event.schedule.owerri.length === 0 && (
          <p className="text-sm text-gray-500 italic">Schedule pending or event is fully remote.</p>
        )}
      </div>
    </div>
  );
};
"use client";
import { motion } from "framer-motion";
import { EventDocument } from "@/types";
import { EventItem } from "../ui/eventItem";

export function UpcomingEvents({ events = [] }: { events: EventDocument[] }) {
  return (
    <section className="flex items-center w-full justify-center section-padding">
      <div className="container-max space-y-8 py-12 w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <div className="space-y-12">
            <h3 className="font-extrabold gradient-text text-center text-2xl md:text-4xl">
              Upcoming Events
            </h3>
            {events.map((event, index) => (
              <EventItem key={index} event={event} />
            ))}

            {events.length === 0 && (
              <p className="text-center text-gray-500">
                No events currently scheduled.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

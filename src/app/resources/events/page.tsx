import { PageHeader } from "@/components/pageHeader";
import { UpcomingEvents } from "@/components/resources/upcomingEvents";
import { getEvents } from "@/lib/dbQueries";
import { EventDocument } from "@/types";

export const dynamic = 'force-dynamic';

export const sampleEvents: EventDocument[] = [
  {
    title: "Annual Thanksgiving Retreat",
    venue: "Main Auditorium, Local Branch",
    imageUrl: "/home/restoration_25.png", // Landscape
    schedule: {
      usa: [
        { date: "Monday 2nd December, 2025", time: "9:00 AM EST" },
        { date: "Monday 2nd December, 2025", time: "5:00 PM EST" },
      ],
      owerri: [
        { date: "Monday 2nd December, 2025", time: "10:00 AM WAT" },
      ],
    },
  },
  {
    title: "Youth Career Workshop",
    venue: "Community Hall, City Center",
    imageUrl: "/home/fathers_blessing.jpeg", // Square
    schedule: {
      usa: [
        { date: "Monday 2nd December, 2025", time: "6:00 PM EST" },
      ],
      owerri: [
        { date: "Monday 2nd December, 2025", time: "1:00 PM WAT" },
        { date: "Monday 2nd December, 2025", time: "1:00 PM WAT" },
      ],
    },
  },
  {
    title: "Monthly Prayer Vigil",
    venue: "Online Only (Zoom Link)",
    imageUrl: "/home/divne_help.jpeg", // Portrait
    schedule: {
      usa: [
        { date: "Monday 2nd December, 2025", time: "8:00 PM EST" },
      ],
      owerri: [
        { date: "Monday 2nd December, 2025", time: "8:00 PM WAT" },
      ],
    },
  },
  {
    title: "Annual Leadership Meeting",
    venue: "Headquarters Office",
    imageUrl: "/home/divne_help.jpeg",
    schedule: {
      usa: [
        { date: "Monday 2nd December, 2025", time: "9:00 AM EST" },
      ],
      owerri: [
        { date: "Monday 2nd December, 2025", time: "4:00 PM WAT" },
      ],
    },
  },
  {
    title: "New Members Fellowship",
    venue: "Church Cafe",
    imageUrl: "/home/restoration_25.png",
    schedule: {
      usa: [], // No schedule in USA branch for this event
      owerri: [
        { date: "Monday 2nd December, 2025", time: "6:00 PM WAT" },
      ],
    },
  },
];

export default async function Events(){

    const events = await getEvents();
return(
    <div className="min-h-screen">
        <PageHeader title="Events" description="Explore Upcoming Events"></PageHeader>
        <UpcomingEvents events={events}></UpcomingEvents>
    </div>
)
}
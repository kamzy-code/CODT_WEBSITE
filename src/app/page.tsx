import { DiscoverMinistries } from "@/components/home/discoverMinistries";
import { FaithWalk } from "@/components/home/faithWalk";
import { LandingSection } from "@/components/home/landing";
import { LatestSermons } from "@/components/home/latestSermons";
import { Mandate } from "@/components/home/mandate";
import { MeetPastor } from "@/components/home/meetPasor";
import { MonthlyTheme } from "@/components/home/monthlyTheme";
import { StoriesOfRestoration } from "@/components/home/stories";
import { UpcomingEvents } from "@/components/home/upcomingEvents";
import { WorshipWithUs } from "@/components/home/worshipWithUs";
import { PageLoader } from "@/components/pageLoader";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div>
          {" "}
          <PageLoader></PageLoader>
        </div>
      }
    >
      <main>
        <LandingSection></LandingSection>
        <WorshipWithUs scripture={true}></WorshipWithUs>
        <Mandate></Mandate>
        <FaithWalk></FaithWalk>
        <MonthlyTheme></MonthlyTheme>
        <UpcomingEvents></UpcomingEvents>
        <MeetPastor></MeetPastor>
        <DiscoverMinistries></DiscoverMinistries>
        <StoriesOfRestoration></StoriesOfRestoration>
        <LatestSermons></LatestSermons>
      </main>
    </Suspense>
  );
}

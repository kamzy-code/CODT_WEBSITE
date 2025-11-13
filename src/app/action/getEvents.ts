"server-only";

import { EventDocument } from "@/types";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

export async function getEvents(
  branch?: "usa" | "owerri"
): Promise<EventDocument[]> {
  try {
    const eventsCollectionRef = collection(db, "events");

    const q = query(eventsCollectionRef, orderBy("title", "asc"));

    // OPTIONAL: Add a 'where' clause to filter events by schedule presence for a branch
    if (branch) {
    }

    const querySnapshot = await getDocs(q);
    

    // Map the results to your TypeScript type
    const eventsList: EventDocument[] = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...(doc.data() as EventDocument),
      };
    });
    return eventsList;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error("Failed to retrieve events from the database.");
  }
}

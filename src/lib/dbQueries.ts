"server-only";

import { EventDocument } from "@/types";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  where,
  getDoc,
  doc,
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

export async function getMonthlyTheme(): Promise<{
  month: string;
  theme: string;
} | null> {
  try {
    const themeCollectionRef = collection(db, "monthlyTheme");

    const docRef = doc(themeCollectionRef, process.env.MONTHLY_THEME_ID!);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { month: docSnap.data().month, theme: docSnap.data().theme } as {
        month: string;
        theme: string;
      };
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error("Failed to retrieve monthly theme from the database.");
  }
}

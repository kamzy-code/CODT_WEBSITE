import { EventDocument } from "@/types";

export const SITE_URL = (
  process.env.WEBSITE_URL || "https://cityofdavidtabernacle.org"
).replace(/\/+$/, "");

export function absoluteUrl(path: string = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export interface BranchInfo {
  key: "usa" | "owerri";
  name: string;
  alternateNames?: string[];
  telephone: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry: string;
}

export const BRANCHES: BranchInfo[] = [
  {
    key: "usa",
    name: "Restoration Chapel - USA",
    // "Victory Chapel" is this branch's legacy/alternate public name (matches
    // the @victorychapelmd_cod social handles) — not a name for the org as a whole.
    alternateNames: ["Victory Chapel", "Restoration Chapel"],
    telephone: "+1-240-965-7558",
    streetAddress: "7953 Annapolis Rd",
    addressLocality: "Lanham",
    addressRegion: "MD",
    postalCode: "20706",
    addressCountry: "US",
  },
  {
    key: "owerri",
    name: "Restoration Chapel - Owerri",
    alternateNames: ["Restoration Chapel"],
    telephone: "+234-803-708-1146",
    streetAddress: "Plot 271 Ikenegbu Layout, Beside Fidelity Bank, Ikenegbu",
    addressLocality: "Owerri",
    addressRegion: "Imo State",
    addressCountry: "NG",
  },
];

// Canonical name for the founder, plus name variants used inconsistently
// elsewhere in the codebase (kept here as schema-level aliases only).
export const BISHOP_NAME = "Bishop Joel Njoku Andrew";
export const BISHOP_ALTERNATE_NAMES = [
  "Bishop Joel Njoku",
  "Bishop Joel Andrew",
  "Bishop Joel Andrew Njoku",
];
const BISHOP_SOCIAL_LINKS = [
  "https://www.facebook.com/share/1D14dY5w2o/",
  "https://web.facebook.com/BishopNjokuJoel",
  "https://www.instagram.com/bishopjoelnjoku?igsh=Y244NHZtZXdqOGpm",
  "https://youtube.com/@bishopjoelandrew?si=vVl8gilAuajPJzWU",
];

function buildAddress(branch: BranchInfo) {
  return {
    "@type": "PostalAddress",
    streetAddress: branch.streetAddress,
    addressLocality: branch.addressLocality,
    addressRegion: branch.addressRegion,
    postalCode: branch.postalCode,
    addressCountry: branch.addressCountry,
  };
}

const SOCIAL_LINKS = [
  "https://www.facebook.com/share/17XL1mMWt6/",
  "https://www.instagram.com/cityofdavidtabernacle?igsh=MTk2NW9rZng5dzBq",
  "https://www.youtube.com/@victorychapelmd_cod",
  "https://www.facebook.com/share/1CnefnRZEy/",
  "https://www.tiktok.com/@cityofdavidtabernacle?_r=1&_d=edc962904ebf2m&sec_uid=MS4wLjABAAAAy_qQIcHAFCk7Yh_v7B16_QMJIrLQeGhZ0WF9yJ2LblNyuALsqWBmNjE6Yw7mZYHy&share_author_id=7483171134293607430&sharer_language=en&source=h5_m&u_code=ejai5i3hfhlbi8&timestamp=1762434878&user_id=7483171134293607430&sec_user_id=MS4wLjABAAAAy_qQIcHAFCk7Yh_v7B16_QMJIrLQeGhZ0WF9yJ2LblNyuALsqWBmNjE6Yw7mZYHy&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7534814119968851726&share_link_id=486c458e-0fdc-40a0-9182-a37cb2e3d071&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1",
  "https://www.facebook.com/share/1D14dY5w2o/",
  "https://web.facebook.com/BishopNjokuJoel",
  "https://www.instagram.com/bishopjoelnjoku?igsh=Y244NHZtZXdqOGpm",
  "https://youtube.com/@bishopjoelandrew?si=vVl8gilAuajPJzWU",
];

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "City of David Tabernacle",
    alternateName: "City of David",
    url: SITE_URL,
    logo: absoluteUrl("/codt_logo.png"),
    description: "Bringing Restoration to Humanity and the Dying World.",
    founder: {
      "@type": "Person",
      name: BISHOP_NAME,
      alternateName: BISHOP_ALTERNATE_NAMES,
    },
    sameAs: SOCIAL_LINKS,
    subOrganization: BRANCHES.map((branch) => ({
      "@type": "Church",
      name: branch.name,
      alternateName: branch.alternateNames,
      telephone: branch.telephone,
      address: buildAddress(branch),
    })),
  };
}

export function buildBranchesJsonLd() {
  return BRANCHES.map((branch) => ({
    "@context": "https://schema.org",
    "@type": "Church",
    name: branch.name,
    alternateName: branch.alternateNames,
    telephone: branch.telephone,
    address: buildAddress(branch),
    parentOrganization: {
      "@type": "Organization",
      name: "City of David Tabernacle",
      url: SITE_URL,
    },
  }));
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: BISHOP_NAME,
    alternateName: BISHOP_ALTERNATE_NAMES,
    jobTitle: "Founder",
    affiliation: {
      "@type": "Organization",
      name: "City of David Tabernacle",
      url: SITE_URL,
    },
    sameAs: BISHOP_SOCIAL_LINKS,
  };
}

const MONTHS: Record<string, string> = {
  january: "01",
  february: "02",
  march: "03",
  april: "04",
  may: "05",
  june: "06",
  july: "07",
  august: "08",
  september: "09",
  october: "10",
  november: "11",
  december: "12",
};

const TZ_OFFSETS: Record<string, string> = {
  EST: "-05:00",
  EDT: "-04:00",
  CST: "-06:00",
  CDT: "-05:00",
  MST: "-07:00",
  MDT: "-06:00",
  PST: "-08:00",
  PDT: "-07:00",
  WAT: "+01:00",
  GMT: "+00:00",
  UTC: "+00:00",
};

// Best-effort parse of free-text date/time strings like "Monday 2nd December, 2025"
// and "9:00 AM EST" into ISO 8601. Returns null (rather than a guessed value) when
// the format can't be confidently matched, so callers can skip emitting bad data.
function parseEventDateTime(dateStr: string, timeStr: string): string | null {
  const dateMatch = dateStr.match(
    /(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]+),?\s+(\d{4})/
  );
  const timeMatch = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?\s*([A-Za-z]+)?/i);
  if (!dateMatch || !timeMatch) return null;

  const [, day, monthName, year] = dateMatch;
  const month = MONTHS[monthName.toLowerCase()];
  if (!month) return null;

  const [, hourStr, minute, meridiem, tz] = timeMatch;
  let hour = parseInt(hourStr, 10);
  if (meridiem) {
    const isPM = meridiem.toUpperCase() === "PM";
    if (isPM && hour !== 12) hour += 12;
    if (!isPM && hour === 12) hour = 0;
  }

  const offset = tz ? (TZ_OFFSETS[tz.toUpperCase()] ?? "") : "";
  return `${year}-${month}-${day.padStart(2, "0")}T${String(hour).padStart(2, "0")}:${minute}:00${offset}`;
}

export function buildEventsJsonLd(events: EventDocument[]) {
  const items: Record<string, unknown>[] = [];

  for (const event of events) {
    const isVirtual = /online|zoom|virtual/i.test(event.venue);

    for (const branch of BRANCHES) {
      const occurrences = event.schedule[branch.key];
      if (!occurrences) continue;

      for (const occurrence of occurrences) {
        const startDate = parseEventDateTime(occurrence.date, occurrence.time);
        if (!startDate) continue;

        items.push({
          "@context": "https://schema.org",
          "@type": "Event",
          name: event.title,
          startDate,
          eventAttendanceMode: isVirtual
            ? "https://schema.org/OnlineEventAttendanceMode"
            : "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: isVirtual
            ? { "@type": "VirtualLocation", url: SITE_URL }
            : {
                "@type": "Place",
                name: event.venue,
                address: buildAddress(branch),
              },
          image: absoluteUrl(event.imageUrl),
          organizer: {
            "@type": "Organization",
            name: "City of David Tabernacle",
            url: SITE_URL,
          },
        });
      }
    }
  }

  return items;
}

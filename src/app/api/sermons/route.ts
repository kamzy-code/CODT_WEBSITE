import { NextResponse } from "next/server";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const PLAYLIST_ID = process.env.NEXT_PUBLIC_PLAYLIS_ID;
const MAX_RESULTS = 12;

export const revalidate = 3600;

interface YouTubeSnippet {
  resourceId: {
    videoId: string;
  };
  title: string;
  thumbnails: {
    medium: {
      url: string;
    };
  };
}

interface YouTubeResponse {
  items: Array<{
    snippet: YouTubeSnippet;
  }>;
  nextPageToken: string;
}

export async function GET() {
  if (!YOUTUBE_API_KEY || !PLAYLIST_ID) {
    return NextResponse.json(
      { error: "Missing YouTube API configuration" },
      { status: 500 }
    );
  }

  let items: Array<{
    snippet: YouTubeSnippet;
  }> = [];
  let nextPageToken = "";

  try {
    do {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&pageToken=${nextPageToken}&key=${YOUTUBE_API_KEY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `YouTube API responded with status: ${response.status}`
        );
      }

      const data = (await response.json()) as YouTubeResponse;
      items = [...items, ...data.items];
      nextPageToken = data.nextPageToken || "";
    } while (nextPageToken);

    const videos = items
      .slice(-MAX_RESULTS)
      .reverse()
      .map(({ snippet }) => ({
        id: snippet.resourceId.videoId,
        title: snippet.title,
        thumbnail: snippet.thumbnails.medium.url,
      }));

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error fetching sermons:", error);
    return NextResponse.json(
      { error: "Failed to fetch sermons" },
      { status: 500 }
    );
  }
}

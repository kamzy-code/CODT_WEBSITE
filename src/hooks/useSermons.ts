"use client"
import { useQuery } from "@tanstack/react-query";
import type { Sermon } from "@/types";

async function fetchSermons(): Promise<Sermon[]> {
  const response = await fetch('/api/sermons');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function useSermons() {
  return useQuery<Sermon[]>({
    queryKey: ['sermons'],
    queryFn: fetchSermons,
    retry: 2,
    gcTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: false,
  });
}
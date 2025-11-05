"use client";
import { useSermons } from "@/hooks/useSermons";
import { PageLoader } from "../pageLoader";
import Link from "next/link";

export function SermonsGrid() {
  const { data: sermons, isLoading, isError, refetch } = useSermons();

  if (isLoading) {
    return <PageLoader></PageLoader>;
  }

  if (isError || !sermons) {
    return (
      <div className="flex flex-col items-center justify-center section-padding gap-4 h-screen">
        <p className="text-center text-red-500">Failed to load sermons.</p>
        <button onClick={() => refetch()} className="btn-primary h-12">
          Try again
        </button>
      </div>
    );
  }

  return (
    <section className="flex items-center justify-center section-padding">
      <div className="container-max w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
        {sermons.map(({ id, title, thumbnail }) => (
          <div key={id} className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${id}`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}

        <div className="mt-4 col-span-full flex justify-center items-center">
          <Link
            href={
              "https://www.youtube.com/playlist?list=PLr3x6yem7PgCkHq6opGXgbo46rhUZl021"
            }
            target="_blank"
          >
            <button className="btn-primary h-12 hover:bg-red-600mx-auto">
              Listen to More Sermon
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

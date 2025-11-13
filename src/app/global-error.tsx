"use client";
import { TriangleAlert } from "lucide-react";
export default function ErrorBoundary() {
  return (
    <html>
      <body>
        <div className="min-h-screen w-full flex flex-col gap-4 items-center justify-center">
          <TriangleAlert className="text-red-600 h-12 w-12"></TriangleAlert>
          <h1 className="md:text-lg text-center text-red-600">
            Something Went Wrong!
          </h1>
          <button
            onClick={() => window.location.reload()}
            className="btn-secondary text-dark border-dark hover:bg-primary-900 hover:text-white active:bg-primary-900 active:text-white h-12"
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}

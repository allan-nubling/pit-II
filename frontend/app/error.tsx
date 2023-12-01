"use client";

import { useEffect } from "react";

import image from "@/public/page_not_found.svg";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <img
        src={image}
        style={{
          marginTop: "64px",
          maxHeight: "480px",
        }}
      />
    </div>
  );
}

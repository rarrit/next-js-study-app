"use client";

// error 처리
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { refresh } = useRouter();
  // react 18 에서 생긴 메서드 => startTransition()
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => 
      startTransition(() => {
        refresh();
        reset();
      })}>Try again</button>
    </div>
  );
}
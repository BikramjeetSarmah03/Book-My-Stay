"use client";

import { useRouter } from "next/navigation";
import Heading from "./common/Heading";
import Button from "./common/Button";

interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

export default function EmptyState({
  title = "No exact mathes",
  subtitle = "Try changing or removing some of your filters",
  showReset,
}: EmptyState) {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />

      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
}

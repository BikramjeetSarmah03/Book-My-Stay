"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

export default function Counter({
  title,
  subtitle,
  value,
  onChange,
}: CounterProps) {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <div
          className="flex items-center justify-center w-10 h-10 transition border rounded-full cursor-pointer border-neutral-400 text-neutral-600 hover:opacity-80"
          onClick={onReduce}>
          <AiOutlineMinus />
        </div>
        <div className="text-xl font-light text-neutral-600">{value}</div>
        <div
          className="flex items-center justify-center w-10 h-10 transition border rounded-full cursor-pointer border-neutral-400 text-neutral-600 hover:opacity-80"
          onClick={onAdd}>
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
}

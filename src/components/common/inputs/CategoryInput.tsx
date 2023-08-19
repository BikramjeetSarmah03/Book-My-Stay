"use client";

import { IconType } from "react-icons";

type Props = {
  onClick: (value: string) => void;
  selected?: boolean;
  label: string;
  icon: IconType;
};

export default function CategoryInput({
  onClick,
  selected,
  label,
  icon: Icon,
}: Props) {
  return (
    <div
      className={`rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer ${
        selected ? "border-black" : "border-neutral-200"
      }`}
      onClick={() => onClick(label)}>
      <Icon size={30} />

      <div className={`font-semibold`}>{label}</div>
    </div>
  );
}

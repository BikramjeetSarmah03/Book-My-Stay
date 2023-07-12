import { IconType } from "react-icons/lib";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export default function Button({
  label,
  onClick,
  disabled,
  icon: Icon,
  outline,
  small,
}: ButtonProps) {
  return (
    <button
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outline
          ? "bg-white border-black text-black"
          : "bg-rose-500 border-rose-500 text-white"
      }
      ${
        small
          ? "py-1 text-sm font-light border"
          : "py-3 border-2 text-emerald-50 font-semibold"
      }
      `}
      onClick={onClick}
      disabled={disabled}>
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
}

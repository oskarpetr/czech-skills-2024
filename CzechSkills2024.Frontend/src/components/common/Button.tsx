import { cn } from "@/utils/cn";
import Icon from "./Icon";

interface Props {
  onClick?: () => void;
  type?: "primary" | "cancel" | "white" | "black";
  icon?: string;
  text?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  iconDirection?: "left" | "right";
  size?: "small" | "normal";
  loading?: boolean;
}

export default function Button({
  onClick,
  type = "primary",
  icon,
  text,
  disabled = false,
  fullWidth = true,
  iconDirection = "left",
  size = "normal",
  loading,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type === "primary" ? "submit" : "button"}
      disabled={disabled}
      className={cn(
        "disabled:opacity-80 focus:ring-4 ring-0 ring-opacity-30 flex items-center gap-2 rounded-lg text-white transition-all",
        type === "primary"
          ? "bg-white hover:bg-neutral-200 text-black-primary ring-white"
          : type === "cancel"
          ? "bg-neutral-600 hover:bg-neutral-700 ring-neutral-600 *:font-bold"
          : type === "white"
          ? "bg-green-primary hover:bg-green-primary-hover ring-green-primary *:font-bold"
          : type === "black"
          ? "bg-black-primary hover:bg-neutral-900 text-white ring-neutral-900"
          : "",
        fullWidth ? "w-full" : "min-w-fit",
        iconDirection === "left" ? "flex" : "flex-row-reverse",
        size === "normal" ? "py-4 px-8" : "px-6 py-2",
        text ? "justify-between" : "justify-center"
      )}
    >
      {icon && (
        <Icon
          name={loading ? "Spinner" : icon}
          size={24}
          className={loading ? "animate-spin" : ""}
        />
      )}

      {text && <span>{text}</span>}
    </button>
  );
}

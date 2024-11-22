import { cn } from "@/utils/cn";

interface Props {
  title: string;
  color?: "white" | "black";
}

export default function Section({ title, color = "black" }: Props) {
  return (
    <div className="flex items-center gap-1 mb-4">
      <h1
        className={cn(
          "font-extrabold",
          color === "black" ? "text-black-primary" : "text-white"
        )}
      >
        {title}
      </h1>
    </div>
  );
}

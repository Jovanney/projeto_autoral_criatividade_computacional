import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";
import React from "react";

interface SelectWithImagesProps {
  options: { value: string; image: string }[];
  value: string;
  onChange: (value: string) => void;
}

export default function SelectWithImages({
  options,
  value,
  onChange,
}: SelectWithImagesProps) {
  const { theme } = useTheme();
  console.log("value:", value);
  return (
    <div className="grid justify-center items-center grid-cols-3 w-full h-full gap-3 ">
      {options.map((option) => (
        <MagicCard
          onClick={() => onChange(option.value)}
          key={option.value}
          className={`cursor-pointer hover:border-blue-300  shadow-2xl text-2xl ${
            option.value === value
              ? "dark:border-blue-200 border-blue-500"
              : "border-transparent"
          }`}
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <span className="flex items-end gap-2 justify-start w-full">
            <img src={option.image} alt={option.value} />
            {option.value}
          </span>
        </MagicCard>
      ))}
    </div>
  );
}
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface TagCardProps {
  title: string;
  description: string;
  image: string;
  onChange: (value: string) => void;
  value: string;
  selectedOption: string;
}

export default function TagCardOption({
  title,
  description,
  image,
  onChange,
  value,
  selectedOption,
}: TagCardProps) {
  return (
    <Card
      className={`cursor-pointer hover:shadow-blue-300  ${
        value === selectedOption
          ? "border-2 border-blue-500 dark:border-blue-300"
          : ""
      }`}
      onClick={() => onChange(value)}
    >
      <CardHeader>
        <Image width={500} height={500} src={image} alt={title} />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

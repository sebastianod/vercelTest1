"use client";
import React, { useState } from "react";
import {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardSubTitle,
  CardFooter,
} from "./card";
import { Pencil, Trash2, ChevronDown, ChevronUp } from "lucide-react";

export interface VocabItem {
  vocab_id: number;
  vocab_image_url?: string;
  vocab_word: string;
  vocab_definition: string;
  vocab_context?: string;
  vocab_example?: string;
  vocab_created: Date;
}

interface VocabCardProps {
  word: VocabItem;
}

const VocabCard: React.FC<VocabCardProps> = ({ word }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="h-fit min-w-72 max-w-96 transition duration-300 ease-out hover:scale-[1.02] hover:shadow-slate-700">
      {word.vocab_image_url && (
        <CardImage src={word.vocab_image_url} alt={word.vocab_word} />
      )}
      <CardHeader>
        <CardTitle>{word.vocab_word}</CardTitle>
        <div className="flex justify-center">
          {isExpanded ? (
            <ChevronUp
              className="cursor-pointer text-slate-400 hover:text-black"
              onClick={toggleExpansion}
            />
          ) : (
            <ChevronDown
              className="cursor-pointer text-slate-400 hover:text-black"
              onClick={toggleExpansion}
            />
          )}
        </div>
      </CardHeader>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <CardContent className="flex flex-col gap-2">
          <CardDescription>{word.vocab_definition}</CardDescription>
          <CardSubTitle>Context</CardSubTitle>
          <p>{word.vocab_context}</p>
          <CardSubTitle>Example</CardSubTitle>
          <p>{word.vocab_example}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Pencil className="cursor-pointer" />
          <Trash2 className="cursor-pointer" />
        </CardFooter>
      </div>
    </Card>
  );
};

export default VocabCard;

import React from "react";
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
import { Pencil, Trash2 } from "lucide-react";

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
  return (
    <Card className="max-w-lg min-w-24 h-fit hover:scale-[1.02] hover:shadow-slate-700 transition ease-out duration-300">
      <CardImage src={word.vocab_image_url} alt={word.vocab_word} />
      <CardHeader>
        <CardTitle>{word.vocab_word}</CardTitle>
        <CardDescription>{word.vocab_definition}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardSubTitle>Example</CardSubTitle>
        <p>{word.vocab_example}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Pencil className=" cursor-pointer" />
        <Trash2 className=" cursor-pointer" />
      </CardFooter>
    </Card>
  );
};

export default VocabCard;

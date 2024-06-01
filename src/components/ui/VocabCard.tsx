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
    <Card className="max-w-sm min-w-32 h-fit">
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
        <Pencil/>
        <Trash2/>
      </CardFooter>
    </Card>
  );
};

export default VocabCard;

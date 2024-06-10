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

  // layout="fill"
  //     objectFit="cover"
  //     objectPosition="center"

  return (
    <Card className="h-fit min-w-60 max-w-max transition duration-300 ease-out hover:scale-[1.02] hover:shadow-slate-700">
      {word.vocab_image_url && (
        <div className="relative aspect-[500/300]">
          <CardImage
            src={word.vocab_image_url}
            alt={word.vocab_word}
            quality={25}
            blurDataURL="data:image/webp;base64,UklGRqAEAABXRUJQVlA4WAoAAAAgAAAASwEAvQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggsgIAAJAaAJ0BKkwBvgA+7XayVbozqiMg1VkrQB2JZ27gUO2/2rUDGUDo/n0bvyAUDTPhpaXFqug4PtCE+LnTDwx+dQpYa0L+8in86kH7/bwVClhrPlXtROFQJj8R83wx9qKGBG4EY5LTeQuf9mYapOq/AHXy+QQMcAQGTZjwSZnSeVqtYVBMxZKhr5e8kC1UxVMVhOVm1w5hqPJnp02Z0nHaMfrQDzCa7HUqzgTnNm9g+TDwt/7EjTBbPUhai2kyl5YrC3/YHvkeAVLpyDNPDTuW/zdeCg+r/6aqfsM+b/TMAP7qoU97/I8YNtXaQA5YNc3pEQyxU8LTP9hcchEnzsqVrnqP89TLXM9VaNHYQ2nMYsLUAG/ld/GBuEJhEv/Fch/4ndkTD5VQJg7p5FDDBTRhX+TeR92WgChIGAZ3n2MdpKtuJp0MVmkA+GOaZkue5kGJQmk3MyB7uZBT53M11wwAfBcenAihqKKXDcC/tRwK2ZSRK8jKHuvUNoUDTFuEWaSRjOJD+2oVR0TR49vOauJfGAbQTv8AjBhw7AqG4rN06ws+iG/2Vb6WCqgTWuB1zYc1dInK8WQAS9hlsNF8Dv3C5VpgeRgaALW5YphZFTUZHO8M8yVW4rilG8OyxFuMUKLuinTXlsl5VZE+uQjiPI12wYaAwwJ1MbDFHTdd4CN9V0UUD9dMDCD+y9kmTdfJXOBdIaIvSRBcfmICFs9SyRHXcvl3RBa0OPocQsKq79HoBSnFNdtUk1OEXjB3dfWv85Evm65yO16EG1VyjwMGiCYZC2bF+A37ddv8C998bpL4OQUa4PDVkgpXATHYAk2cfiO4Wo9nteGZNm/UR6So+cHkOfPMpDu6/yC8jxWALprkEw+rtGPPfSZI/NkIEG74vkgl1RKmoyoZDshLXg0gwxOhXYAAAA=="
            placeholder="blur"
            fill={true}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
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

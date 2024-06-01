"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { ButtonLoading } from "./buttonLoading";
import { CirclePlus } from "lucide-react";

export default function VocabCreate() {
  const [isHidden, setIsHidden] = useState(false);
  const handleClick = () => {
    setIsHidden(!isHidden);
    console.log("isHidden:", isHidden);
  };

  return (
    <Card className=" max-w-sm">
      <div hidden={isHidden} className="flex justify-center">
        <CardHeader>
          <CirclePlus onClick={handleClick} />
        </CardHeader>
      </div>
      <div hidden={!isHidden}>
        <CardContent></CardContent>
        <CardFooter>
          <ButtonLoading>Create</ButtonLoading>
        </CardFooter>
      </div>
    </Card>
  );
}

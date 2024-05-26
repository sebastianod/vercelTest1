"use client";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function UserItem() {
  return (
    <div className="flex items-center justify-center flex-row gap-2 border rounded-md p-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start justify-center">
        <p className=" font-bold">Sebastian Ochoa</p>
        <p className="text-[12px] text-neutral-500">
          sebastianochoad@gmail.com
        </p>
      </div>
    </div>
  );
}

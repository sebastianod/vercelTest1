"use client";
import UserItem from "./UserItem";
import { Badge } from "./ui/badge";
import { Command, CommandList, CommandItem, CommandGroup } from "./ui/command";
import { Calendar, FlagTriangleRight, CircleCheckBig, Sparkles, Gauge, ListChecks } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <UserItem />
      <div className="grow">
        <Command className="rounded-lg border shadow-md overflow-visible min-h-[330px]">
          <CommandList className="overflow-visible">
            <CommandGroup heading="Personal">
              <CommandItem className="flex gap-2 cursor-pointer">
              <Gauge />
                <span>Dashboard</span>
              </CommandItem>
              <CommandItem className="flex gap-2 cursor-pointer">
              <ListChecks />
                <span>Goals</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Active Forms">
              <CommandItem className="flex gap-2 cursor-pointer">
                <Calendar />
                <span>Past forms</span>
              </CommandItem>
              <CommandItem className="flex gap-2 cursor-pointer">
                <FlagTriangleRight />
                <span>Today</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Quiz me">
              <CommandItem className="flex gap-2 cursor-pointer">
                <CircleCheckBig />
                <span>Cards Quiz</span>
              </CommandItem>
              <CommandItem className="flex gap-2 cursor-pointer">
               <Sparkles className=" stroke-orange-600" />
                <span>AI Quiz</span>
                <Badge className=" bg-orange-600">Coming Soon</Badge>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
}

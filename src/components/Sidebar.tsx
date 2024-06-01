"use client";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Command, CommandList, CommandItem, CommandGroup } from "./ui/command";
import {
  Calendar,
  FlagTriangleRight,
  CircleCheckBig,
  Sparkles,
  Gauge,
  ListChecks,
  UserRound,
  Menu,
  PawPrint,
} from "lucide-react";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    console.log("Expanded?", isExpanded);
  };

  return (
    <div
      className={`flex flex-col gap-4 w-[350px] max-w-[350px] border-r min-h-screen p-4 transition-all duration-300 ${
        isExpanded ? "w-[350px] overflow-hidden" : "w-24"
      }`}
    >
      <div className="flex justify-between">
        <PawPrint className="cursor-pointer" />
        <Menu className="cursor-pointer" onClick={toggleSidebar} />
      </div>

      <div className="transition-all">
        <Command className="rounded-lg overflow-visible min-h-[450px]">
          <CommandList className="overflow-visible">
            <CommandGroup heading="">
              <CommandItem className="flex gap-2 cursor-pointer">
                <UserRound />
                <span className={`${!isExpanded ? "hidden" : ""}`}>
                  Profile
                </span>
              </CommandItem>
              <CommandItem className="flex gap-2 cursor-pointer">
                <Gauge />
                <span className={`${!isExpanded ? "hidden" : ""}`}>
                  Dashboard
                </span>
              </CommandItem>
              <CommandItem className="flex gap-2 cursor-pointer">
                <ListChecks />
                <span className={`${!isExpanded ? "hidden" : ""}`}>Goals</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="">
              <CommandItem className="flex gap-2 cursor-pointer">
                <Calendar />
                <span className={`${!isExpanded ? "hidden" : ""}`}>
                  Instant Feedback
                </span>
              </CommandItem>
              <CommandItem className="flex gap-2 cursor-pointer">
                <FlagTriangleRight />
                <span className={`${!isExpanded ? "hidden" : ""}`}>
                  Daily form
                </span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="">
              <CommandItem className="flex gap-2 cursor-pointer">
                <CircleCheckBig />
                <span className={`${!isExpanded ? "hidden" : ""}`}>
                  Cards Quiz
                </span>
              </CommandItem>
              <CommandItem className="flex gap-2 cursor-pointer">
                <Sparkles />
                <span className={`${!isExpanded ? "hidden" : ""}`}>
                  AI Quiz
                </span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
}

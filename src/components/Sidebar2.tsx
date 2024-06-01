"use client";
import { useState } from "react";
import { Badge } from "./ui/badge";
import {
  Library,
  FlagTriangleRight,
  CircleCheckBig,
  Sparkles,
  Gauge,
  ListChecks,
  UserRound,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    console.log("Expanded?", isExpanded);
  };

  return (
    <div
      className={`flex flex-col gap-4 border rounded-md min-h-screen p-4 transition-all duration-300 items-start bg-slate-900 text-white ${
        isExpanded ? "w-[250px] max-w-[250px] overflow-hidden" : "w-14"
      }`}
    >
      <div className="flex justify-between w-full">
        <Menu className="cursor-pointer" onClick={toggleSidebar} />
      </div>

      <div className="transition-all mt-4 flex flex-col gap-4 w-full">
        <div className="flex flex-col border-b pb-2 gap-3">
          <div className="flex gap-2 cursor-pointer items-center">
            <div className="w-6 flex justify-center">
              <UserRound />
            </div>
            <span className={`truncate ${!isExpanded ? "hidden" : ""}`}>
              Profile
            </span>
          </div>
          <div className="flex gap-2 cursor-pointer items-center">
            <div className="w-6 flex justify-center">
              <Gauge />
            </div>
            <span className={`truncate ${!isExpanded ? "hidden" : ""}`}>
              Dashboard
            </span>
          </div>
          <div className="flex gap-2 cursor-pointer items-center">
            <div className="w-6 flex justify-center">
              <ListChecks />
            </div>
            <span className={`truncate ${!isExpanded ? "hidden" : ""}`}>
              Goals
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b pb-2">
          <div className="flex gap-2 cursor-pointer items-center">
            <div className="w-6 flex justify-center">
              <Library />
            </div>
            <span className={`truncate ${!isExpanded ? "hidden" : ""}`}>
              Instant feedback
            </span>
          </div>
          <div className="flex gap-2 cursor-pointer items-center">
            <div className="w-6 flex justify-center">
              <FlagTriangleRight />
            </div>
            <span className={`truncate ${!isExpanded ? "hidden" : ""}`}>
              Daily form
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b pb-2">
          <div className="flex gap-2 cursor-pointer items-center">
            <div className="w-6 flex justify-center">
              <CircleCheckBig />
            </div>
            <span className={`truncate ${!isExpanded ? "hidden" : ""}`}>
              Cards quiz
            </span>
          </div>
          <div className="flex gap-2 cursor-pointer items-center">
            <div className="w-6 flex justify-center">
              <Sparkles />
            </div>
            <span className={`truncate ${!isExpanded ? "hidden" : ""}`}>
              AI quiz
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      className={`flex min-h-screen flex-col items-start gap-4 rounded-md border bg-slate-900 p-4 text-white transition-all duration-300 ${
        isExpanded ? "w-[250px] min-w-[250px] overflow-hidden" : "w-14"
      }`}
    >
      <div className="flex w-full justify-between">
        <Menu className="cursor-pointer" onClick={toggleSidebar} />
      </div>

      <div className="mt-4 flex w-full flex-col gap-4 transition-all">
        <div className="flex flex-col gap-3 border-b pb-2">
          <div className="flex cursor-pointer items-center gap-2 rounded-md transition duration-150 ease-in hover:bg-slate-700">
            <div className="flex w-6 justify-center">
              <UserRound />
            </div>
            <span className={`truncate ${!isExpanded ? "hidden" : ""}`}>
              Profile
            </span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 rounded-md transition duration-150 ease-in hover:bg-slate-700">
            <div className="flex w-6 justify-center">
              <Gauge />
            </div>
            <span className={`truncate ${!isExpanded ? "hidden" : ""}`}>
              Dashboard
            </span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 rounded-md transition duration-150 ease-in hover:bg-slate-700">
            <div className="flex w-6 justify-center">
              <ListChecks />
            </div>
            <span className={`truncate ${!isExpanded ? "hidden" : ""}`}>
              Goals
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b pb-2">
          <div className="flex cursor-pointer items-center gap-2 rounded-md transition duration-150 ease-in hover:bg-slate-700">
            <div className="flex w-6 justify-center">
              <Library />
            </div>
            <span className={`truncate ${!isExpanded ? "hidden" : ""}`}>
              Instant feedback
            </span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 rounded-md transition duration-150 ease-in hover:bg-slate-700">
            <div className="flex w-6 justify-center">
              <FlagTriangleRight />
            </div>
            <span className={`truncate ${!isExpanded ? "hidden" : ""}`}>
              Daily form
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex cursor-pointer items-center gap-2 rounded-md transition duration-150 ease-in hover:bg-slate-700">
            <div className="flex w-6 justify-center">
              <CircleCheckBig />
            </div>
            <span className={`truncate ${!isExpanded ? "hidden" : ""}`}>
              Cards quiz
            </span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 rounded-md transition duration-150 ease-in hover:bg-slate-700">
            <div className="flex w-6 justify-center">
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

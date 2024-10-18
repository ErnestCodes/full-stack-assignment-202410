"use client";

import { ReactNode } from "react";
import Sidebar from "./sidebar";
import { TooltipProvider } from "./ui/tooltip";
import { ResizableHandle, ResizablePanelGroup } from "./ui/resizable";

interface ResizablePanelProps {
  children: ReactNode;
}

const Home: React.FC<ResizablePanelProps> = ({ children }) => {
  return (
    <div className="hidden flex-col md:flex">
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
              sizes
            )}`;
          }}
          className="h-full max-h-[800px] items-stretch"
        >
          <Sidebar />
          <ResizableHandle withHandle />
          {children}
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  );
};

export default Home;

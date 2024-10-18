"use client";

import { Nav } from "@/components/nav";
import React from "react";
import { File, LucideIcon, MessageSquare } from "lucide-react";
import { ResizablePanel } from "./ui/resizable";
import { Logo } from "./logo";
import { Separator } from "./ui/separator";

type NavLink = {
  title: string;
  label?: string;
  icon: LucideIcon;
  href: string;
};

const Sidebar = () => {
  const defaultLayout = [265, 440, 655];

  const navLinks: NavLink[] = [
    {
      title: "Conversations",
      label: "128",
      icon: MessageSquare,
      href: "/",
    },
    {
      title: "Saved ideas",
      label: "9",
      icon: File,
      href: "/ideas",
    },
  ];
  return (
    <ResizablePanel
      defaultSize={defaultLayout[0]}
      collapsedSize={4}
      collapsible={true}
      minSize={15}
      maxSize={20}
      // @ts-ignore
      onCollapse={(collapsed: boolean) => {
        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
          collapsed
        )}`;
      }}
    >
      <div className={"flex h-[52px] items-center justify-center"}>
        <Logo />
      </div>
      <Separator />
      <Nav links={navLinks} />
    </ResizablePanel>
  );
};

export default Sidebar;

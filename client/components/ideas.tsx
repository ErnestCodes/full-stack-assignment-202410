"use client";
import * as React from "react";
import { Search } from "lucide-react";

import { MailList } from "@/components/mail-list";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ResizablePanel } from "@/components/ui/resizable";
import type { Mail } from "@/lib/data";

interface ConvoProps {
  chats: Mail[];
}

export function Ideas({ chats }: ConvoProps) {
  const defaultLayout = [265, 440, 655];

  return (
    <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
      <Tabs defaultValue="all">
        <div className="flex items-center px-4 py-2">
          <h1 className="text-xl font-bold">Saved ideas</h1>
        </div>
        <Separator />
        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </div>
          </form>
        </div>
        <TabsContent value="all" className="m-0">
          <MailList items={chats} />
        </TabsContent>
      </Tabs>
    </ResizablePanel>
  );
}

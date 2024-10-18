import { Archive, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";

import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Mail } from "@/lib/data";
import { Tabs, TabsContent } from "./ui/tabs";

interface ChatDisplayProps {
  chat: Mail | null;
}

export function ChatDisplay({ chat }: ChatDisplayProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" disabled={!chat}>
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Move to trash</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Move to trash</TooltipContent>
        </Tooltip>
      </div>
      <Separator />
      {chat ? (
        <Tabs defaultValue="chats" className="flex flex-1 flex-col">
          <TabsContent value="chats">
            <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
              {chat.text}
            </div>
          </TabsContent>
          <Separator className="mt-auto" />
          <div className="p-4">
            <form>
              <div className="grid gap-4">
                <Textarea
                  className="p-4"
                  placeholder={`Reply ${chat.name}...`}
                />
                <div className="flex items-center">
                  <Label
                    htmlFor="mute"
                    className="flex items-center gap-2 text-xs font-normal"
                  >
                    <Switch id="mute" aria-label="Mute thread" /> Mute this
                    thread
                  </Label>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    className="ml-auto"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Tabs>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
  );
}

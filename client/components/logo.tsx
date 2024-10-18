"use client";

import * as React from "react";

import { Bot } from "lucide-react";

export function Logo() {
  return (
    <div className="flex-row flex items-center justify-center space-x-3">
      <Bot />
      <h4 className="text-base">ConvoBot</h4>
    </div>
  );
}

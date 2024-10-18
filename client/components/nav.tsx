"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface NavProps {
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    href: string;
  }[];
}

export function Nav({ links }: NavProps) {
  const pathname = usePathname();

  return (
    <div className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) => {
          const isActive =
            (pathname === "/" && link.href === "/") ||
            pathname === link.href ||
            pathname?.startsWith(`${link.href}/`);
          const variant = isActive ? "default" : "ghost";
          return (
            <Link
              key={index}
              href={link.href}
              className={cn(
                buttonVariants({ variant, size: "sm" }),
                variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start"
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    variant === "default" && "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

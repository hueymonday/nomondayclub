import * as React from "react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
  MinusIcon,
} from "lucide-react";

function Accordion({ className, ...props }) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("not-last:border-b-2 border-[#BBBBBB]/20 p-3", className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-center justify-between py-2.5 text-left text-lg leading-[1.4em] tracking-[-0.02em] font-medium transition-all outline-none",
          className,
        )}
        {...props}
      >
        {children}
        <div className="relative p-2 rounded-[8px] bg-[#F2F2F2]">
          <div className="relative h-3.5 w-3.5">
            <span
              className={cn(
                "absolute left-1/2 top-1/2 h-0.5 w-2.25 -translate-x-1/2 -translate-y-1/2 bg-black transition-all duration-300 ease-out",
                "group-data-[state=closed]/accordion-trigger:rotate-0",
                "group-data-[state=open]/accordion-trigger:rotate-0",
              )}
            />
            <span
              className={cn(
                "absolute left-1/2 top-1/2 h-2.25 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-black transition-all duration-300 ease-out",
                "group-data-[state=closed]/accordion-trigger:rotate-0",
                "group-data-[state=open]/accordion-trigger:rotate-90",
              )}
            />
          </div>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-[#555] text-left text-[13px] leading-[1.5em] data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "h-(--radix-accordion-content-height) pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
